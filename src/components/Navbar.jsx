import React from "react";
import { links } from "../assets/data";

const Navbar = () => {
  return (
    <nav className="bg-slate-950">
      <div className=" w-90 align-element py-4 px-8 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:justify-between  sm:px-16 md:px-32">
        <h2 className="text-slate-50 text-3xl font-bold mb-2 font-roboto md:text-4xl">
          Web
          <span className="text-slate-700 font-roboto">&lt;Developer/&gt;</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { href, id, text } = link;
            return (
              <a
                href={href}
                key={id}
                className="font-nunito text-slate-50 capitalize tracking-wide text-sm sm:text-base hover:text-slate-700 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
