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
    <footer className="w-full bg-[url('/electric-gold.jpg')] bg-cover bg-center bg-no-repeat bg-amber-900/90 text-amber-950 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-amber-950">My Spot</h2>
          <p className="text-sm leading-relaxed font-medium">
            <b>My Spot</b> is your daily haven for expertly crafted coffee,
            fresh pastries, and warm conversations. From our first morning pour
            to your afternoon pick-me-up, we are dedicated to bringing
            high-quality brews.
          </p>
          <div className="flex gap-4 text-2xl pt-2 text-amber-950">
            <FaYoutube className="hover:text-red-700 cursor-pointer transition-colors" />
            <FaInstagramSquare className="hover:text-pink-700 cursor-pointer transition-colors" />
            <FaFacebook className="hover:text-blue-800 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-amber-950">Quick Links</h3>
          <ul className="space-y-2 text-sm font-semibold">
            {["Home", "Menu", "Order now", "About Us", "Contact Us"].map(
              (link) => (
                <li
                  key={link}
                  className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <FaArrowRight className="text-xs text-amber-800" />
                  <span>{link}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-amber-950">Contact Us</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-3">
              <MdPlace className="text-lg text-amber-800 flex-shrink-0" />
              <span>Todor Cipovski Merxhan Tetove</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-sm text-amber-800 flex-shrink-0" />
              <span>072-687-373</span>
            </li>
            <li className="flex items-center gap-3">
              <MdAttachEmail className="text-lg text-amber-800 flex-shrink-0" />
              <span>myspot@yahoo.com</span>
            </li>
            <li className="flex items-center gap-3">
              <RiFindReplaceLine className="text-lg text-amber-800 flex-shrink-0" />
              <span>www.myspot.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Form */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-amber-950">Stay in the Loop</h3>
          <p className="text-xs leading-relaxed font-medium">
            Freshly roasted stories and subscriber-only perks delivered straight
            to your inbox.
          </p>
          <MyForm />
        </div>
      </div>
    </footer>
  );
}
