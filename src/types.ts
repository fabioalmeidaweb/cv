export type CV = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  position: string;
  location: string;
};

export type CVProps = {
  name: string;
  position: string;
  contacts: { label: string; type: string; value: string }[];
  about: { label: string; values: string[] };
  skills: { label: string; values: { label: string; value: number }[] };
  languages: { label: string; values: { label: string; value: number }[] };
  experience: {
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
  education: {
    label: string;
    values: {
      title: string;
      where: string;
      year: string;
    }[]
  }
  courses: {
    label: string;
    values: {
      title: string;
      where: string;
      year: string;
    }[]
  }
};
