import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ icons, url, img, github, title, text }) => {
  return (
    <article className="bg-slate-50 rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-52"
      />
      <div className="capitalize p-4">
        <h2 className="text-l font-bold tracking-wide font-nunito">{title}</h2>
        <p className="font-nunito text-xs mt-1">{text}</p>
        <div className="flex mt-4 gap-x-4">
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-slate-950 duration-300" />
          </a>
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-700 hover:text-slate-950 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
