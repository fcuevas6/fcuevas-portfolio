import React from "react";


export default function ProjectCard({ ...props }) {
  return (
    <div className="flex flex-col md:flex-row lg:m-12 shadow-lg rounded-[1.1rem] lg:gap-6">
        <div className="min-w-[50%] hover:grayscale hover:scale-105 transition-transform">
          <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
            <img src={props.img} alt={props.alt} className="rounded-[1rem] border-1 border-gray-200"/>
          </a>
        </div>
        <div className="flex flex-col justify-center gap-4">
            <div>
                <h4 className="lg:text-3xl text-xl font-semibold p-2 text-neutral-900">{props.title}</h4>
                <p className="text-md p-2 text-neutral-900">{props.description}</p>
            </div>
            <div>
                <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="m-2 py-2 px-3 bg-neutral-800 rounded-md text-neutral-200 hover:bg-neutral-300 hover:text-neutral-800">Live Demo</button>
                </a>
                <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
                  <button className="m-2 py-2 px-3 bg-neutral-800 rounded-md text-neutral-200 hover:bg-neutral-300 hover:text-neutral-800">GitHub Repo</button>
                </a>
            </div>
            <div>
              <p className="px-3 py-2 text-xs text-neutral-500">Tech Stack</p>
              <div className="p-2">{props.tech}</div>
            </div>
        </div>
    </div>
  );
}