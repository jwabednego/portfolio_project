import React from "react";
import heroImg from "../assets/heroImg.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="align-element w-90 bg-slate-100 py-20 grid items-center gap-8 md:grid-cols-2 ">
      <article>
        <h1 className="text-7xl font-bold tracking-wider font-roboto text-slate-950">
          I'm <br /> Bibeyonto
        </h1>
        <p className="mt-4 font-nunito capitalize text-xl text-slate-950 tracking-wide">
          front-end developer
        </p>
        <p className="mt-2 tracking-wide font-nunito capitalize text-slate-700">
          I turn ideas into interactive and visually apealling reality.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#">
            <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-slate-950 duration-300" />
          </a>
          <a href="#">
            <FaLinkedin className="h-8 w-8 text-slate-700 hover:text-slate-950 duration-300" />
          </a>
          <a href="#">
            <FaTwitterSquare className="h-8 w-8 text-slate-700 hover:text-slate-950 duration-300" />
          </a>
        </div>
      </article>

      <article className="hidden md:block">
        <img src={heroImg} alt="" className="h-80 lg:h-96" />
      </article>
    </div>
  );
};

export default Hero;
