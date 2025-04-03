import React from "react";
import hero from "../../assets/hero.png";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <>
      <div
        class="w-full min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,0,58,0.7)] to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-[rgba(8,0,58,0.7)] to-transparent"></div>
        <div class="relative flex flex-col justify-center items-center text-center h-screen max-w-4xl mx-auto p-4">
          <h1 class="text-white font-bold text-5xl mb-7 leading-snug">
            We Ensure better education for a better world
          </h1>
          <p class="text-white text-xl">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <button class="bg-[#fff] text-[#212121] px-6 py-3 rounded-4xl cursor-pointer mt-4 text-lg hover:bg-gray-500 hover:text-white flex">
            Explore more
            {/* <img src={dark_arrow} alt="" /> */}
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default Hero;
