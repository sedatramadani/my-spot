import React from "react";
import { Link } from "react-router-dom";

import { FaRegAddressCard, FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineAttachEmail, MdOutlinePlace } from "react-icons/md";

import Imgdelighting from "../assets/delighting.png";
import Home from "./Home";

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-[url('/654321.png')] bg-cover bg-center bg-no-repeat">
      <h1 className=" relative top-50 left-50 text-3xl font-bold ">
        {" "}
        Contact Us
      </h1>
      <img
        src={Imgdelighting}
        alt={Imgdelighting}
        className="relative md:left-200 mt-10 mb-5 "
      />
      <h2 className=" relative bottom-140 left-5 text-2xl">
        Opening <span className="text-black font-bold">Hours:</span>
      </h2>
      <p className="relative text-xl font-base bottom-128 left-5">
        Mon–Fri: 9:00 AM – 10:00 PM
      </p>
      <p className="relative text-xl font-base bottom-128 left-5">
        Sat: 10:00 AM – 3:00 PM
      </p>
      <p className="relative text-xl font-base bottom-110 left-25">
        {" "}
        Todor Cipovski Merxhan Tetove
      </p>
      <MdOutlinePlace className=" relative size-13 bottom-120 left-5" />

      <p className="relative text-xl font-base bottom-110 left-25">
        {" "}
        myspot@yahoo.com
      </p>
      <MdOutlineAttachEmail className=" relative size-13 bottom-120 left-5" />

      <p className="relative text-xl font-base bottom-110 left-25">
        {" "}
        072-687-373
      </p>
      <FaPhoneSquareAlt className=" relative size-13 bottom-120 left-5" />
      <div className=" relative bottom-100 right-160 w-full max-w-2xl h-80 sm:h-96 rounded-xl overflow-hidden shadow-md mx-auto my-4 border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.082400133469!2d21.43141!3d41.99812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU5JzUzLjMiTiAyMcKwMjUnNTMuMSJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        />
      </div>

      <Link
        to="/home"
        className="relative bg-transparent text-white md:font-semibold hover:text-amber-300 transition bottom-100 left-40"
      >
        Back to home
      </Link>
    </div>
  );
}
