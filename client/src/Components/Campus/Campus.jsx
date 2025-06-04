import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";

const Campus = () => {
  return (
    <>
      <div class="my-20 mx-auto w-11/12 mb-30" id="campus">
        <div class="flex items-center justify-between mb-10 gap-4">
          <img src={gallery_1} alt="" class="w-[23%] rounded-lg" />
          <img src={gallery_2} alt="" class="w-[23%] rounded-lg" />
          <img src={gallery_3} alt="" class="w-[23%] rounded-lg" />
          <img src={gallery_4} alt="" class="w-[23%] rounded-lg" />
        </div>
        <button class="bg-[#212EA0] text-[#fff] px-6 py-3 rounded-4xl cursor-pointer mt-4 text-lg hover:bg-gray-600 hover:text-white flex mx-auto mt-10">
          See more here
        </button>
      </div>
    </>
  );
};

export default Campus;
