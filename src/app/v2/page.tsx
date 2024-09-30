import { Roboto } from "next/font/google";
import "./page.module.css";
import yaml from "js-yaml";
import fs from "fs";
import { CV, CVProps } from "@/types";
import Header from "@/components/Header";
import Contacts from "@/components/Contacts";

const font = Roboto({ subsets: ["latin"], weight: "400" });

function getData(): CVProps | null {
  // Get document, or throw exception on error
  try {
    const doc = yaml.load(
      fs.readFileSync("data/cv/english.yaml", "utf8")
    ) as CVProps;
    return doc;
  } catch (e) {
    console.log(e);
  }

  return null;
}

export const metadata = {
  title: "Fabio Almeida | Resume",
  description: "English version of Fabio Almeida's Curriculum.",
  icons: {
    icon: "/favicon.ico",
  },
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

      <div className="grid grid-cols-4 gap-4">
        <Contacts contacts={data.contacts} />

        <div className="p-5 col-span-3">
          <h2 className="my-8 text-3xl uppercase">Work Experience</h2>
        </div>
      </div>
    </div>
  );
}
