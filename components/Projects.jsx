import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/propex.png";
import premiumMeat from "../public/assets/projects/premium-meat.png";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import aiotech from "../public/assets/projects/cloudbased.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <ProjectItem
            title="Premium Meat"
            backgroundImg={premiumMeat}
            projectUrl="/"
            tech="React JS"
            description="Premium Meat, based in New Zealand, epitomizes quality sourcing from leading producers like ANZCO, Wilson Hellaby, Ken Wilson, Silver Ferns, and Van Den Brinks Poultry."

          />
          <ProjectItem
            title="PropEx All Things DHA"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
            description="
            Propex is a premier real estate agency in Pakistan, specializing in property sales and rentals, particularly in DHA areas. Renowned for professionalism and client satisfaction, Propex offers tailored services and expert guidance. With integrity and transparency, they ensure seamless and rewarding experiences for buyers and sellers, setting industry standards."
          />
          <ProjectItem
            title="AioTech"
            backgroundImg={aiotech}
            projectUrl="/twitch"
            tech="Next JS"
            description="AioTech Software is an comprehensive inventory solution designed to streamline every aspect of your business. From managing inventory and accounting to tracking clients and analyzing profit and loss, our software offers all-in-one functionality tailored to your needs."
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/"
            tech="React JS"
            description="Designed to provide users with real-time insights into the dynamic cryptocurrency market. Focusing on the last 24 hours' prices, our app offers intuitive graphs showcasing trending coins and comprehensive data on their performance."
         />
        </div>
      </div>
    </div>
  );
};

export default Projects;
