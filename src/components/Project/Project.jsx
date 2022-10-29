import React from "react";
import Card from "../Card/Card";
import babycare from "../../assets/babycare.jpeg";
import green from "../../assets/greenstore.PNG";
import port from "../../assets/port.PNG";
import movie from "../../assets/movie.PNG";

function Project() {
  return (
    <div className="text-4xl text-black bg-slate-100 font-signika p-10 py-20  mx-auto" id="project">
      <div className="mb-10 text-center">
        <span className="border-b-4 border-[#6419e6]">Project</span>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 mx-auto mt-10">
        <Card gambar={babycare} w={"w-full"} nama={"Baby Care"} alamat={"Baby health website that helps mothers to take care of the baby"} url={"https://babycarelove.netlify.app/"} ket={"Visit"} />
        <Card gambar={green} w={"w-full"} nama={"Green Store"} alamat={"Website to buy various kinds of fruits and vegetables"} url={"https://greenstoreindonesia.netlify.app/"} ket={"Visit"} />
        <Card gambar={port} w={"w-full"} nama={"Web Portofolio"} alamat={"An online portfolio (may also be called a digital portfolio or e-portfolio)"} url={"https://hijirsajad.netlify.app/"} ket={"Visit"} />
        <Card gambar={movie} w={"w-full"} nama={"Jirjatss Movie"} alamat={"website to see all kinds of movies in the world, the latest and the old ones"} url={"hhttps://keen-travesseiro-fdac30.netlify.app/"} ket={"Visit"} />
      </div>
    </div>
  );
}

export default Project;
