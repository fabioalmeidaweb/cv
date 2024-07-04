import { Inter } from "next/font/google";
import "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Fabio Almeida",
  description: "English version of Fabio Almeida's Curriculum.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="container max-w-4xl p-10 text-zinc-800">
      {/* Header */}
      <header className="py-3">
        <h1 className="text-3xl font-bold pb-2">Fabio Almeida</h1>
        <p className="text-lg italic pb-2 font-bold">
          Full Stack Developer / Drupal Specialist
        </p>
        <p className="text-lg italic pb-2">
          Porto Alegre, Rio Grande do Sul, Brasil
        </p>
      </header>
      <hr />
      {/* Contact */}
      <section className="py-3">
        <h2 className="text-xl pb-2 font-bold underline">Contact</h2>
        <p className="pb-2">
          <a href="tel:+55 51 981202690" className="underline text-blue-600">
            +55 (51) 98120-2690
          </a>
          <span className="pb-1 pl-1 text-sm text-zinc-500">(Mobile)</span>
        </p>
        <p className="pb-2">
          <a
            href="https://www.linkedin.com/in/fabioalmeidaweb/"
            className="underline text-blue-600"
          >
            https://www.linkedin.com/in/fabioalmeidaweb
          </a>
          <span className="pb-1 pl-1 text-sm text-zinc-500">(LinkedIn)</span>
        </p>
        <p className="pb-2">
          <a
            href="mailto:fabio.natito@gmail.com"
            className="underline text-blue-600"
          >
            fabio.natito@gmail.com
          </a>
          <span className="pb-1 pl-1 text-sm text-zinc-500">(E-mail)</span>
        </p>
      </section>
      <hr />
      {/* About */}
      <section className="py-3">
        <h2 className="text-xl pb-2 font-bold underline">About</h2>
        <p className="pb-2">
          Professional specialist in Drupal, having worked as a developer and
          Tech Lead, and also in ReactJS.
        </p>
        <p className="pb-2">
          In Drupal, I have advanced knowledge in module development, themes,
          and integrations with other systems and APIs, as well as architecture,
          development standards, performance, and scalability.
        </p>
        <p className="pb-2">
          In ReactJS, I advanced skills in developing modern web applications,
          such as Server Side Rendering and Static Site Generation by using
          frameworks like NextJS and GatsbyJS, using best practices in
          development and architecture to deliver robust and scalable solutions.
        </p>
      </section>
      <hr />
      {/*
        @MARK: Experience
      */}
      <section className="py-3">
        <h2 className="text-xl pb-2 font-bold underline">Experience</h2>

        {/*
          @MARK: NTConsult
        */}
        <ul className="list-disc list-outside pl-5">
          <li>
            <h3 className="text-lg pb-2 font-bold">NTConsult Corp</h3>
            <ul className="list-disc list-outside pl-5">
              <li className="pb-2">
                <h4 className="text-base font-bold">Full Stack Developer</h4>
                <p className="text-sm text-zinc-500">
                  Jun 2024 - now · 1 yrs 2 mos
                </p>
                <p className="text-sm text-zinc-500">
                  Porto Alegre, Rio Grande do Sul, Brasil · Remote
                </p>
                <ul className="list-disc list-outside pl-5 pt-2">
                  <li className="pb-1">
                    Drupal site building and content management;
                  </li>
                  <li className="pb-1">
                    Integration between Drupal and GatsbyJS;
                  </li>
                  <li className="pb-1">React Components development;</li>
                  <li className="pb-1">
                    Storybook configuration and creation stories for new and
                    legacy components;
                  </li>
                  <li className="pb-1">API integrations;</li>
                  <li className="pb-1">Squad leadership;</li>
                </ul>
                <p className="py-2">
                  <span className="font-bold">Skills: </span>
                  JavaScript · ReactJS · GatsbyJS · Storybook · CSS · Drupal
                </p>
              </li>
            </ul>
          </li>
        </ul>
        {/*
          @MARK: Hogarth
        */}
        <ul className="list-disc list-outside pl-5">
          <li>
            <h3 className="text-lg pb-2 font-bold">Hogarth Worldwide</h3>
            <p className="pb-1 text-sm text-zinc-500">7 yrs 2 mos</p>
            <ul className="list-disc list-outside pl-5">
              <li className="pb-2">
                <h4 className="text-base font-bold">Drupal Tech Lead</h4>
                <p className="text-sm text-zinc-500">
                  Jan 2021 - Feb 2023 · 2 yrs 2 mos
                </p>
                <p className="text-sm text-zinc-500">
                  Porto Alegre, Rio Grande do Sul, Brasil · Remote
                </p>
                <ul className="list-disc list-outside pl-5 pt-2">
                  <li className="pb-1">Drupal development team leadership; </li>
                  <li className="pb-1">
                    Periodic meetings for feedback with the team;
                  </li>
                  <li className="pb-1">Management of hours worked; </li>
                  <li className="pb-1">Monitoring the board and sprints; </li>
                  <li className="pb-1">
                    Workshops and training (internal) in the Drupal and
                    Javascript ecosystem;
                  </li>
                  <li className="pb-1">
                    Management and deployment in Acquia Cloud and Acquia Site
                    Factory;
                  </li>
                  <li className="pb-1">
                    High-level estimates for unforeseen tasks in Sprints.
                  </li>
                </ul>
                <p className="py-2">
                  <span className="font-bold">Skills:</span> Leadership · Acquia
                  Cloud · JavaScript · Drupal · Management
                </p>
              </li>
              <li className="pb-2">
                <h4 className="text-base font-bold">Full Stack Developer</h4>
                <p className="text-sm text-zinc-500">
                  Jan 2016 - Jan 2021 · 5 yrs 1 mo
                </p>
                <p className="text-sm text-zinc-500">
                  Porto Alegre, Rio Grande do Sul, Brasil · Remote
                </p>
                <ul className="list-disc list-outside pl-5 pt-2">
                  <li className="pb-1">
                    Back end development with PHP (Laravel / Drupal);
                  </li>
                  <li className="pb-1">Module development for Drupal;</li>
                  <li className="pb-1">Theme development for Drupal;</li>
                  <li className="pb-1">
                    Creating and applying Drupal patches;
                  </li>
                  <li className="pb-1">
                    Creating and maintenance websites React with Drupal
                    (decoupled);
                  </li>
                  <li className="pb-1">DevOps / Linux infrastructure; </li>
                  <li className="pb-1">Agile methodologies (Scrum).</li>
                </ul>
                <p className="py-2">
                  <span className="font-bold">Skills:</span> SASS · PHP · Drupal
                  · React.js
                </p>
              </li>
            </ul>
          </li>
        </ul>
        {/*
          @MARK: Encode
        */}
        <ul className="list-disc list-outside pl-5">
          <li>
            <h3 className="text-lg pb-2 font-bold">
              Encode Web - Produtora Digital
            </h3>
            <ul className="list-disc list-outside pl-5">
              <li className="pb-2">
                <h4 className="text-base font-bold">Developer</h4>
                <p className="pb-1 text-sm text-zinc-500">
                  Sep 2015 - Dec 2015 · 4 mos
                </p>
                <p className="pb-1 text-sm text-zinc-500">
                  Porto Alegre - Brazil · On-site
                </p>
                <ul className="list-disc list-outside pl-5 pt-2">
                  <li className="pb-1">
                    Back-end development with PHP (Laravel / Wordpress);
                  </li>
                  <li className="pb-1">DevOps / Linux Infrastructure;</li>
                  <li className="pb-1">gile methodologies (Scrum).</li>
                </ul>
                <p className="py-2">
                  <span className="font-bold">Skills:</span> SASS · PHP ·
                  WordPress · Web Applications
                </p>
              </li>
            </ul>
          </li>
        </ul>
        {/*
          @MARK: Targeteria
        */}
        <ul className="list-disc list-outside pl-5">
          <li>
            <h3 className="text-lg pb-2 font-bold">Targeteria</h3>
            <ul className="list-disc list-outside pl-5">
              <li className="pb-2">
                <h4 className="text-base font-bold">Developer</h4>
                <p className="pb-1 text-sm text-zinc-500">
                  Jan 2014 - Sep 2015 · 1 yr 9 mos
                </p>
                <p className="pb-1 text-sm text-zinc-500">
                  Porto Alegre e Região, Brasil
                </p>
                <ul className="list-disc list-outside pl-5 pt-2">
                  <li className="pb-1">
                    Back-end development with PHP (Zend / Laravel);
                  </li>
                  <li className="pb-1">Back-end development with NodeJS;</li>
                  <li className="pb-1">
                    Front-end development with HTML5 (Bootstrap/Kickstart), CSS3
                    and JavaScript (jQuery, AngularJS, VueJS, etc);
                  </li>
                  <li className="pb-1">Customer Service;</li>
                  <li className="pb-1">
                    Clients training in the systems developed by the agency;
                  </li>
                  <li className="pb-1">DevOps / Linux Infrastructure.</li>
                </ul>
                <p className="py-2">
                  <span className="font-bold">Skills:</span> PHP · WordPress ·
                  NodeJs
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <hr />
      {/* Education */}
      <section className="py-3">
        <h2 className="text-xl pb-2 font-bold underline">Education</h2>
        <ul className="list-disc list-outside pl-5">
          <li className="pb-2">
            <h3 className="text-lg pb-2 font-bold">Dom João Becker</h3>
            <p className="pb-1 text-base font-bold">
              Técnico em Informática, Tecnologia da Informação
            </p>
            <p className="pb-1 text-sm text-zinc-500">2013 - 2014</p>
          </li>
          <li className="pb-2">
            <h3 className="text-lg pb-2 font-bold">
              Pontifícia Universidade Católica de São Paulo
            </h3>
            <p className="pb-1 text-base font-bold">Bachelor of Geography</p>
            <p className="pb-1 text-sm text-zinc-500">2006 - 2010</p>
          </li>
          <li className="pb-2">
            <h3 className="text-lg pb-2 font-bold">ABA English</h3>
            <p className="pb-1 text-base font-bold">
              B1 Intermediate - English
            </p>
          </li>
          <li className="pb-2">
            <h3 className="text-lg pb-2 font-bold">freeCodeCamp</h3>
            <p className="pb-1 text-base font-bold">
              Full Stack Web Development Certification
            </p>
          </li>
        </ul>
      </section>
      <hr />
      {/* Licenses & certifications */}
      <section className="py-3">
        <h2 className="text-xl pb-2 font-bold underline">
          Licenses & certifications
        </h2>
        <ul className="list-disc list-outside pl-5">
          <li className="pb-2">
            <h3 className="text-lg pb-1 font-bold">Management Foundations</h3>
            <p className="pb-1 text-sm text-zinc-500">May 2022</p>
          </li>
          <li className="pb-2">
            <h3 className="text-lg pb-1 font-bold">React: State Management</h3>
            <p className="pb-1 text-sm text-zinc-500">Feb 2020</p>
          </li>
          <li className="pb-2">
            <h3 className="text-lg pb-1 font-bold">
              TypeScript for Node.js Developers
            </h3>
            <p className="pb-1 text-sm text-zinc-500">Jan 2020</p>
          </li>
          <li className="pb-2">
            <h3 className="text-lg pb-1 font-bold">
              Become a MERN Stack JavaScript Developer
            </h3>
            <p className="pb-1 text-sm text-zinc-500">Nov 2019</p>
          </li>
          <li className="pb-2">
            <h3 className="text-lg pb-1 font-bold">
              Acquia Certified Site Builder - Drupal 8
            </h3>
            <p className="pb-1 text-sm text-zinc-500">Oct 2018</p>
          </li>
        </ul>
        <p>
          See more in my Linkedin profile:
          <a
            className="underline text-blue-600"
            href="https://www.linkedin.com/in/fabioalmeidaweb/?locale=en_US"
          >
            https://www.linkedin.com/in/fabioalmeidaweb/?locale=en_US
          </a>
        </p>
      </section>
    </div>
  );
}
