import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../assets/data";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <section className="align-element py-20 bg-slate-50" id="skills">
      <SectionTitle text={"tech-stack"} />
      <div className="p-16 grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skill;
