import React from "react";
import ProjectCard from "./components/ProjectCard";
import surgeryStatusBoardImg from './assets/surgery-status-board.png';
import littleLemonRestaurantImg from './assets/little-lemon-restaurant.png';

export default function Projects() {
  return (
    <section className="p-4">
        <h2 className="font-bold text-3xl lg:px-12 py-4">Projects</h2>
        <div className="grid grid-cols-1 gap-4">
            <ProjectCard 
                title="Surgery Status Board"
                img={surgeryStatusBoardImg}
                alt="Surgery Status Board Screenshot"
                description="A web application to track the status of surgeries in a hospital setting."
            />
            <ProjectCard 
                title="Little Lemon Restaurant"
                img={littleLemonRestaurantImg}
                alt="Little Lemon Restaurant Screenshot"
                description="A website for the Little Lemon Restaurant."
            />
        </div>
    </section>
  );
}