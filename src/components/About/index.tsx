import { AboutType } from "@/types";
type AboutProps = {
  about: AboutType;
};
export default function About({ about }: AboutProps) {
  return (
    <section className="break-inside-avoid">
      <h2 className="my-8 text-3xl uppercase border-b border-zinc-800">{about.label}</h2>
      {about.values.map((value, index) => (
        <p className="mb-2" key={index}>{value}</p>
      ))}
    </section>
  );
}
