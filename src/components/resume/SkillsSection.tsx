import type { SkillsSection } from "@/types/resume";

interface SkillsSectionProps {
  skills: SkillsSection;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-5">
      <h2 className="text-lg font-bold text-gray-800 mb-2.5 pb-1.5 border-b-2 border-cyan-600">
        {skills.label}
      </h2>
      <div className="space-y-2.5">
        {skills.values.map((category, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-3">
            <h3 className="text-sm font-semibold text-gray-800 md:w-48 shrink-0">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-1.5 flex-1">
              {category.values?.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium border border-cyan-200"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
