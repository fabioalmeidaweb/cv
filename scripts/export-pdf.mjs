import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const outDir = join(root, 'out');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function getBasePath() {
  try {
    const require = createRequire(import.meta.url);
    const config = require(join(root, 'next.config.js'));
    return (config.default ?? config).basePath ?? '';
  } catch {
    return '';
  }
}

function findPages(dir, rel = '') {
  const pages = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (entry.name === '_next' || entry.name.startsWith('_not-found')) continue;
      pages.push(...findPages(join(dir, entry.name), relPath));
    } else if (entry.name.endsWith('.html')) {
      if (['404.html', 'index.html'].includes(entry.name) || entry.name.startsWith('_not-found')) continue;
      pages.push(relPath);
    }
  }
  return pages;
}

function startServer(basePath) {
  const server = createServer(async (req, res) => {
    try {
      let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (basePath && pathname.startsWith(basePath)) pathname = pathname.slice(basePath.length) || '/';
      const candidates = [pathname, `${pathname}.html`];
      for (const candidate of candidates) {
        const file = resolve(outDir, `.${candidate}`);
        if (file !== outDir && !file.startsWith(outDir + sep)) continue;
        if (existsSync(file) && statSync(file).isFile()) {
          res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
          res.end(await readFile(file));
          return;
        }
      }
      res.writeHead(404).end('Not found');
    } catch {
      res.writeHead(400).end('Bad request');
    }
  });
  return new Promise((done) => server.listen(0, '127.0.0.1', () => done(server)));
}

async function main() {
  if (!existsSync(outDir)) {
    console.error('out/ not found. Run `next build` first.');
    process.exit(1);
  }
  const pages = findPages(outDir);
  if (pages.length === 0) {
    console.error('No HTML pages found in out/.');
    process.exit(1);
  }

  const basePath = getBasePath();
  const server = await startServer(basePath);
  const { port } = server.address();
  let browser;
  try {
    browser = await chromium.launch();
    for (const rel of pages) {
      const route = rel.replace(/\.html$/, '');
      const url = `http://127.0.0.1:${port}${basePath}/${route}`;
      const page = await browser.newPage();
      let pdfPath;
      try {
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        // File name comes from the DownloadButton so link and file always match.
        const fileName = await page.getAttribute('a[download]', 'download');
        if (!fileName) throw new Error(`Download link not found in ${rel}`);
        pdfPath = join(outDir, dirname(rel), fileName);
        await page.pdf({
          path: pdfPath,
          format: 'A4',
          printBackground: true,
          preferCSSPageSize: true,
          scale: 0.88,
        });
      } finally {
        await page.close();
      }
      console.log(`PDF: ${pdfPath} (${statSync(pdfPath).size} bytes)`);
    }
  } finally {
    await browser?.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
