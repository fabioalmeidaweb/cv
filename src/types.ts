export type CVProps = {
  name: string;
  position: string;
  contacts: ContactsType;
  about: AboutType;
  skills: SkillsType;
  languages: LanguagesType;
  experience: ExperienceType;
  education: EducationType
  courses: CoursesType
};

export type ContactsType = {
  label: string;
  type: string;
  value: string;
}[];

export type AboutType = {
  label: string;
  values: string[];
};

export type SkillsType = {
  label: string;
  values: {
    label: string;
    values: {
      label: string;
    }[];
  }[];
};

export type LanguagesType = {
  label: string;
  values: {
    label: string;
  }[];
};

export type ExperienceType = {
  label: string;
  values: {
    company: string;
    position: string;
    start: string;
    end: string;
    where: string;
    description: string[];
    skills: string[];
  }[];
};

export type EducationType = {
  label: string;
  values: {
    title: string;
    where: string;
    year: string;
  }[];
};

export type CoursesType = {
  label: string;
  values: {
    title: string;
    where: string;
    year: string;
  }[];
};