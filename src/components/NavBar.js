import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";


const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="bg-yellow-400 opacity-100 sticky top-0 z-40 mb-6 pt-6 pb-6 md:pt-1 md:pb-1">
      <nav className="bg-yellow-400 opacity-100 relative flex flex-wrap items-center justify-between px-2 py-3 mb-0 sticky top-0 z-40">
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
              (navbarOpen ? " flex animate-slide-in-element-left md:animate-none" : " hidden") 
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-xs md:text-base md:border md:rounded-full md:shadow-sm">
              <li>
                <NavLink
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug bg-white rounded-full hover:opacity-75 transition duration-400 ease-in-out  transform hover:scale-110 hover:shadow-2xl"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/post"
                >
                  <span className="ml-2">Blog</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug rounded-full hover:opacity-75 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/projects"
                >
                  <span className="ml-2">Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug rounded-full hover:opacity-75 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/about"
                >
                  <span className="ml-2">About</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
