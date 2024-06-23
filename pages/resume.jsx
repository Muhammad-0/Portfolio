import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Muhammad | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Muhammad Ali</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/muhammad-ali-834631237/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Muhammad-0"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            {/* <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux */}
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
          {/* <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

    

        {/* ----- */}
        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">AioDock</span>
            <span className="px-2">|</span>Islamabad, Pakistan
          </p>
          <p className="py-1 italic">
            Software Engineer (2022 - 2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
           
          </ul>
        </div>

            {/* Education */}

            <h5 className="text-center underline text-[18px] py-4">Education</h5>
     
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          {/* UON */}
          <li>
            <div className=" flex justify-between items-center">
              <p className="italic">
                <span className="font-bold italic">MSc Computing</span>
                <span className="px-2">|</span> University of Northampton
              </p>
              <p className="italic">
                <span className="py-1 italic">
                  <span className="font-bold">Northampton, UK</span> (January
                  2024 - Present)
                </span>
              </p>
            </div>
          </li>
          {/* UOG */}
          <li>
            <div className="flex justify-between items-center">
              <p className="italic">
                <span className="font-bold italic">Bachelors in IT</span>
                <span className="px-2">|</span> University of Gujrat
              </p>
              <p className="italic">
                <span className="py-1 italic">
                  <span className="font-bold">Pakistan</span> ( 2018 - 2022)
                </span>
              </p>
            </div>
          </li>
        </ul>
        
      </div>
    </>
  );
};

export default resume;
