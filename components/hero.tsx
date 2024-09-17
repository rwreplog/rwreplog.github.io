import React from "react";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import MagicButton from "./ui/magicButton";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="h-10 w-3/6 flex items-center justify-center relative ml-auto mr-auto -mb-10 mt-10">
        <img src="/rwr_logo.svg" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Turning Dreams Into Vivid Experiences"
          ></TextGenerateEffect>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I am Ryan W Replogle. A full stack developer living in the
            United States.
          </p>

          <div>
            <a
              href="https://github.com/rwreplog"
              target="_blank"
              className="inline-block"
            >
              <MagicButton title="GitHub" icon={<FaGithub />} position="left" />
            </a>
            <a
              href="https://codepen.io/ryan-the-dev"
              target="_blank"
              className="inline-block ml-10"
            >
              <MagicButton
                title="CodePen"
                icon={<FaCodepen />}
                position="left"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-w-replogle-5693542a/"
              target="_blank"
              className="inline-block ml-10"
            >
              <MagicButton
                title="LinkedIn"
                icon={<FaLinkedin />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
