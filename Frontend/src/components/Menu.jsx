import React from "react";

import Imgcoffee from "../assets/coffee.jpg";
import Imgcake from "../assets/Cake.jpg";

import ImgMcoffee from "../assets/making-coffee.jpg";
import ImgMcake from "../assets/making-cake.jpg";

export default function Menu() {
  return (
    <div className="h-screen bg-[url('/654321.png')] bg-cover md:bg-center">
      <img
        src={ImgMcoffee}
        alt={ImgMcoffee}
        className="relative  w-56 h-40 md:object-container top-180 left-60"
      />
      <img
        src={ImgMcake}
        alt={ImgMcake}
        className="relative  w-56 h-40 md:object-container bottom-5 left-390"
      />

      <h1 className="relative text-[40px] md:font-bold md:left-220 bottom-70">
        Coffee & Bites
      </h1>
      <hr class="relative my-4 w-1/2 mx-auto md:border-t border-[#4B2E2B]  bottom-70" />
      <p className="relative mb-3 md:text-body left-150 bottom-70 ">
        We serve freshly roasted coffee made from carefully selected beans,
        brewed with precision and passion.
      </p>
      <p className=" relative mb-3 md:text-body left-160 bottom-70  ">
        Pair your cup with our handmade desserts and enjoy a warm, cozy moment
        in every sip.
      </p>
      <hr class="relative my-4 w-1/2 mx-auto md:border-t border-[#4B2E2B] bottom-70" />

      <div
        className="relative bg-amber-900 p-20 
           max-w-4/10 md:bottom-70 max-h-5/10 left-40 "
      >
        <h3 className="relative text-[#F8F5F0] md:font-bold md:left-20 font-serif">
          Coffee
        </h3>
        <hr class=" relative my-4 w-1/2 mx-auto md:border-t border-[#F8F5F0] right-50" />
        <div>
          <img
            src={Imgcoffee}
            className="relative  w-96 h-48 md:object-cover rotate-12 left-80"
          />
        </div>
        <p className="relative md:tracking-tight text-[#F8F5F0] border-3 border-brown w-40 h-10 pl-8 p-2 left-120 top-2 font-bold">
          Coffee
        </p>

        <div class="relative overflow-x-auto md:bottom-40">
          <table class="w-64 text-xs text-left md:text-body ">
            <thead class="text-xs md:bg-neutral-secondary-medium"></thead>

            <tbody>
              <tr class="bg-neutral-primary">
                <th class="px-3 py-2 font-medium md:text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Americano
                </th>

                <td class="px-3 py-2  md:text-[#F8F5F0] dark:text-sky-400">
                  70 Den
                </td>
              </tr>

              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Latte
                </th>
                <td class="px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  90 Den
                </td>
              </tr>

              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Espresso
                </th>

                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  50 Den
                </td>
              </tr>
              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Nescafe
                </th>
                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  70 Den
                </td>
              </tr>
              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Icecoffee
                </th>
                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  70 Den
                </td>
              </tr>
              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Capuchine
                </th>
                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  70 Den
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div
        className="relative bg-amber-900 p-20 
           max-w-4/10 bottom-150 max-h-5/10 left-270 "
      >
        <h3 className="relative md:text-[#F8F5F0] font-bold md:left-20 font-serif">
          Bites
        </h3>
        <hr class=" relative my-4 w-1/2 mx-auto md:border-t md:border-[#F8F5F0] right-50" />
        <div>
          <img
            src={Imgcake}
            className="relative  w-96 h-48 md:object-cover rotate-12 left-80"
          />
        </div>
        <p className="relative tracking-tight md:text-[#F8F5F0] border-3 border-brown w-40 h-10 pl-8 p-2 left-120 top-2 font-bold">
          Bites
        </p>

        <div class="relative overflow-x-auto bottom-40">
          <table class="w-64 text-xs text-left md:text-body ">
            <thead class="text-xs md:bg-neutral-secondary-medium"></thead>

            <tbody>
              <tr class="bg-neutral-primary">
                <th class="px-3 py-2 font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Chocolate cake
                </th>

                <td class="px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  70 Den
                </td>
              </tr>

              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Victoria sponge
                </th>
                <td class="px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  90 Den
                </td>
              </tr>

              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Angel food cake
                </th>

                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  100 Den
                </td>
              </tr>
              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Black forest cake
                </th>
                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  70 Den
                </td>
              </tr>
              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  New York cheesecake
                </th>
                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  80 Den
                </td>
              </tr>
              <tr class="md:bg-neutral-primary">
                <th class="px-3 py-2 md:font-medium text-heading whitespace-nowrap text-[#F8F5F0] dark:text-sky-400">
                  Blueberry Cheesecake
                </th>
                <td class="md:px-3 py-2  text-[#F8F5F0] dark:text-sky-400">
                  100 Den
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
