import React from "react";
import MockHome from "./MockHome"
import logo from "../logo.svg";

const Home = () => {
  return (
    <main className="p-12 w-screen relative">
      <section className="container mx-auto flex justify-center align-center items-center min-h-screen">
        <div className="">
          <div className="">
            <div className="flex justify-center align-center items-center">
              <img src={logo} alt="logo" className="h-20 w-20" />
            </div>
            <div>
              <span className="font-bold text-5xl flex justify-center cursive">
                Ross Homaidan
              </span>
              <span className="text-lg text-gray-600 flex justify-center mb-12">
                is the best in the world
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-600 flex justify-center mb-12">
            <span>First line</span>
            <span className="">Second line</span>
          </div>
        </div>
      </section>
      <MockHome />
    </main>
  );
};

export default Home;
