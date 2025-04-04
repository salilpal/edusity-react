import React, { useRef } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div class="my-20 mx-auto py-0 px-20 relative w-11/12">
        <img
          src={next_icon}
          alt=""
          class="absolute top-1/2 right-0 -translate-y-1/2 p-4 w-[50px] rounded-full cursor-pointer bg-[#212EA0]"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt=""
          class="absolute top-1/2 left-0 -translate-y-1/2 p-4 w-[50px] rounded-full cursor-pointer bg-[#212EA0]"
          onClick={slideBackward}
        />
        <div class="overflow-hidden">
          {" "}
          {/* slider */}
          <ul
            ref={slider}
            class="flex w-[200%] overflow-x-hidden transition duration-500 text-center gap-100 ml-40"
          >
            <li class="w-[400px] p-5">
              <div class="shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl p-5 leading-relaxed">
                {" "}
                {/* slide */}
                <div class="flex items-center mb-5 text-base">
                  {" "}
                  {/* user-info */}
                  <img
                    src={user_1}
                    alt=""
                    class="rounded-4xl mb-3 mr-2 w-16 border-4 border-solid border-[#212EA0]"
                  />
                  <div>
                    <h3 class="font-bold text-xl">Sophia Bennett</h3>
                    <span class="font-semibold">Edusity, USA</span>
                  </div>
                </div>
                <p class="mt-3">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li class="w-[400px] p-5">
              <div class="shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl p-5 leading-relaxed">
                {" "}
                {/* slide */}
                <div class="flex items-center mb-5 text-base">
                  {" "}
                  {/* user-info */}
                  <img
                    src={user_2}
                    alt=""
                    class="rounded-4xl mb-3 mr-2 w-16 border-4 border-solid border-[#212EA0]"
                  />
                  <div>
                    <h3 class="font-bold text-xl">William Jackson</h3>
                    <span class="font-semibold">Edusity, USA</span>
                  </div>
                </div>
                <p class="mt-3">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li class="w-[400px] p-5">
              <div class="shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl p-5 leading-relaxed">
                {" "}
                {/* slide */}
                <div class="flex items-center mb-5 text-base">
                  {" "}
                  {/* user-info */}
                  <img
                    src={user_3}
                    alt=""
                    class="rounded-4xl mb-3 mr-2 w-16 border-4 border-solid border-[#212EA0]"
                  />
                  <div>
                    <h3 class="font-bold text-xl">Aria Sinclair</h3>
                    <span class="font-semibold">Edusity, USA</span>
                  </div>
                </div>
                <p class="mt-3">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li class="w-[400px] p-5">
              <div class="shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl p-5 leading-relaxed">
                {" "}
                {/* slide */}
                <div class="flex items-center mb-5 text-base">
                  {" "}
                  {/* user-info */}
                  <img
                    src={user_4}
                    alt=""
                    class="rounded-4xl mb-3 mr-2 w-16 border-4 border-solid border-[#212EA0]"
                  />
                  <div>
                    <h3 class="font-bold text-xl">Ethan Carter</h3>
                    <span class="font-semibold">Edusity, USA</span>
                  </div>
                </div>
                <p class="mt-3">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
