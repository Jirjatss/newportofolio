import React, { useEffect, useState, useRef } from "react";
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
  }, [currentIndex, slides.length]);

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
    <div className="relative">
      <div className={`w-full h-96 mx-auto lg:mt-24 md:mt-24 px-10 items-center ${slides[currentIndex].anim}`}>
        <img src={slides[currentIndex].gambar} alt={slides[currentIndex].nama} className={`w-24 h-24 rounded-full shadow-lg mx-auto mb-4`} />
        <div className="flex">
          <p className={`mb-4 text-sm text-gray-400 text-center`}>{slides[currentIndex].testimoni}</p>
        </div>

        <p className={`text-xl text-white  text-center `}>{slides[currentIndex].nama}</p>
      </div>
      <button className="rounded mr-10 -mt-10 hover:text-[#01d193] flex absolute top-1/4" onClick={prev}>
        ❮
      </button>
      <button className="rounded ml-10 -mt-10 hover:text-[#01d193] flex absolute  top-1/4 right-0" onClick={next}>
        ❯
      </button>
    </div>
  );
}

export default CardTestimoni;
