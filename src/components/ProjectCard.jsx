import React from "react";


export default function ProjectCard({ ...props }) {
  return (
    <div className="lg:flex lg:m-12 border-1 border-neutral-300 rounded-2xl gap-8">
        <img src={props.img} alt={props.alt} className="lg:max-w-[50%] rounded-xl border-1 border-gray-200"/>
        <div className="flex flex-col justify-center gap-4">
            <div>
                <h4 className="lg:text-3xl text-xl font-semibold p-2 text-neutral-900">{props.title}</h4>
                <p className="text-md p-2 text-neutral-900">{props.description}</p>
            </div>
            <div>
                <button className="m-2 py-2 px-3 border-1 rounded-md text-neutral-900 hover:bg-neutral-800 hover:text-neutral-200">Live Demo</button>
                <button className="m-2 py-2 px-3 border-1 rounded-md text-neutral-900 hover:bg-neutral-800 hover:text-neutral-200">GitHub Repo</button>
            </div>
            <div>
              <p className="px-3 py-2 text-xs">Tech Stack</p>
              <div className="p-2">{props.tech}</div>
            </div>
        </div>
    </div>
  );
}