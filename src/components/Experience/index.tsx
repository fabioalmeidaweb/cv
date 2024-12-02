import { CVProps } from '@/types';

type WorkExperienceProps = {
  experience: CVProps['experience'];
};
export default function Experience({ experience }: WorkExperienceProps) {
  return (
    <section>
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{experience.label}</h2>

      {experience.values.map((skill, index) => (
        <div className="grid md:grid-cols-4 gap-3 my-8 break-inside-avoid print:grid-cols-4" key={index}>
          <div className="md:col-span-1 print:col-span-1">
            <h3 className="pb-2 text-2xl print:text-lg print:font-semibold">{skill.company}</h3>
            <p className="text-zinc-500">
              {skill.start} - {skill.end}
            </p>
            <p className="text-zinc-500">{skill.where}</p>
          </div>

          <div className="md:col-span-3 print:col-span-3">
            <h4 className="pb-2 text-2xl print:text-lg print:font-semibold">{skill.position}</h4>
            <ul className="list-disc">
              {skill.description.map((description, index) => (
                <li className="ml-6" key={index}>
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
