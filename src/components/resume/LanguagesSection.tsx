import { Languages } from 'lucide-react'
import type { LanguagesSection } from '@/types/resume'

interface LanguagesSectionProps {
  data: LanguagesSection
}

export function LanguagesSection({ data }: LanguagesSectionProps) {
  return (
    <section className="mb-5">
      <h2 className="text-lg font-bold text-gray-800 mb-2.5 pb-1.5 border-b-2 border-cyan-600">
        {data.label}
      </h2>
      <div className="flex flex-wrap gap-2">
        {data.values.map((language, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-lg"
          >
            <Languages className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-gray-800">
              {language.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
