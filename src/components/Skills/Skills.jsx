import React from "react";
import "./Skills.css";
import html from "../../assets/html.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import css from "../../assets/css.png";

function Skills() {
  return (
    <>
      <div className="text-white font-signika p-10 py-20 mx-auto" id="skills">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 w-full sm:grid-cols-1 sm:mx-auto">
          <div className="w-full text-center">
            <div className="row1-container">
              <div className="box box-down cyan">
                <h2 className="mb-3 -mt-3">HTML</h2>
                <img src={html} alt="" className="imgskills mx-auto" />
              </div>

              <div className="box red">
                <h2 className="mb-3 -mt-3">React JS</h2>
                <img src={react} alt="" className="imgskills mx-auto" />
              </div>

              <div className="box box-down blue">
                <h2 className="mb-3 -mt-3">JavaScript</h2>
                <img src={js} alt="" className="imgskills mx-auto" />
              </div>
            </div>
            <div className="row2-container">
              <div className="box orange">
                <h2 className="mb-3 -mt-3">CSS</h2>
                <img src={css} alt="" className="imgskills mx-auto" />
              </div>
            </div>
          </div>
          <div className="w-full px-10 mx-auto">
            <div className="mb-10 text-4xl text-center">
              <span className="border-b-4 border-[#01d193] text-white">Skills</span>
            </div>
            <p className="mb-4 text-md lg:text-start sm:active lg:ml-2">Eager to learn with a desire to apply skills on the interactive team</p>
            <div className="bar html" data-skill="HTML"></div>
            <div className="bar back css" data-skill="CSS"></div>
            <div className="bar back1 javascript" data-skill="Javascript"></div>
            <div className="bar front1 react" data-skill="React JS"></div>
            <div className="bar tw tailwind" data-skill="Tailwind"></div>
            <div className="bar bot bootstrap" data-skill="Bootstrap"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
