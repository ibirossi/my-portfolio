import React from "react";
import { NavLink } from "react-router-dom";

//activeClassname-> when on page that links to, do something deifferent.
const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 my-6 text-red-100 hover:text-green-800 font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-green-800"
          >
            About Me
          </NavLink>
          <div>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
