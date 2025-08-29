import React from "react";
import franciscoImg2 from './assets/francisco-2.jpg';

export default function AboutMe() {
  return (
    <section className="px-4 lg:py-18 py-8 bg-neutral-800">
        <h3 className="font-bold lg:text-5xl text-3xl lg:px-12 lg:py-4 py-6 text-neutral-100">About Me</h3>
        <div className="lg:flex lg:gap-12 lg:m-12 justify-center items-center">
            <div className="min-w-[12rem] lg:min-w-[36rem]">
                <img src={franciscoImg2} alt="Francisco Cuevas" className="rounded-lg  shadow-lg shadow-black/30"/>
            </div>
            <div>
                <p className="text-4xl py-4 text-neutral-100">Hello there! 👋</p>
                <p className="text-md py-4 text-neutral-100">
                    I am Francisco Cuevas Coria, a front-end developer with a background 
                    in graphic design and digital marketing. My design experience provides 
                    me with a strong foundation in visual communication and user experience, 
                    which I now apply to building responsive, accessible, and performance-driven websites.
                </p>
                <p className="text-md pb-4 text-neutral-100">
                    My technical expertise includes HTML, CSS, JavaScript, and React, along with 
                    experience using TailwindCSS for modern styling, GitHub for version control, 
                    and Figma for design collaboration. I am committed to creating interfaces that 
                    balance clean design with reliable functionality, ensuring a seamless experience 
                    across devices. I thrive in collaborative environments, adapt quickly to new 
                    technologies, and focus on producing solutions that meet both user needs and 
                    organizational goals with precision and efficiency.
                </p>
            </div>
        </div>
    </section>
  );
}