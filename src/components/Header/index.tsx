import { CVProps } from "@/types";

export default function Header(data: CVProps) {
  return (
    <header className="py-10 text-center uppercase bg-zinc-900 print:bg-white">
      <h1 className="pt-10 text-5xl pb-2 text-zinc-50 print:text-zinc-900">
        {data.name}
      </h1>
      <p className="pb-10 text-xl font-bold text-zinc-400">{data.position}</p>
    </header>
  );
}
