import { CVProps } from '@/types';

export default function Header({ name, position }: Pick<CVProps, 'name' | 'position'>) {
  return (
    <header className="py-10 text-center uppercase bg-zinc-900 print:py-0 print:bg-white">
      <h1 className="pt-10 text-5xl pb-2 text-zinc-50 print:pt-0 print:text-zinc-900">{name}</h1>
      <p className="pb-10 text-xl print:text-base font-bold text-zinc-400 print:text-zinc-900">
        {position}
      </p>
    </header>
  );
}
