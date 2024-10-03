import { CVProps } from '@/types';
import fs from 'fs';
import yaml from 'js-yaml';
import { Roboto } from 'next/font/google';

import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Languages from '@/components/Languages';
import Skills from '@/components/Skills';

import './page.module.css';

const font = Roboto({ subsets: ['latin'], weight: '400' });

function getData(): CVProps | null {
  // Get document, or throw exception on error
  try {
    const doc = yaml.load(
      fs.readFileSync('data/cv/english.yaml', 'utf8')
    ) as CVProps;
    return doc;
  } catch (e) {
    console.log(e);
  }

  return null;
}

export const metadata = {
  title: 'Fabio Almeida | Resume',
  description: "English version of Fabio Almeida's Curriculum.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default async function Home() {
  const data = getData();

  if (!data) {
    return (
      <h1 className="text-3xl font-bold pb-2 flex justify-center items-center h-screen">
        Error!
      </h1>
    );
  }

  return (
    <div
      className={`${font.className} container print:w-[120%] print:m-3 print:max-w-full mt-3`}
    >
      <Header {...data} />

      <div className="grid lg:grid-cols-4 gap-4 grid-cols-1">
        <div className="px-10 py-5 col-span-1 bg-zinc-200">
          <Contacts contacts={data.contacts} />
          <Skills skills={data.skills} />
          <About about={data.about} />
          <Languages languages={data.languages} />
        </div>

        <div className="p-5 lg:col-span-3 col-span-1">
          <Experience experience={data.experience} />
        </div>
      </div>
    </div>
  );
}
