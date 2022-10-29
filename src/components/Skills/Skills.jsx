import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="text-4xl text-black bg-slate-50 font-signika p-10 py-20  mx-auto" id="skills">
      <div className="mb-10 text-center">
        <span className="border-b-4 border-[#6419e6]">Skills</span>
      </div>
      <div className="skills">
        <div className="bar html" data-skill="HTML"></div>
        <div className="bar back css" data-skill="CSS"></div>
        <div className="bar back1 javascript" data-skill="Javascript"></div>
        <div className="bar front1 react" data-skill="React JS"></div>
        <div className="bar front vue" data-skill="Vue JS"></div>
      </div>
    </div>
  );
}

export default Skills;
