import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

//activeClassname-> when on page that links to, do something deifferent.
const NavBar = () => {
  const [effect, setEffect] =useState(false);
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className= {`${
            effect && "animate-wiggle"
          } flex`}
          onClick={() => {setEffect(true)
          }}
          onAnimationEnd={() => setEffect(false)}
          >
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 my-6 text-red-100 hover:text-green-800 onClick:animate-spin font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-300 hover:text-green-800"
          >
            Blog
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
