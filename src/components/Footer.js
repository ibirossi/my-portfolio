import React from "react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import mailme from "../images/mailme.png"
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade"

const Footer = () => {
  return (
    <Fade delay={100}>
    <footer className="min-h-screen relative p-10 bg-yellow-400">
      <div className="flex flex-col items-center p-20">
        <h1 className="font-black text-lg">Follow me</h1>

        <div className="flex mb-5">
          <Fade left>
           <a href="https://linkedin.com/in/i-ross-homaidan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"><RiLinkedinBoxFill className="w-10 h-10" /></a> 
          </Fade>

          <Fade right>
          <a href="https://github.com/ibirossi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"><RiGithubFill className="w-10 h-10" /></a>
            
          </Fade>
        </div>
        <div className="flex flex-col items-center p-0">
        <h1 className="font-black text-lg">Contact Me</h1>
        <div className="animate-bounce">
        <Reveal zoom><img src={mailme} alt="mail me" className="w-20 h-20"/></Reveal>
        </div>
        <Reveal effect="animate-scale-in-up"><h1 className="font-black text-lg">ibi.homaidan@gmail.com</h1></Reveal>
        
        </div>
      </div>

    </footer>
    </Fade>
  );
};

export default Footer;
