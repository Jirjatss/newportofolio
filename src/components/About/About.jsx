import React from "react";
import Sajad from "../../assets/sajad.JPG";
import sajad from "../../assets/about.png";

function About() {
  const cv = () => {
    // using Java Script method to get PDF file
    fetch("sajad.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV - M Hijir Sajad.pdf";
        alink.click();
      });
    });
  };
  const Sertifikat = () => {
    // using Java Script method to get PDF file
    fetch("Sertifikat.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Certificate - M Hijir Sajad.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="text-4xl text-white font-signika p-10 pt-20 text-center mx-auto" id="about">
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto">
        <div className="relative">
          <div className="mb-8">
            <span className="border-b-4 border-[#01d193] text-white">About Me</span>
          </div>
          <img src={sajad} alt="" className="w-80 mx-auto" />
        </div>
        <div className="grid grid-rows-2 w-full h-96 mx-auto lg:mt-28 md:mt-28 px-10 items-center">
          <div>
            <p className="text-xl text-white mb-5">I'm Front End Developer</p>
            <p className="mb-4 text-sm text-gray-400 lg:text-center text-start">
              I'm a front-end developer, committed to developing myself, I'm a healthy, independent, hardworking, honest, and disciplined individuals. I was focusing on Fronts end and has basic computer programming like HTML, CSS,
              javascript and React.Js.
            </p>
          </div>
          <div className="lg:-mt-48 md:-mt-48">
            <button
              onClick={cv}
              className="inline-flex me-2 items-center py-2 px-4 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              Download CV
            </button>
            <button
              onClick={Sertifikat}
              className="inline-flex ml-2 items-center py-2 px-4 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              Download Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
