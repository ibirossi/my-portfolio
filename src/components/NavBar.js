import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

//activeClassname-> when on page that links to, do something deifferent.
const NavBar = () => {
  // const [effect, setEffect] = useState(false);
  return (
    <header className="bg-black w-screen" >
      <div className="container mx-auto md:flex justify-between">
        <nav className="w-screen">
        
        {/* <nav className= {`${
            effect && "animate-wiggle"
          }`}
          onClick={() => {setEffect(true)
          }}
          onAnimationEnd={() => setEffect(false)}
          > */}
          <NavLink
            to="/"
            exact
            activeClassName="text-rikgreen bg-rikbg border shadow"
            className="flex md:inline-flex items-center py-3 px-3 mr-4 my-auto text-rikpink hover:text-white font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-rikyellow bg-rikgreen shadow"
            className="md:inline-flex items-center justify-center rounded py-3 px-3 my-6 md:rounded-full h-14 w14 text-rikpink hover:text-white"
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-rikyellow bg-rikgreen"
            className="md:inline-flex items-center justify-center rounded py-3 px-3 my-6 md:rounded-full h-14 w-14 text-rikpink hover:text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-rikyellow bg-rikgreen"
            className="md:inline-flex items-center justify-center rounded py-3 px-3 my-6 md:rounded-full h-14 w-14 text-rikpink hover:text-white"
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
