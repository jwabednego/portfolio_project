import React from "react";
import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-slate-100 py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="about me" className="w-full h-64" />
        <article>
          <SectionTitle text={"about me"} />
          <p className="font-nunito mt-6 leading-loose text-slate-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam
            tempora dolores cupiditate culpa dolorem alias libero soluta
            recusandae, ullam non doloremque architecto, laudantium facilis nemo
            possimus ratione, iste dicta!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
