import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <>
      <div class="my-25 mx-auto flex items-center justify-between w-11/12 relative">
        <div class="basis-[30%]">
          <img src={about_img} alt="" class="w-full rounded-xl ml-50" />
          <img
            src={play_icon}
            alt=""
            class="w-15 absolute bottom-[230px] left-[440px] cursor-pointer"
          />
          {/* class="w-15 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" */}
        </div>
        <div class="basis-[50%]">
          <h3 class="font-semibold text-base text-[#212EA0]">
            ABOUT UNIVERSITY
          </h3>
          <h2 class="text-4xl text-[#000F38] my-2.5 0 max-w-sm">
            Nurturing Tomorrow's Leaders Today
          </h2>
          <p class="text-[#676767] mb-3.5">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p class="text-[#676767] mb-3.5">
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p class="text-[#676767] mb-3.5">
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
