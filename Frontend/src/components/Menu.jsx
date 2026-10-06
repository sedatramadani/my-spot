import React from "react";

import Imgcoffee from "../assets/coffee.jpg";
import Imgcake from "../assets/Cake.jpg";
import ImgMcoffee from "../assets/making-coffee.jpg";
import ImgMcake from "../assets/making-cake.jpg";

// Static front-end menu data
const COFFEE_ITEMS = [
  { name: "Americano", price: "70 Den" },
  { name: "Latte", price: "90 Den" },
  { name: "Espresso", price: "50 Den" },
  { name: "Nescafe", price: "70 Den" },
  { name: "Icecoffee", price: "70 Den" },
  { name: "Capuchine", price: "70 Den" },
];

const BITES_ITEMS = [
  { name: "Chocolate cake", price: "70 Den" },
  { name: "Victoria sponge", price: "90 Den" },
  { name: "Angel food cake", price: "100 Den" },
  { name: "Black forest cake", price: "70 Den" },
  { name: "New York cheesecake", price: "80 Den" },
  { name: "Blueberry Cheesecake", price: "100 Den" },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-[url('/654321.png')] bg-cover bg-center py-12 px-4 md:px-12 text-[#4B2E2B]">
      {/* Decorative Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <img
          src={ImgMcoffee}
          alt="Making Coffee"
          className="w-56 h-40 object-cover rounded-lg shadow-md"
        />
        <img
          src={ImgMcake}
          alt="Making Cake"
          className="w-56 h-40 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Coffee & Bites</h1>
        <hr className="border-[#4B2E2B] w-1/2 mx-auto my-4" />
        <p className="mb-2 text-sm md:text-base">
          We serve freshly roasted coffee made from carefully selected beans,
          brewed with precision and passion.
        </p>
        <p className="text-sm md:text-base">
          Pair your cup with our handmade desserts and enjoy a warm, cozy moment
          in every sip.
        </p>
        <hr className="border-[#4B2E2B] w-1/2 mx-auto my-4" />
      </div>

      {/* Menu Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Coffee Section */}
        <div className="bg-amber-900 text-[#F8F5F0] p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold font-serif">Coffee</h3>
            <span className="border-2 border-[#F8F5F0] px-3 py-1 font-bold text-sm rounded">
              Coffee
            </span>
          </div>
          <hr className="border-[#F8F5F0]/40 mb-6" />

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <table className="w-full text-left text-sm">
              <tbody>
                {COFFEE_ITEMS.map((item, index) => (
                  <tr key={index} className="border-b border-amber-800/50">
                    <th className="py-2.5 font-medium whitespace-nowrap">
                      {item.name}
                    </th>
                    <td className="py-2.5 text-right font-semibold">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <img
              src={Imgcoffee}
              alt="Coffee"
              className="w-36 h-36 object-cover rounded-xl shadow-lg rotate-6 shrink-0"
            />
          </div>
        </div>

        {/* Bites Section */}
        <div className="bg-amber-900 text-[#F8F5F0] p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold font-serif">Bites</h3>
            <span className="border-2 border-[#F8F5F0] px-3 py-1 font-bold text-sm rounded">
              Bites
            </span>
          </div>
          <hr className="border-[#F8F5F0]/40 mb-6" />

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <table className="w-full text-left text-sm">
              <tbody>
                {BITES_ITEMS.map((item, index) => (
                  <tr key={index} className="border-b border-amber-800/50">
                    <th className="py-2.5 font-medium whitespace-nowrap">
                      {item.name}
                    </th>
                    <td className="py-2.5 text-right font-semibold">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <img
              src={Imgcake}
              alt="Cake"
              className="w-36 h-36 object-cover rounded-xl shadow-lg rotate-6 shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
