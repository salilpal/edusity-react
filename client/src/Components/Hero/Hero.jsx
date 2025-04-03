import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    // <div class="w-full min-h-screen bg-[url('../../assets/hero.png')] bg-cover bg-center"></div>
    <div
      class="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    ></div>
  );
};

export default Hero;
