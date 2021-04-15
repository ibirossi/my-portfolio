import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const TestNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="bg-white opacity-100 sticky top-0 z-40 mb-0 pt-6 pb-6">
      <nav className="bg-white opacity-100 relative flex flex-wrap items-center justify-between px-2 py-3 mb-0 sticky top-0 z-40">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              onClick={() => setNavbarOpen(false)}
              to="/"
              exact
              // activeClassName="bg-gray-300"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black tracking-widest animate-pulse"
            >
              Home
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {(navbarOpen ? <XIcon className="h-8 w-8 p-1 text-black fade-in"/>: <MenuIcon className="h-8 w-8 text-black p-1 fade-in" />)} 
            </button>
          </div>
          <div
          
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex fade-in md:animation-none" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-xs md:text-base">
              <li>
                <NavLink
                  className="nina px-5 py-0 relative block text-center tracking-widest overflow-hidden flex items-center uppercase font-bold leading-snug bg-white hover:opacity-75 ml-2"
                  data-text="Blog"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/post"
                >
                  <span className="ml-1">B</span>
                  <span className="ml-1">l</span>
                  <span className="ml-1">o</span>
                  <span className="ml-1">g</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nina px-5 py-0 relative block text-center tracking-widest overflow-hidden flex items-center uppercase font-bold leading-snug bg-white hover:opacity-75 ml-2"
                  data-text="Projects"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/projects"
                >
                  <span className="ml-1">P</span>
                  <span className="ml-1">r</span>
                  <span className="ml-1">o</span>
                  <span className="ml-1">j</span>
                  <span className="ml-1">e</span>
                  <span className="ml-1">c</span>
                  <span className="ml-1">t</span>
                  <span className="ml-1">s</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nina px-5 py-0 relative block text-center tracking-widest overflow-hidden flex items-center uppercase font-bold leading-snug bg-white hover:opacity-75 ml-2"
                  data-text="About"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/about"
                >
                  <span className="ml-1">A</span>
                  <span className="ml-1">b</span>
                  <span className="ml-1">o</span>
                  <span className="ml-1">u</span>
                  <span className="ml-1">t</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TestNav;

