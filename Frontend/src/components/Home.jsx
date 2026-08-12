import React from "react";
import { Link } from "react-router-dom";

import { FaHubspot } from "react-icons/fa";

import Imgdelighting from "../assets/delighting.png";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[url('/654321.png')] bg-cover bg-center bg-no-repeat">
      <h1 className=" relative text-center font-bold text-3xl top-5 ">
        My Spot
        <FaHubspot className=" relative size-16 left-210 bottom-9" />{" "}
      </h1>
      <img
        src={Imgdelighting}
        alt={Imgdelighting}
        className="relative md:left-200 mt-10 mb-5 "
      />
      <h2 className="relative capitalize  md:font-bold text-4xl text-left bottom-170 left-5 ">
        Fresh coffee, brewed for real moments
      </h2>
      <h3 className="relative  md:font-medium text-xl bottom-200 left-5 ">
        Welcome to our website
      </h3>
      <p className=" relative text-xl md:text-dark-700 leading-relaxed mb-4 mx-160 right-150 bottom-130">
        Using freshly roasted beans and rich flavors that awaken your senses.
        Enjoy a warm, relaxing atmosphere designed for conversations, focus, and
        moments of calm throughout your day.
      </p>
      <hr className="relative my-6 md:border-t-7 mx-200 bottom-180 border-yellow-300 right-190" />

      <Link
        to="/menu"
        className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-100 left-40"
      >
        Menu
      </Link>

      <Link
        to="/order-now"
        className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-100 left-50"
      >
        Order now
      </Link>
      <Footer />
    </div>
  );
}
