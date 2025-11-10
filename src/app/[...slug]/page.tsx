import fs from 'node:fs';

import yaml from 'js-yaml';
import { Roboto } from 'next/font/google';

import type { ResumeData } from '@/types/resume';

import PrintButton from '@/components/PrintButton';
import { AboutSection } from '@/components/resume/AboutSection';
import { CoursesSection } from '@/components/resume/CoursesSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { ResumeHeader } from '@/components/resume/ResumeHeader';
import { SkillsSection } from '@/components/resume/SkillsSection';

import './page.module.css';

const font = Roboto({ subsets: ['latin'], weight: '400' });

function getData(slug: string): ResumeData | null {
  try {
    const fileName = slug === 'drupal' ? 'data/drupal/en.yaml' : 'data/front-end/en.yaml';
    const doc = yaml.load(fs.readFileSync(fileName, 'utf8')) as ResumeData;
    return doc;
  } catch (e) {
    console.log(e);
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const rawSlug = (await params).slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const data = getData(slug);

  if (!data) {
    return {
      title: 'Fabio Almeida | Resume',
      description: "English version of Fabio Almeida's Curriculum."
    };
  }

  return {
    title: `${data.name} | ${data.position}`,
    description: `English version of ${data.name}'s Curriculum.`
  };
}

export async function generateStaticParams() {
  return [{ slug: ['drupal'] }, { slug: ['front-end'] }];
}

export default async function Home({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const rawSlug = (await params).slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const data = getData(slug);

  if (!data) {
    return (
      <h1 className="text-3xl font-bold pb-2 flex justify-center items-center h-screen">Error!</h1>
    );
  }

  return (
    <>
      <div
        className={`${font.className} mb-3 container mx-auto px-4 py-8 max-w-5xl print:w-full print:max-w-6xl `}
      >
        <ResumeHeader name={data.name} position={data.position} contacts={data.contacts} />

        <div className="space-y-8">
          <AboutSection data={data.about} />
          <SkillsSection skills={data.skills} />
          <ExperienceSection data={data.experience} />
          <EducationSection data={data.education} />
          <CoursesSection data={data.courses} />
        </div>
      </div>
      <PrintButton />
    </>
  );
}
