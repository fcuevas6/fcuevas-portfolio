import React from "react";
import {
    LinkedIn,
    GitHubDark
} from 'developer-icons'

export default function Contact() {
  return (
    <section  className="px-4 lg:py-18 py-8 bg-neutral-100">
        <h3 className="font-bold lg:text-5xl text-3xl lg:px-12 lg:py-4 py-6 text-neutral-800">Contact Me</h3>
        <div className="lg:flex lg:gap-12 justify-space-between items-center">
            <div className="basis-3/5">
                <p className="text-2xl lg:px-12 lg:py-4 py-6 text-neutral-800">Let's Build Something Together</p>
                <p className="lg:px-12 lg:py-4 py-6 text-neutral-800">
                    I’m open to new opportunities in front-end development and would 
                    love to discuss how I can contribute to your team or projects. 
                    Whether you’re hiring, collaborating, or just want to connect, 
                    feel free to reach out.
                </p>
            </div>
            <div id="contact-points" className="basis-2/5 lg:px-12">
                <a href="mailto:fcuevas09@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center pl-12 gap-2 rounded-lg shadow-lg my-2 bg-neutral-50 hover:scale-105 transition-transform lg:py-4 py-6">
                    <p className="inline text-4xl lg:mx-2 mx-1">📩</p>
                    <p className="text-md text-neutral-800">Send me an email</p>
                </a>
                <a 
                    href="https://www.linkedin.com/in/francisco-cuevas-designer/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center pl-12 gap-2 rounded-lg shadow-lg my-2 bg-neutral-50 hover:scale-105 transition-transform lg:py-4 py-6">
                        <LinkedIn className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 text-neutral-800 hover:text-blue-700" 
                        title="LinkedIn"/>
                    <p className="text-md text-neutral-800">Connect with me on LinkedIn</p>
                </a>
                <a 
                    href="https://github.com/fcuevas6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center pl-12 gap-2 rounded-lg shadow-lg my-2 bg-neutral-50 hover:scale-105 transition-transform lg:py-4 py-6">
                        <GitHubDark className="inline lg:w-9 lg:h-9 w-7 h-7 lg:mx-2 mx-1 text-neutral-800 hover:text-blue-700" 
                        title="LinkedIn"/>
                    <p className="text-md text-neutral-800">Check out my GitHub profile</p>
                </a>
            </div>
        </div>
    </section>
  );
}