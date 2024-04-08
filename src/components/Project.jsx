import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/data";

const Project = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text={"my projects"} />
      <div className="grid py-16 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
