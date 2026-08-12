import React from "react";
import {
  FaArrowRight,
  FaPhone,
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdAttachEmail, MdPlace } from "react-icons/md";
import { RiFindReplaceLine } from "react-icons/ri";
import MyForm from "./MyForm";

export default function Footer() {
  return (
    <div className="min-h-screen w-full bg-[url('/electric-gold.jpg')] bg-cover bg-center bg-no-repeat opacity-70">
      <h1 className=" relative text-left text-3xl text-black top-50 mx-30  ">
        My Spot
      </h1>
      <p className="relative right-180 text-base mx-190 top-70">
        <b>My Spot</b> is your daily haven for expertly crafted coffee, fresh
        pastries, and warm conversations. From our first morning pour to your
        afternoon pick-me-up, we are dedicated to bringing high-quality,
        sustainably sourced brews to our local community—one cup at a time.
      </p>
      <FaYoutube className="relative left-20 top-80 size-13" />
      <FaInstagramSquare className="relative left-40 top-66 size-13" />
      <FaFacebook className="relative left-60 top-53 size-13" />

      <h2 className=" relative left-170 text-3xl text-black mx-30 bottom-22  ">
        Quick links
      </h2>

      <p className="relative text-base text-center bottom-10 right-40">Home</p>
      <FaArrowRight className="relative left-200 bottom-15" />
      <p className="relative text-base text-center bottom-10 right-40">Menu</p>
      <FaArrowRight className="relative left-200 bottom-15" />
      <p className="relative text-base text-center bottom-10 right-35">
        Order now
      </p>
      <FaArrowRight className="relative left-200 bottom-15" />
      <p className="relative text-base text-center bottom-10 right-35">
        About Us
      </p>
      <FaArrowRight className="relative left-200 bottom-15" />
      <p className="relative text-base text-center bottom-10 right-35">
        Contact Us
      </p>
      <FaArrowRight className="relative left-200 bottom-15" />
      <h2 className=" relative left-250 text-3xl text-black mx-30 bottom-80   ">
        Contact Us
      </h2>
      <p className="relative text-base text-center bottom-70 left-50">
        Todor Cipovski Merxhan Tetove
      </p>
      <MdPlace className="relative left-270 bottom-75" />
      <p className="relative text-base text-center bottom-70 left-40">
        072-687-373
      </p>
      <FaPhone className="relative left-270 bottom-75" />
      <p className="relative text-base text-center bottom-70 left-40">
        myspot@yahoo.com
      </p>
      <MdAttachEmail className="relative left-270 bottom-75" />
      <p className="relative text-base text-center bottom-70 left-40">
        www.myspot.com
      </p>
      <RiFindReplaceLine className="relative left-270 bottom-75" />

      <h2 className=" relative left-340 text-3xl text-black mx-30 bottom-130   ">
        Stay in the Loop
      </h2>
      <p className="relative left-180 text-base mx-190 bottom-110">
        Freshly roasted stories, seasonal brew drops, and subscriber-only perks
        delivered straight to your inbox—no spam, just good coffee. Drop your
        email below to claim 10% off your next cup!
      </p>
      <MyForm />
    </div>
  );
}
