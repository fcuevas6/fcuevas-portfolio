import React, { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="lg:px-16 px-4 py-4 flex justify-between items-center bg-neutral-100 shadow-md relative">
      <h1 className="font-bold lg:text-lg">Francisco Cuevas Portfolio</h1>
      {/* Hamburger button for small screens */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
      </button>
      {/* Navigation links */}
      <div
        className={`flex-col md:flex md:flex-row gap-4 md:gap-24 p-4 rounded-b-2xl absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} md:flex`}
      >
        <a href="#home" className="block py-2 md:py-0" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#projects" className="block py-2 md:py-0" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" className="block py-2 md:py-0" onClick={() => setMenuOpen(false)}>About Me</a>
        <a href="#contact" className="block py-2 md:py-0" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}