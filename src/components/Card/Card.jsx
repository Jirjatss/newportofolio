import React from "react";

function Card(props) {
  return (
    <>
      <div className="block max-w-full bg-[#171f38] rounded-lg  sm:mx-auto md:mx-2 lg:mx-2 mb-2 text-white">
        <figure>
          <img src={props.gambar} alt={props.nama} className="h-20 mx-auto mt-4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.nama}</h2>
          <p className="text-sm  text-gray-400">{props.alamat}</p>
          <div className="card-actions">
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
