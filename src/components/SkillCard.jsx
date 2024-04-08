import React from "react";

const SkillCard = ({ icon, title, text }) => {
  return (
    <article className="md:ml-20">
      <span>{icon}</span>
      <h4 className="mt-6 font-bold font-nunito">{title}</h4>
    </article>
  );
};

export default SkillCard;
