import React from "react";
import HomeInfo from "./HomeInfo";
import Footer from "./Footer";
import memoji from "../memoji.png";
import pointdown from "../pointdown.png"


const Home = () => {
  return (
    <main className="pt-10 relative">
      <section className="container mx-auto flex justify-center align-center md:pt-36 min-h-screen">
        <div>
          <div>
            <div className="flex justify-center align-center items-center">
              <img
                src={memoji}
                alt="logo"
                className="animate-fade-in-slow h-20 w-20"
              />
            </div>
            <div>
              <span className="animate-fade-in-up font-bold text-lg md:text-6xl flex justify-center cursive">
                Ross Homaidan
              </span>
              <span className="animate-fade-in-down text-base md:text-3xl text-gray-600 flex justify-center mb-12">
                Web developer
              </span>
            </div>
          </div>

          <div className="text-xs md:text-lg text-gray-600 flex flex-col justify-center mb-12">
            <span className="animate-fade-in-left font-bold">
              "Work is love made visible..."
            </span>
            <span className="italic">Khalil Gibran</span>
          </div>
          <img src={pointdown} alt="pointer" className="animate-bounce w-10 h-10 mx-auto"/>
        </div>
      </section>
      <HomeInfo />
      <Footer />
    </main>
  );
};

export default Home;
