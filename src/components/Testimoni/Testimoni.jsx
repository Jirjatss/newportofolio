import React from "react";
import gina from "../../assets/gina.PNG";
import "./Testimoni.css";

import CardTestimoni from "../Card/CardTestimoni";

const dataTesti = [
  {
    gambar: "https://weddingdreaming.netlify.app/assets/img/team/2.jpg",
    testimoni: "i've worked on several projects with Sajad, and i've seen how quickly he learns and grows. And I was impressed that he actively asked if he did'nt",
    nama: "Yudi - Front End Developer",
    anim: "fade-out-image",
  },
  {
    gambar: "https://babycarelove.netlify.app/static/media/Riska.172c838187ab5b77460f.webp",
    testimoni: "Mr Sajad is very professional in working on the project that I gave, the work with the timeline is very neat and provides very fast development",
    nama: "Riska - Lecture Of Mataram University",
    anim: "fade-in-image",
  },
  {
    gambar: gina,
    testimoni: "Mr. Sajad is one the best people you can work in any project . I've worked with Mr.Sajad as a fellow Front End Developer in Skilvul. He is a reliable person so get him on your team.",
    nama: "Gina - Front End Developer",
    anim: "fade-out-image",
  },
  {
    gambar: "https://i.pinimg.com/736x/44/76/78/447678132093d08c2313fca8e9b94b34.jpg",
    testimoni: "Honestly, people like he is sought after by big companies. In addition to the skills he has, which are quite sufficient in the field of coding, he also have a desire to continue learning",
    nama: "Widya - Terbuka University Employee",
    anim: "fade-in-image",
  },
];

function Testimoni() {
  return (
    <>
      <div className="text-white font-signika p-10 py-20 mx-auto" id="Testimoni">
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto">
          <div className="mb-10 text-4xl text-center">
            <span className="border-b-4 border-[#01d193] text-white">Impression</span>
            <img src="https://portofolio-mukhid.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FConnected%20world.1e9110a2.png&w=640&q=75" alt="" className="w-80 mx-auto mt-20" />
          </div>
          <div className="text-center lg:mt-24">
            <h1>What people say about me</h1>
            <div className="grid grid-cols-1 sajad relative -mb-32 mt-8 lg:-mt-8 md:-mt-8">
              <div className="">
                <CardTestimoni slides={dataTesti} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
