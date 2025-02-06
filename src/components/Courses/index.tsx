import { CoursesType } from '@/types';

type CoursesProps = {
  courses: CoursesType;
};

export default function Courses({ courses }: CoursesProps) {
  return (
    <section>
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{courses.label}</h2>
      {courses.values.map((item) => (
        <div className="my-5 break-inside-avoid" key={item.title}>
          <h3 className="text-lg font-semibold pb-1">{item.title}</h3>
          <h4 className="font-semibold break-words">{item.where}</h4>
          <p className="break-words text-zinc-500">{item.year}</p>
        </div>
      ))}
    </section>
  );
}
