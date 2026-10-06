import React from "react";
import { Link } from "react-router-dom";
import { FaHubspot } from "react-icons/fa";
import Imgdelighting from "../assets/delighting.png";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[url('/654321.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between text-amber-950 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12 w-full">
        {/* Header Title */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-950">
            My Spot
          </h1>
          <FaHubspot className="text-amber-900 text-3xl sm:text-4xl" />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-amber-900 uppercase tracking-wider">
              Welcome to our website
            </h3>
            <h2 className="text-3xl sm:text-5xl font-bold capitalize leading-tight text-amber-950">
              Fresh coffee, brewed for real moments
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-amber-900">
              Using freshly roasted beans and rich flavors that awaken your
              senses. Enjoy a warm, relaxing atmosphere designed for
              conversations, focus, and moments of calm throughout your day.
            </p>

            <hr className="border-t-4 border-amber-500 w-24 my-4" />

            <div className="flex gap-4 pt-2">
              <Link
                to="/menu"
                className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all"
              >
                Menu
              </Link>
              <Link
                to="/order-now"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all"
              >
                Order Now
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={Imgdelighting}
              alt="Delighting Coffee"
              className="rounded-2xl shadow-2xl max-w-full h-auto object-cover border border-amber-900/20"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
