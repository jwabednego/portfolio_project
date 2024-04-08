import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-slate-950 pb-2">
      <h2 className="capitalize text-xl font-bold font-nunito">{text}</h2>
    </div>
  );
};

export default SectionTitle;
