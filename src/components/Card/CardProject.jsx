import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CardProject(props) {
  return (
    <>
      <div className="block max-w-full bg-[#171f38] rounded-lg  sm:mx-auto md:mx-2 lg:mx-2 mb-2 text-white group/item ">
        <div className="card-body">
          <p className="card-title text-left">{props.nama}</p>
          <p className="text-sm  text-gray-400">{props.ket}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{props.tag}</div>
            <div className="badge badge-outline">{props.tag2}</div>
            <div className="badge badge-outline">{props.tag3}</div>
          </div>

          <figure className="pt-5">
            <img src={props.gambar} alt={props.nama} className="rounded-xl h-40" />
          </figure>

          <div className="card-actions mx-auto mt-3" id="cardproject">
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center py-2 px-8 text-sm font-medium text-center hover:text-white text-[#01d193] bg-[#171f38] rounded-lg border border-[#01d193] hover:bg-[#01d193] focus:ring-4 focus:outline-none focus:ring-gray-200 "
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
