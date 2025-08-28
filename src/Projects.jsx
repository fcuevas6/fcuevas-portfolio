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

export default function Projects() {
  return (
    <section className="p-4 bg-neutral-100">
        <h3 className="font-bold text-3xl lg:px-12 py-4 text-neutral-900">Projects</h3>
        <div className="grid grid-cols-1 gap-4">
            <ProjectCard 
                title="Surgery Status Board"
                img={surgeryStatusBoardImg}
                alt="Surgery Status Board Screenshot"
                description="A web application to track the status of surgeries in a hospital setting."
                tech={<>
                  <HTML5 className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="HTML5"/>
                  <CSS3 className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="CSS3"/>
                  <JavaScript className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="JavaScript"/>
                  <ReactLogo className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="React"/>
                  <Figma className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="Figma"/>
                  <TailwindCSS className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="TailwindCSS"/>
                  <ShadcnUI className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="ShadcnUI"/>
                  <GitHubDark className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="GitHub"/>
                  </>}
                  />
            <ProjectCard 
                title="Little Lemon Restaurant"
                img={littleLemonRestaurantImg}
                alt="Little Lemon Restaurant Screenshot"
                description="A website for the Little Lemon Restaurant."
                tech={<>
                  <HTML5 className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="HTML5"/>
                  <CSS3 className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="CSS3"/>
                  <JavaScript className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="JavaScript"/>
                  <ReactLogo className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="React"/>
                  <Figma className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="Figma"/>
                  <GitHubDark className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 mb-4" title="GitHub"/>
                  </>}
            />
        </div>
    </section>
  );
}