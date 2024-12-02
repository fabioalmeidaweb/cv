import { CVProps } from "@/types";
type SkillsProps = {
  skills: CVProps["skills"];
};
export default function Skills({ skills }: SkillsProps) {
  return (
    <>
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{skills.label}</h2>
      {skills.values.map((skill, index) => (
        <p className="my-2 font-semibold" key={index}>
          {skill.label}
        </p>
      ))}
    </>
  );
}
