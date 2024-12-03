import { SkillsType } from "@/types";
type SkillsProps = {
  skills: SkillsType;
};
export default function Skills({ skills }: SkillsProps) {
  return (
    <>
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{skills.label}</h2>
      <ul className="list-disc ml-5">
        {skills.values.map((skill, index) => (
          <li className="my-5 font-semibold" key={index}>
            {skill.label}
            <ul className="list-disc ml-5">
              {skill.values.map((subSkill, index) => (
                <li className="my-2" key={index}>
                  {subSkill.label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
