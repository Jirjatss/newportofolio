import React from "react";
import yudi from "../../assets/yudi.jpeg";
import sajad from "../../assets/sajad.JPG";

import CardTestimoni from "../Card/CardTestimoni";

function Testimoni() {
  return (
    <>
      <div className="text-white font-signika p-10 py-20 mx-auto" id="Testimoni">
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto">
          <div className="mb-10 text-4xl text-center">
            <span className="border-b-4 border-[#01d193] text-white">Testimoni</span>
            <img src="https://portofolio-mukhid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FConnected%20world.1e9110a2.png&w=640&q=75" alt="" className="w-80 mx-auto mt-20" />
          </div>
          <div className="text-center lg:mt-24">
            <h1>What people say about me</h1>
            <div className="grid grid-cols-1 sajad relative mb-80 mt-8 lg:-mt-8 md:-mt-8">
              <div className="test">
                <CardTestimoni
                  gambar={yudi}
                  testimoni={"i've worked on several projects with Mukhid, and i've seen how quickly he learns and grows. And I was impressed that he actively asked if he did'nt"}
                  nama={"Yudi - Front End Developer"}
                />
              </div>
              <div className="test">
                <CardTestimoni
                  gambar={"https://babycarelove.netlify.app/static/media/Riska.172c838187ab5b77460f.webp"}
                  testimoni={"Mr Sajad is very professional in working on the project that I gave, the work with the timeline is very neat and provides very fast development. I would like to work with him again in the future."}
                  nama={"Riska - Lecture Of Mataram University"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
