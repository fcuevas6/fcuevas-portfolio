import React from "react";
import ProjectCard from "./components/ProjectCard";
import surgeryStatusBoardImg from './assets/surgery-status-board.png';
import littleLemonRestaurantImg from './assets/little-lemon-restaurant.png';
import {
  HTML5,
  CSS3,
  JavaScript,
  React as ReactLogo,
  Figma,
  GitHubDark,
  TailwindCSS,
  ShadcnUI
   } from "developer-icons";
import Tooltip from "./components/Tooltip";

   const iconStyle = "inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4";

export default function Projects() {
  return (
    <section className="px-4 lg:py-18 py-8 bg-neutral-100">
        <h3 className="font-bold lg:text-5xl text-3xl lg:px-12 lg:py-4 py-6 text-neutral-900">Projects</h3>
        <div className="grid grid-cols-1 gap-12 lg:gap-0">
            <ProjectCard 
                title="Surgery Status Board"
                img={surgeryStatusBoardImg}
                alt="Surgery Status Board Screenshot"
                description="
                A web application to track the status of Created a real-time surgical status dashboard 
                to enhance hospital communication with patients’ families and streamline patient intake. 
                The application provides live updates on surgery progress and patient information, 
                improving efficiency and coordination among medical teams and administrators.surgeries 
                in a hospital setting."
                liveLink="https://v56-tier1-team-01.vercel.app/"
                repoLink="https://github.com/chingu-voyages/V56-tier1-team-01"
                tech={<>
                  <Tooltip text="HTML5"><HTML5 className={iconStyle} title="HTML5"/></Tooltip>
                  <Tooltip text="CSS3"><CSS3 className={iconStyle} title="CSS3"/></Tooltip>
                  <Tooltip text="JavaScript"><JavaScript className={iconStyle} title="JavaScript"/></Tooltip>
                  <Tooltip text="React"><ReactLogo className={iconStyle} title="React"/></Tooltip>
                  <Tooltip text="Figma"><Figma className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="Figma"/></Tooltip>
                  <Tooltip text="TailwindCSS"><TailwindCSS className={iconStyle} title="TailwindCSS"/></Tooltip>
                  <Tooltip text="ShadcnUI"><ShadcnUI className={iconStyle} title="ShadcnUI"/></Tooltip>
                  <Tooltip text="GitHub"><GitHubDark className={iconStyle} title="GitHub"/></Tooltip>
                  </>}
                  />
            <ProjectCard 
                title="Little Lemon Restaurant"
                img={littleLemonRestaurantImg}
                alt="Little Lemon Restaurant Screenshot"
                description="
                Developed a responsive restaurant website using React, featuring an interactive reservation 
                form, dynamic menu display, and intuitive navigation. Built with a focus on accessibility, 
                performance optimization, and delivering a cohesive digital brand experience."
                liveLink="https://little-lemon.fcuevas09.workers.dev/"
                repoLink="https://github.com/fcuevas6/Francisco-Little-Lemon-Website"
                tech={<>
                  <Tooltip text="HTML5"><HTML5 className={iconStyle} title="HTML5"/></Tooltip>
                  <Tooltip text="CSS3"><CSS3 className={iconStyle} title="CSS3"/></Tooltip>
                  <Tooltip text="JavaScript"><JavaScript className={iconStyle} title="JavaScript"/></Tooltip>
                  <Tooltip text="React"><ReactLogo className={iconStyle} title="React"/></Tooltip>
                  <Tooltip text="Figma"><Figma className={iconStyle} title="Figma"/></Tooltip>
                  <Tooltip text="GitHub"><GitHubDark className={iconStyle} title="GitHub"/></Tooltip>
                  </>}
            />
        </div>
    </section>
  );
}