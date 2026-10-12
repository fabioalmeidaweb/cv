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
  return (
    <a
      href={encodeURIComponent(`${name} - ${position}.pdf`)}
      download={`${name} - ${position}.pdf`}
      className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 shadow-lg transition-colors flex items-center gap-2 print:hidden"
      aria-label="Download resume as PDF"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline">PDF</span>
    </a>
  );
}
