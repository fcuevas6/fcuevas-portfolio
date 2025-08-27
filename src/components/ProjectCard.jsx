import React from "react";

export default function ProjectCard({ ...props }) {
  return (
    <div className="lg:flex lg:m-12 border-1 border-gray-200 rounded-2xl gap-8">
        <img src={props.img} alt={props.alt} className="lg:max-w-[50%] rounded-xl border-1 border-gray-200"/>
        <div className="flex flex-col justify-center gap-4">
            <div>
                <h2 className="lg:text-3xl text-xl p-2">{props.title}</h2>
                <p className="text-md p-2">{props.description}</p>
            </div>
            <div>
                <button className="m-2 py-2 px-3 border-1 rounded-md">Live Demo</button>
                <button className="m-2 py-2 px-3 border-1 rounded-md">GitHub Repo</button>
            </div>
        </div>
    </div>
  );
}