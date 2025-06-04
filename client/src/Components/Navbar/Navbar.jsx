import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      class={`flex justify-between text-white mx-auto items-center px-6 py-4 z-10 fixed w-full px-50 ${
        sticky ? "bg-[#212EA0] duration-500" : ""
      }`}
    >
      {/* bg-[#333] */}
      <img src={logo} alt="Company Logo" class="ml-4 w-50" />
      <ul class="flex justify-end gap-4 mr-4">
        <li class="p-0 hover:underline hover:decoration-red-400 hover:decoration-3 hover:underline-offset-7 hover:text-gray-400">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li class="px-2 hover:underline hover:decoration-red-400 hover:decoration-3 hover:underline-offset-7 hover:text-gray-400">
          <Link to="programs" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li class="px-2 hover:underline hover:decoration-red-400 hover:decoration-3 hover:underline-offset-7 hover:text-gray-400">
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About us
          </Link>
        </li>
        <li class="px-2 hover:underline hover:decoration-red-400 hover:decoration-3 hover:underline-offset-7 hover:text-gray-400">
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li class="px-2 hover:underline hover:decoration-red-400 hover:decoration-3 hover:underline-offset-7 hover:text-gray-400">
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li class="px-2 hover:underline hover:decoration-red-400 hover:decoration-3 hover:underline-offset-7 hover:text-gray-400">
          <Link to="contact" smooth={true} offset={-250} duration={500}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
