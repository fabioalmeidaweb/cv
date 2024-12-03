import { CVProps } from '@/types';
import fs from 'node:fs';
import yaml from 'js-yaml';
import { Roboto } from 'next/font/google';

import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Languages from '@/components/Languages';
import Skills from '@/components/Skills';

import './page.module.css';
import Education from '@/components/Education';
import Courses from '@/components/Courses';

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
  description: "English version of Fabio Almeida's Curriculum."
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
      className={`${font.className} mb-3 container print:w-[120%] print:m-0 print:max-w-full`}
    >
      <Header {...data} />

      <div className="grid lg:grid-cols-4 lg:gap-4 grid-cols-1 print:grid-cols-3 print:gap-2 ">
        <div className="px-5 py-5 col-span-1 bg-zinc-200 lg:px-10 print:bg-white print:border-r border-zinc-800 print:py-0">
          <Contacts contacts={data.contacts} />
          <Skills skills={data.skills} />
          <Languages languages={data.languages} />
        </div>

        <div className="p-5 lg:col-span-3 col-span-1 print:col-span-2 print:py-0">
          <About about={data.about} />
          <Experience experience={data.experience} />
          <Education education={data.education} />
          <Courses courses={data.courses} />
        </div>
      </div>
    </div>
  );
}
