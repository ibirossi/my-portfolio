import React from "react";
import cry from "../images/crying.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="container mx-auto flex justify-center align-center md:pt-36 min-h-screen">
      <div>
        <div>
          <div className="flex justify-center align-center items-center">
            <img
              src={cry}
              alt="crying"
              className="animate-fade-in-slow h-20 w-20"
            />
          </div>
          <div>
            <span className="animate-fade-in-up font-bold text-lg md:text-6xl flex justify-center cursive">
              404
            </span>
            <span className="animate-fade-in-down text-base md:text-3xl text-gray-600 flex justify-center mb-12">
              Page does not exist!
            </span>
          </div>
        </div>

        <div className="text-xs md:text-lg text-gray-600 flex justify-center mb-12 animate-pulse">
          <span>
            <NavLink to="/" exact className="animate-fade-in-left animate-pulse font-bold">
              Take me home...
            </NavLink>
          </span>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
