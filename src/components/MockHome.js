import React from "react";
import logo from "../logo.svg";

const MockHome = () => {
  return (
    <main className="relative">
      <div className="container mx-auto flex justify-center align-center items-center bg-hero-pattern min-h-screen relative bg-center bg-no-repeat">
        <h1 className="absolute">Hi There!</h1>
      </div>
      <div className="p-10 lg:pt-48 mx-auto container relative min-h-screen">
        <section className="rounded-lg shadow-2xl lg:flex lg:justify-space-between p-200 lg:p-20 min-h-full">
          <img
            src={logo}
            alt="logo"
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mx-auto"
          />
          <div className="text-lg flex flex-col">
            <h1 className="cursive text-6xl mb-4 p-4">
              Hey there! I'm <span className="text-gray-600">Ross</span>
            </h1>
            <div className="prose lg:prose-xl p-4">
              <p>
                My name is Ross. Im new to webdev, trying to learn as I go.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="p-10 lg:pt-48 mx-auto container relative min-h-screen">
        <section className="rounded-lg shadow-2xl lg:flex lg:justify-space-between p-200 lg:p-20 min-h-full">
          <div className="text-lg flex flex-col">
            <h1 className="cursive text-6xl mb-4 p-4">
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
      </div>
    </main>
  );
};

export default MockHome;
