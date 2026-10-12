import { Download } from 'lucide-react';

export default function DownloadButton({
  slug,
  name,
  position,
}: {
  slug: string[];
  name: string;
  position: string;
}) {
  // ASCII-only: servers that send Content-Disposition mangle non-ASCII names.
  const fileName = `${name} - ${position}.pdf`.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return (
    <a
      href={encodeURIComponent(fileName)}
      download={fileName}
      className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 shadow-lg transition-colors flex items-center gap-2 print:hidden"
      aria-label="Download resume as PDF"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline">PDF</span>
    </a>
  );
}
