import React from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <>
      <div class="my-20 mx-auto py-0 px-20 relative w-11/12">
        <img
          src={next_icon}
          alt=""
          class="absolute top-1/2 right-0 -translate-y-1/2 p-4 w-[50px] rounded-full cursor-pointer bg-[#212EA0]"
        />
        <img
          src={back_icon}
          alt=""
          class="absolute top-1/2 left-0 -translate-y-1/2 p-4 w-[50px] rounded-full cursor-pointer bg-[#212EA0]"
        />
        <div class="overflow-hidden">
          {" "}
          {/* slider */}
          <ul class="flex w-[200%] overflow-x-hidden transition duration-500 text-center gap-4">
            <li class="">
              <div>
                {" "}
                {/* slide */}
                <div class="flex items-center flex-col">
                  {" "}
                  {/* user-info */}
                  <img src={user_1} alt="" class="rounded-2xl mb-3" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div>
                {" "}
                {/* slide */}
                <div class="flex items-center flex-col">
                  {" "}
                  {/* user-info */}
                  <img src={user_2} alt="" class="rounded-2xl mb-3" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div>
                {" "}
                {/* slide */}
                <div>
                  {" "}
                  {/* user-info */}
                  <img src={user_3} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div>
                {" "}
                {/* slide */}
                <div>
                  {" "}
                  {/* user-info */}
                  <img src={user_4} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
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
