import React, { useState, useEffect, useRef } from "react";
import { heroData } from "../data";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredImages = heroData;
let count = 0;
let slideInterval;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    console.log(productsLength);
    count = (currentIndex + productsLength - 1) % productsLength;
    slideRef.current.classList.add("fade-anim");
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    return () => {
      clearInterval(slideInterval);
    };
  });

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };
  return (
    <>
      <div className="w-full">
        <div ref={slideRef} className="w-full h-3/6 relative select-none">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={featuredImages[currentIndex].src}
              alt={featuredImages[currentIndex].alt}
            />
          </div>

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnPrevClick}
            >
              <AiOutlineVerticalRight size={35} />
            </button>
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
              onClick={handleOnNextClick}
            >
              <AiOutlineVerticalLeft size={35} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
