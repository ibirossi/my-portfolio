import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              onClick={() => setNavbarOpen(false)}
              to="/"
              exact
              activeClassName="bg-gray-300"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black tracking-widest"
            >
              Home
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon className="h-6 w-6 text-black mr-5" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto bg-gray-300">
              <li>
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/post"
                >
                  <span className="ml-2">Blog</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/projects"
                >
                  <span className="ml-2">Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-back hover:opacity-75 hover:underline"
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
    </>
  );
};

export default NavBar;
