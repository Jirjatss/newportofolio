import React from "react";
import skilvul from "../../assets/skilvul.png";
import amman from "../../assets/amman.png";
import nw from "../../assets/newmont.png";
import CardAchievement from "../Card/CardAchievement";

function Achievement() {
  return (
    <div className="text-4xl text-white font-signika p-10 pt-20 text-center mx-auto" id="achievement">
      <div className="mb-8">
        <span className="border-b-4 border-[#01d193]">Achievement</span>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto mt-10">
        <CardAchievement gambar={skilvul} nama={"Best Participant Of Skillvul AMMAN Coding Bootcamp"} ket={"Become the best participant in the Amman cooding Bootcamp Batch 3 with Skilvul"} tahun={"September 2022"} />
        <CardAchievement gambar={amman} nama={"Skilvul AMMAN Coding Bootcamp Scholarship"} ket={"Received scholarship for training to be a general-end developer downstairs PT AMMAN minerals with Skilvul"} tahun={"April-September 2022"} />
        <CardAchievement gambar={nw} nama={"PT Newmont Nusa Tenggara Bulaeng Scholarship"} ket={"Student recipients of tuition scholarship as well as the necessities of life"} tahun={"2016-2019"} />
      </div>
    </div>
  );
}

export default Achievement;
