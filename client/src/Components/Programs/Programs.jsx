import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <>
      <div class="my-20 mx-auto w-10/12 flex items-center justify-space-between gap-10 px-35">
        <div class="w-full rounded-xl .block relative">
          <img src={program_1} alt="" class="w-full rounded-xl block" />
          <div class="absolute inset-0 bg-[rgba(0,15,152,0.3)] rounded-xl flex flex-col items-center justify-center text-white text-center opacity-0 hover:opacity-100 hover:transition-opacity duration-300 hover:pt-7 pt-0">
            <img src={program_icon_1} alt="" class=" w-15 mb-2.5" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div class="w-full rounded-xl .block relative">
          <img src={program_2} alt="" class="w-full rounded-xl block" />
          <div class="absolute inset-0 bg-[rgba(0,15,152,0.3)] rounded-xl flex flex-col items-center justify-center text-white text-center opacity-0 hover:opacity-100 hover:transition-opacity duration-300 hover:pt-7 pt-0 transition-0.4s">
            <img src={program_icon_2} alt="" class=" w-15 mb-2.5" />
            <p>Masters Degree</p>
          </div>
        </div>
        <div class="w-full rounded-xl .block relative">
          <img src={program_3} alt="" class="w-full rounded-xl block" />
          <div class="absolute inset-0 bg-[rgba(0,15,152,0.3)] rounded-xl flex flex-col items-center justify-center text-white text-center opacity-0 hover:opacity-100 hover:transition-opacity duration-300 hover:pt-7 pt-0 transition-0.4s">
            <img src={program_icon_3} alt="" class=" w-15 mb-2.5" />
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
