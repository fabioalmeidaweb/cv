import { EducationType } from "@/types";
type EducationProps = {
  education: EducationType;
};
export default function Education({ education }: EducationProps) {
  return (
    <section className="break-inside-avoid">
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{education.label}</h2>
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {education.values.map((item) => (
          <div className="my-1 mb-5" key={item.title}>
            <h3 className="text-lg font-semibold pb-1">{item.title}</h3>
            <h4 className="font-semibold break-words">{item.where}</h4>
            <p className="break-words text-zinc-500">{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
