import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = 'data';

function discoverResumes(): Record<string, string> {
  const map: Record<string, string> = {};

  try {
    for (const folder of fs.readdirSync(DATA_DIR)) {
      const folderPath = path.join(DATA_DIR, folder);
      if (!fs.statSync(folderPath).isDirectory()) continue;

      for (const file of fs.readdirSync(folderPath)) {
        if (!file.endsWith('.yaml') && !file.endsWith('.yml')) continue;

        const locale = path.basename(file, path.extname(file));
        const filePath = path.join(folderPath, file);

        if (locale === 'en') {
          map[folder] = filePath; // /full-stack -> en.yaml
        } else {
          map[`${folder}/${locale}`] = filePath; // /full-stack/pt-br -> pt-br.yaml
        }
      }
    }
  } catch (e) {
    console.error('Error discovering resumes:', e);
  }

  return map;
}

export function getResumeSlugs(): string[] {
  return Object.keys(discoverResumes());
}

export function getResumeFilePath(slug: string): string | null {
  return discoverResumes()[slug] ?? null;
}

