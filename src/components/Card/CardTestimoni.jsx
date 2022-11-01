import React, { useEffect, useState, useRef } from "react";
import { Sliders } from "react-bootstrap-icons";
const delay = 8000;

function CardTestimoni({ slides }) {
  const [currentIndex, SetCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => SetCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prev = () => {
    const fisrtSlide = currentIndex === 0;
    const newIndex = fisrtSlide ? slides.length - 1 : currentIndex - 1;
    SetCurrentIndex(newIndex);
  };

  const next = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    SetCurrentIndex(newIndex);
  };

  return (
    <>
      <div className={`w-full h-96 mx-auto lg:mt-24 md:mt-24 px-10 items-center`}>
        <img src={slides[currentIndex].gambar} alt={slides[currentIndex].nama} className={`w-24 h-24 rounded-full shadow-lg mx-auto mb-4 ${slides[currentIndex].anim}`} />
        <div className="flex">
          <button className="rounded mr-10 -mt-10 hover:text-[#01d193] flex" onClick={prev}>
            ❮
          </button>
          <p className={`mb-4 text-sm text-gray-400 text-center ${slides[currentIndex].anim}`}>{slides[currentIndex].testimoni}</p>
          <button className="rounded ml-10 -mt-10 hover:text-[#01d193] flex" onClick={next}>
            ❯
          </button>
        </div>

        <p className={`text-xl text-white  text-center ${slides[currentIndex].anim}`}>{slides[currentIndex].nama}</p>
      </div>
    </>
  );
}

export default CardTestimoni;
