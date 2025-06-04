import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
// import form_key from "../../../config.env";

const Contact = () => {
  // const access_key = process.env.form_key;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dc0478e7-1ddb-471b-a8a8-69199b00d2da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div
        class="max-w-[90%] flex items-center justify-between my-20 mx-50"
        id="contact"
      >
        <div class="basis-[48%] text-[#676767] flex-col">
          <h3 class="text-[#000F38] font-medium text-2xl pr-2 flex items-center gap-2 pb-2">
            Send us a message
            <img src={msg_icon} alt="" class="w-[35px]" />
          </h3>
          <p class="max-w-md leading-snug  ">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional servicee to our
            university community.
          </p>
          <ul class="flex flex-col my-6">
            <li class="mb-1 flex gap-2">
              <img src={mail_icon} alt="" class="w-10" />
              salilp379@gmail.com
            </li>
            <li class="my-1 flex gap-2 items-center">
              <img src={phone_icon} alt="" class="w-10" />
              +91 98211 46267
            </li>
            <li class="my-1 flex gap-2 items-center">
              <img src={location_icon} alt="" class="w-10" />
              The NorthCap University Gurugram, Haryana
            </li>
          </ul>
        </div>
        <form class="basis-[48%]" onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            class="block w-full bg-[#EBECFE] p-3.75 border-0 outline-none mb-3.75 mt-1.25 resize-none"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            class="block w-full bg-[#EBECFE] p-3.75 border-0 outline-none mb-3.75 mt-1.25 resize-none"
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            class="block w-full bg-[#EBECFE] p-3.75 border-0 outline-none mb-3.75 mt-1.25 resize-none"
          ></textarea>
          <button
            type="submit"
            class="bg-[#212EA0] text-[#fff] px-6 py-3 rounded-4xl cursor-pointer mt-4 text-lg hover:bg-gray-600 hover:text-white flex mt-10"
          >
            Submit now{" "}
            <img
              src={white_arrow}
              alt=""
              class="w-[35px] pl-2 h-[15px] my-auto"
            />
          </button>
          <span class=" block mt-7">{result}</span>
        </form>
      </div>
    </>
  );
};

export default Contact;
