import React from "react";
import Sajad from "../../assets/sajad.JPG";

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
    <div className="text-4xl text-white font-signika p-10 py-20 text-center mx-auto" id="about">
      <div className="mb-8">
        <span className="border-b-4 border-[#01d193] text-white">About Me</span>
      </div>

      <div className="w-full max-w-sm bg-[#171f38] rounded-lg shadow-md mx-auto mt-4 p-4 px-10">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={Sajad} alt="Sajad" />
          <h5 className="mb-1 text-xl font-medium">M Hijir Sajad</h5>
          <span className="text-sm text-gray-400">Front End Developer</span>
          <p className="text-xs text-gray-400 text-center mt-2">
            I'm a front-end developer, committed to developing myself, I'm a healthy, independent, hardworking, honest, and disciplined individuals. I was focusing on Fronts end and has basic computer programming like HTML, CSS, javascript
            and React.Js.
          </p>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              onClick={cv}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              Download CV
            </button>
            <button
              onClick={Sertifikat}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200"
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
