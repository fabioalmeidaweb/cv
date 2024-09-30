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
  email: string;
  contacts: { label: string; value: string }[];
};
