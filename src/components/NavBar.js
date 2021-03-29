import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

//activeClassname-> when on page that links to, do something deifferent.
const NavBar = () => {
  
  return (
    <header className="w-screen" >
      <div className="container mx-auto md:flex justify-between">
        <nav className="w-screen">
          <NavLink
            to="/"
            exact
            activeClassName="bg-gray-200"
            className="flex md:inline-flex items-center py-3 px-3 my-auto hover:text-gray-400 font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="bg-gray-200 px-5 mx-5"
            className="md:inline-flex items-center justify-center py-3 px-3 my-6 h-14 w14 hover:text-gray-400"
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="bg-gray-200 px-5 mx-5"
            className="md:inline-flex items-center justify-center py-3 px-3 my-6 h-14 w-14 hover:text-gray-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="bg-gray-200 px-5 mx-5"
            className="md:inline-flex items-center justify-center py-3 px-3 my-6 h-14 w-14 hover:text-gray-400"
          >
            About
          </NavLink>
          
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://github.com/ibirossi" className="mr-4" target="_blank" fgColor="#fff" bgColor="black" style={{height: 35, width: 35}}/>
            <SocialIcon url="https://www.linkedin.com/in/i-ross-homaidan" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>

          </div>
      </div>
    </header>
  );
};

export default NavBar;
