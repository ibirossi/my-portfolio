import React from "react";
import logo from "../logo.svg";
import memoji from "../memoji.png";
import Fade from 'react-reveal/Fade';



const MockHome = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="container mx-auto flex justify-center align-center items-center bg-hero-pattern min-h-screen relative bg-center bg-no-repeat">
        <h1 className="absolute bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style={{backdropFilter: "blur(3px)"}}>Hi There!</h1>
      </div>
      <div className="p-1 md:p-10 lg:pt-48 mx-auto container relative min-h-screen">
      <Fade left>
        <section className="rounded-lg shadow-2xl lg:flex lg:justify-space-between p-200 lg:p-20 min-h-full animate-slide-in-element-left">
          <img
            src={memoji}
            alt="logo"
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mx-auto"
          />
          <div className="container mx-auto text-lg flex flex-col">
            <h1 className="cursive text-lg lg:text-6xl mb-4 p-4">
              Hey there! I'm <span className="text-gray-600">Ross</span>
            </h1>
            <div className="prose lg:prose-xl p-4">
              <p>
                My name is Ross. Im new to webdev, trying to learn as I go.{" "}
              </p>
            </div>
          </div>
        </section>
        </Fade>
      </div>

      <div className="p-1 md:p-10 lg:pt-48 mx-auto container relative min-h-screen">
      <Fade right>
        <section className="rounded-lg shadow-2xl lg:flex lg:justify-space-between p-200 lg:p-20 min-h-full animate-slide-in-element-right">
          <div className="text-lg flex flex-col">
            <h1 className="cursive text-lg lg:text-6xl mb-4 p-4">
              Hey there! I'm <span className="text-black">Ross</span>
            </h1>
            <div className="prose lg:prose-xl p-4">
              <p>
                My name is Ross. Im new to webdev, trying to learn as I go.{" "}
              </p>
            </div>
          </div>
          <img
            src={logo}
            alt="logo"
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mx-auto"
          />
        </section>
        </Fade>
      </div>
    </main>
  );
};

export default MockHome;
