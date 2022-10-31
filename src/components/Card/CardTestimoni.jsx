import React from "react";

function CardTestimoni(props) {
  return (
    <>
      <div className="w-full h-96 mx-auto lg:mt-28 md:mt-28 px-10 items-center">
        <img src={props.gambar} alt={props.nama} className="w-24 h-24 rounded-full shadow-lg mx-auto mb-4" />
        <p className="mb-4 text-sm text-gray-400 text-center">{props.testimoni}</p>
        <p className="text-xl text-white mb-5 text-center">{props.nama}</p>
      </div>
    </>
  );
}

export default CardTestimoni;
