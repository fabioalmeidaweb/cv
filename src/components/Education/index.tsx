import { CV, CVProps } from "@/types";
type EducationProps = {
  education: CVProps["education"];
};
export default function Education({ education }: EducationProps) {
  return (
    <>
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{education.label}</h2>
      <div className="grid grid-cols-2">
        {education.values.map((item) => (
          <div className="my-5" key={item.title}>
            <h3 className="text-lg font-semibold pb-1">{item.title}</h3>
            <h4 className="font-semibold break-words">{item.local}</h4>
            <p className="break-words">{item.year}</p>
          </div>
        ))}
      </div>
    </>
  );
}
