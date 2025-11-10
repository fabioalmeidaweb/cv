export interface Contact {
  label: string;
  type: string;
  value: string;
}

export interface AboutSection {
  label: string;
  values: string[];
}

export interface SkillCategory {
  label: string;
  values?: {
    label: string;
  }[];
}

export interface SkillsSection {
  label: string;
  values: SkillCategory[];
}

export interface LanguagesSection {
  label: string;
  values: {
    label: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  start: string;
  end: string;
  where: string;
  description: string[];
  skills: string[];
}

export interface ExperienceSection {
  label: string;
  values: ExperienceItem[];
}

export interface EducationItem {
  title: string;
  where: string;
  year: string;
}

export interface EducationSection {
  label: string;
  values: EducationItem[];
}

export interface CourseItem {
  title: string;
  where: string;
  year: string;
  link?: string;
}

export interface CoursesSection {
  label: string;
  values: CourseItem[];
}

export interface ResumeData {
  name: string;
  position: string;
  contacts: Contact[];
  about: AboutSection;
  skills: SkillsSection;
  languages: LanguagesSection;
  experience: ExperienceSection;
  education: EducationSection;
  courses: CoursesSection;
}
