import type { AboutSection } from '@/types/resume';

interface AboutSectionProps {
  data: AboutSection;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="mb-5 break-inside-avoid">
      <h2 className="text-lg font-bold text-gray-800 mb-2.5 pb-1.5 border-b-2 border-cyan-600">
        {data.label}
      </h2>
      <div className="space-y-1.5">
        {data.values.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed text-sm">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
