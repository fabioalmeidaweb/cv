import { CVProps } from '@/types';

type LanguagesProps = {
  languages: CVProps['languages'];
};
export default function Languages({ languages }: LanguagesProps) {
  return (
    <>
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{languages.label}</h2>
      {languages.values.map((skill, index) => (
        <p className="my-2 font-semibold" key={index}>
          {skill.label}
        </p>
      ))}
    </>
  );
}
