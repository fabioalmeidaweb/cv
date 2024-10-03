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
  contacts: { label: string; value: string }[];
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
};
