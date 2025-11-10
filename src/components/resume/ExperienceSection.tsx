import { Calendar, MapPin } from 'lucide-react';

import type { ExperienceSection } from '@/types/resume';

interface ExperienceSectionProps {
  data: ExperienceSection;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="mb-5">
      <h2 className="text-lg font-bold text-gray-800 mb-2.5 pb-1.5 border-b-2 border-cyan-600">
        {data.label}
      </h2>
      <div className="space-y-6">
        {data.values.map((experience, index) => (
          <div key={index} className="relative pl-5 border-l-2 border-cyan-600">
            <div className="absolute w-3 h-3 bg-cyan-600 rounded-full -left-[7px] top-1.5"></div>

            <div className="mb-1">
              <div className="flex items-start justify-between gap-4 mb-0.5">
                <h3 className="text-base font-bold text-gray-800 flex-1">{experience.position}</h3>
                <span className="flex items-center gap-1 text-xs text-gray-600 whitespace-nowrap">
                  <Calendar className="w-3 h-3" />
                  {experience.start} - {experience.end}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-cyan-600">{experience.company}</p>
                <span className="flex items-center gap-1 text-xs text-gray-600 whitespace-nowrap">
                  <MapPin className="w-3 h-3" />
                  {experience.where}
                </span>
              </div>
            </div>

            <ul className="space-y-1 mb-2 list-disc list-inside">
              {experience.description.map((desc, descIndex) => (
                <li key={descIndex} className="text-gray-700 leading-relaxed text-sm mb-0">
                  {desc}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {experience.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-sm text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
