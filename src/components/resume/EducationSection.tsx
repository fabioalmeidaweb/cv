import { Calendar, GraduationCap } from 'lucide-react';

import type { EducationSection } from '@/types/resume';

interface EducationSectionProps {
  data: EducationSection;
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <section className="mb-5 break-inside-avoid">
      <h2 className="text-lg font-bold text-gray-800 mb-2.5 pb-1.5 border-b-2 border-cyan-600">
        {data.label}
      </h2>
      <div className="space-y-3">
        {data.values.map((education, index) => (
          <div key={index} className="flex gap-3">
            <div className="shrink-0">
              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-cyan-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">{education.title}</h3>
              <p className="text-cyan-600 font-medium text-xs">{education.where}</p>
              <div className="flex items-center gap-1 text-xs text-gray-600 mt-0.5">
                <Calendar className="w-3 h-3" />
                <span>{education.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
