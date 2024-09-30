import { CVProps } from "@/types";
type AboutProps = {
  about: CVProps["about"];
};
export default function About({ about }: AboutProps) {
  return (
    <>
      <h2 className="my-8 text-3xl uppercase">{about.label}</h2>
      {about.values.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </>
  );
}
