import React from "react";

function CardAchievement(props) {
  return (
    <>
      <div className="card card-side bg-[#171f38] rounded-lg  sm:mx-auto md:mx-2 lg:mx-2 mb-2 p-1 text-white">
        <figure>
          <img src={props.gambar} alt={props.nama} className="w-24 h-24" />
        </figure>
        <div className="card-body text-center items-center">
          <h2 className="card-title text-base">{props.nama}</h2>
          <p className="text-sm  text-gray-400">{props.tahun}</p>
          <p className="text-xs  text-gray-400">{props.ket}</p>
        </div>
      </div>
    </>
  );
}

export default CardAchievement;
