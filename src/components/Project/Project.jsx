import React from "react";
import babycare from "../../assets/babycare.jpeg";
import green from "../../assets/greenstore.PNG";
import port from "../../assets/port.PNG";
import movie from "../../assets/movie.PNG";
import CardProject from "../Card/CardProject";

function Project() {
  return (
    <div className="text-4xl text-black font-signika p-10 py-20  mx-auto" id="project">
      <div className="mb-10 text-4xl text-center">
        <span className="border-b-4 border-[#01d193] text-white">Project</span>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 mx-auto mt-10">
        <CardProject gambar={babycare} nama={"Baby Care"} ket={"Baby health website that helps mothers to take care of the baby"} url={"https://babycarelove.netlify.app/"} tag={"Web"} tag2={"Application"} tag3={"Healthy"} />
        <CardProject gambar={green} w={"w-full"} nama={"Green Store"} ket={"Website to buy various kinds of fruits and vegetables"} url={"https://greenstoreindonesia.netlify.app/"} tag={"Web"} tag2={"Application"} tag3={"Shopping"} />
        <CardProject gambar={port} nama={"Web Portofolio"} ket={"An online portfolio (may also be called a digital portfolio or e-portfolio)"} url={"https://hijirsajad.netlify.app"} tag={"Web"} tag2={"Application"} tag3={"Portfolio"} />
        <CardProject
          gambar={movie}
          nama={"Jirjatss Movie"}
          ket={"website to see all kinds of movies in the world, the latest and the old ones"}
          url={"hhttps://keen-travesseiro-fdac30.netlify.app/"}
          tag={"Web"}
          tag2={"Application"}
          tag3={"Movie"}
        />
      </div>
    </div>
  );
}

export default Project;
