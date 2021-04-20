import React from "react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import mailme from "../mailme.png"
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade"

const Footer = () => {
  return (
    <Fade bottom delay={700}>
    <footer className="min-h-screen relative p-10 bg-yellow-400">
      <div className="flex flex-col items-center p-0">
        <h1 className="font-black text-lg">Follow me</h1>

        <div className="flex mb-5">
          <Reveal fade left>
            <RiLinkedinBoxFill className="w-10 h-10" />
          </Reveal>

          <Reveal face right>
            <RiGithubFill className="w-10 h-10" />
          </Reveal>
        </div>
        <div className="flex flex-col items-center p-0">
        <h1 className="font-black text-lg">Contact Me</h1>
        <Reveal zoom><img src={mailme} alt="mail me" className="w-20 h-20"/></Reveal>
        </div>
      </div>
    </footer>
    </Fade>
  );
};

export default Footer;
