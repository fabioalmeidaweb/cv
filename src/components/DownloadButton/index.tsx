'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 shadow-lg transition-colors flex items-center gap-2 print:hidden"
      aria-label="Print resume"
    >
      <Printer className="w-5 h-5" />
      <span className="hidden sm:inline">Print</span>
    </button>
  );
}
