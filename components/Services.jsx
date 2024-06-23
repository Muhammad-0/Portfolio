import Image from "next/image";
import React from "react";
import Web from "../public/assets/skills/web.png";
import Css from "../public/assets/skills/app-bg.png";
import Javascript from "../public/assets/skills/custom.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";

const Skills = () => {
  return (
    <div id="services" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Services
        </p>
        <h2 className="py-4">What I Offer</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Web} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Website Development</h3>
              </div>
            </div>
            <div className="justify-between text-justify">
              <p className="mx-auto">
                Website development involves creating and maintaining websites.
                It encompasses everything from designing the layout and
                appearance to implementing functionality and ensuring security.
                Developers use various tools and technologies to build websites,
                including HTML, CSS, JavaScript, server-side languages like
                Node.js, and databases. Website development can range from
                simple static web pages to complex web applications with dynamic
                content and interactivity.
              </p>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mobile App Development</h3>
              </div>
            </div>
            <div className="justify-between text-justify">
              <p className="mx-auto">
                Application development is the process of creating a computer
                program or set of programs to perform the various tasks required
                by a business. Applications help businesses automate processes
                and increase efficiency by doing everything from calculating
                monthly expenses to scheduling sales reports. Gathering
                requirements, designing prototypes, testing, implementation, and
                integration are all steps in the app development process.
              </p>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Custom Software Development</h3>
              </div>
            </div>
            <div className="justify-between text-justify">
              <p className="mx-auto">
                Cultivating custom solutions tailored to your business needs, I
                specialize in crafting robust software systems, including
                quotations and client management systems, inventory systems, and
                other bespoke business management solutions. With a commitment
                to innovation and excellence. Let&apos;s transform your vision into
                reality and elevate your business to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
