import React from "react";

function Card(props) {
  return (
    <>
      <div className="block max-w-sm bg-[#f8f9fa] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 sm:mx-auto md:mx-2 lg:mx-2 mb-2">
        <figure>
          <img src={props.gambar} alt={props.nama} className={`h-40 mx-auto ${props.margin} ${props.w}`} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.nama}</h2>
          <p className="text-sm">{props.alamat}</p>
          <div className="card-actions">
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#6419e6] rounded-lg border border-gray-300 hover:bg-[#4f15b9] focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              {props.ket}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
