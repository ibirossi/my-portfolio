import React from "react";
import MockHome from "./MockHome";
import memoji from "../memoji.png";
import pointdown from "../pointdown.png"

const Home = () => {
  return (
    <main className="p-12 relative">
      <section className="container mx-auto flex justify-center align-center lg:pt-36 min-h-screen">
        <div className="">
          <div className="">
            <div className="flex justify-center align-center items-center">
              <img
                src={memoji}
                alt="logo"
                className="animate-fade-in-slow h-20 w-20"
              />
            </div>
            <div>
              <span className="animate-fade-in-up font-bold text-lg md:text-5xl flex justify-center cursive">
                Ross Homaidan
              </span>
              <span className="animate-fade-in-down text-lg text-gray-600 flex justify-center mb-12">
                Web developer
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-600 flex flex-col justify-center mb-12">
            <span className="animate-fade-in-left font-bold">
              "Work is love made visible..."
            </span>
            <span className="italic">Khalil Gibran</span>
          </div>
          <img src={pointdown} alt="pointer" className="animate-bounce w-10 h-10 mx-auto"/>
        </div>
      </section>
      <MockHome />
      <div></div>
    </main>
  );
};

export default Home;
