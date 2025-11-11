import { Award, ExternalLink } from 'lucide-react';

import type { CoursesSection } from '@/types/resume';

interface CoursesSectionProps {
  data: CoursesSection;
}

export function CoursesSection({ data }: CoursesSectionProps) {
  return (
    <section className="mb-5 break-inside-avoid">
      <h2 className="text-lg font-bold text-gray-800 mb-2.5 pb-1.5 border-b-2 border-cyan-600">
        {data.label}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {data.values.map((course, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-2.5 border border-gray-200 hover:border-cyan-600 transition-colors"
          >
            <div className="flex gap-2">
              <div className="shrink-0">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-800 leading-tight flex-1">
                    {course.title}
                  </h3>
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-cyan-600 hover:text-cyan-700"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-cyan-600 font-medium">{course.where}</p>
                <p className="text-xs text-gray-600">{course.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
