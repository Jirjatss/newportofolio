import React from "react";
import { HashLink } from "react-router-hash-link";
import * as icon from "react-bootstrap-icons";

function Masthead() {
  return (
    <>
      <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("https://source.unsplash.com/1000x600?programming")` }} id="home">
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md font-signika">
            <p className="mb-5 text-4xl text-white">I'm Muhammad Hijir Sajad</p>
            <p className="mb-5 text-2xl text-white">Front End Developer</p>
            <div className="flex justify-between w-24 mx-auto">
              <a className="mx-auto" href="https://www.instagram.com/Jirjatss/" target="_blank" rel="noreferrer">
                <icon.Instagram color="whitesmoke" size={25} />
              </a>
              <a className="mx-auto" href="https://linkedin.com/in/hijirsajad280498" target="_blank" rel="noreferrer">
                <icon.Linkedin color="whitesmoke" size={25} />
              </a>
              <a className="mx-auto" href="https://github.com/Jirjatss" target="_blank" rel="noreferrer">
                <icon.Github color="whitesmoke" size={25} />
              </a>
            </div>

            <HashLink
              to="/#project"
              className="inline-flex items-center py-3 px-6 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200 mt-6"
              smooth
            >
              Project
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Masthead;
