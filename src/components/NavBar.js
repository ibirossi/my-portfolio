import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="bg-red-600">
        <nav>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about"> About </NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
