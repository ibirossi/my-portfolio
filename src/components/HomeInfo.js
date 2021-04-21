import React from "react";
import { NavLink } from "react-router-dom";
import blogpic from "../blogpic.png";
import thumbsup from "../thumbsup.png";
import stacks from "../stacks.png";
import Reveal from "react-reveal/Reveal";

const HomeInfo = () => {
  return (
    <div className="relative">
      <div className="p-1 md:p-10 lg:pt-5 mx-auto container relative min-h-screen">
        <Reveal effect="animate-scale-in-up">
          <section className="rounded-lg shadow-sm lg:flex p-2 lg:p-10">
            <img
              src={thumbsup}
              alt="logo"
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mx-auto"
            />
            <div className="text-lg flex flex-col mx-auto">
              <h1 className="cursive text-lg md:text-5xl mb-4 p-4 mx-auto">
                Hey there! I'm <span className="text-gray-600">Ross</span>
              </h1>
              <div className="prose text-justify text-xs lg:prose-xl p-4 flex flex-col justify-center items-center">
                <p>
                  I went from teaching to being a student, and recently finished
                  the{" "}
                  <a
                    href="https://ironhack.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    Ironhack
                  </a>{" "}
                  bootcamp. I have built a solid base of skills and knowledge
                  throughout my working life and quickly learn and adapt to
                  novel environments. Find out more about me!
                </p>

                <NavLink
                  className="px-3 py-2 mx-auto no-underline uppercase font-bold leading-snug rounded-full bg-yellow-400"
                  to="/about"
                >
                  <button className="focus:outline-none">About</button>
                </NavLink>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      <div className="p-1 md:p-10 lg:pt-5 mx-auto container relative min-h-screen">
        <Reveal effect="animate-scale-in-up">
          <section className="rounded-lg shadow-sm lg:flex p-2 lg:p-10">
            <div className="text-lg flex flex-col mx-auto">
              <h1 className="cursive text-lg lg:text-5xl mb-4 p-4 mx-auto">
                <span className="text-black">Projects</span>
              </h1>
              <div className="prose text-justify text-xs lg:prose-xl p-4 flex flex-col justify-center items-center">
                <p>
                  They say the one of the best ways to
                  learn is by doing, and I'm always eager to learn new things.
                  Take a look at my projects.{" "}
                </p>
                <NavLink
                  className="px-3 py-2 mx-auto no-underline uppercase font-bold leading-snug rounded-full bg-yellow-400"
                  to="/projects"
                >
                  <button className="focus:outline-none">Projects</button>
                </NavLink>
              </div>
            </div>
            <img
              src={stacks}
              alt="logo"
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mx-auto"
            />
          </section>
        </Reveal>
      </div>
      <div className="p-1 md:p-10 lg:pt-5 mx-auto container relative min-h-screen">
        <Reveal effect="animate-scale-in-up">
          <section className="rounded-lg shadow-sm lg:flex p-2 lg:p-10">
            <img
              src={blogpic}
              alt="logo"
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mx-auto"
            />
            <div className="text-lg flex flex-col mx-auto">
              <h1 className="cursive text-lg lg:text-5xl mb-4 p-4 mx-auto">
                Blog
              </h1>
              <div className="prose text-justify text-xs lg:prose-xl p-4 flex flex-col justify-center items-center">
                <p>
                   I'll be posting updates on my journey to becoming a web developer, and maybe some pizza making posts!
                </p>

                <NavLink
                  className="px-3 py-2 mx-auto no-underline uppercase font-bold leading-snug rounded-full bg-yellow-400"
                  to="/post"
                >
                  <button className="focus:outline-none">Blog</button>
                </NavLink>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  </div>
  );
};

export default HomeInfo;
