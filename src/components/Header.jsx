import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { logos } from "../data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-white flex justify-between items-center h-22 text-black scroll-m-2 shadow-md">
      <div className="w-3/12 ">
        <img src={logos[0].src} alt={logos[0].alt}></img>
      </div>

      <ul className="hidden md:flex">
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4">ABOUT US</li>
        </Link>
        <li></li>
        <Link
          to="incubation"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li className="p-4">INCUBATION</li>
        </Link>
        <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4">EVENTS</li>
        </Link>
        <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4">STARTUPS</li>
        </Link>
        <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4">GALLERY</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <li className="p-4">CONTACT</li>
        </Link>
      </ul>
      <div className="w-52 pr-4">
        <img src={logos[0].srcNiti} alt={logos[0].alt} />
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full text-black  border-r bg-white border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-14 text">
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="p-4 border-b border-gray-600">company</li>
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="p-4 border-b border-gray-600">resources</li>
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="p-4 border-b border-gray-600">About</li>
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="p-4 border-b border-gray-600">Contact</li>
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="p-4 border-b border-gray-600">Gallery</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
