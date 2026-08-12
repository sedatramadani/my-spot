import React from "react";

import myCotton from "../assets/cotton.jpg";
import myBarista from "../assets/barista.png";
import { FaHubspot } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="h-screen bg-[url('/654321.png')] bg-cover md: bg-center">
      <h1 className="relative top-40 text-4xl font-semibold">About Us </h1>
      <h3 className="relative bottom-7 text-2xl font-semibold text-center">
        My Spot <FaHubspot className=" relative size-16 left-60" />{" "}
      </h3>
      <p className="relative mx-200 text-base font-normal md: right-80">
        Since opening its doors in 2011 under the direction of founder Sedat
        Ramadani, our coffee shop has been dedicated to elevating the
        neighborhood's daily coffee experience through relentless passion and
        craft. Driven by a deep appreciation for specialty coffee, Sedat
        transformed a simple neighborhood space into a vibrant, modern hub where
        great ideas flow as smoothly as our signature espresso brews. Over the
        years, our sanctuary has remained steadfast in its commitment to
        excellence, pairing top-tier ingredients with an inviting atmosphere
        designed for the modern lifestyle. It is a space built on a foundation
        of community, innovation, and an unwavering respect for the journey from
        bean to cup.
      </p>
      <p className="relative mx-200 text-base font-normal md: left-40 bottom-80">
        We continuously explore rich flavor profiles and precise brewing
        methods, ensuring that every cup delivers an unforgettable taste. Our
        menu reflects a perfect balance of timeless cafe classics and inventive
        seasonal creations.
      </p>
      <p className="relative mx-200 text-base font-normal md: left-40  bottom-60">
        More than a decade later, Sedat’s original vision continues to guide
        everything we do—bringing people together over incredible coffee. Stop
        by to experience our atmosphere, enjoy exceptional flavor, and become
        part of our ongoing story.
      </p>
      <img
        src={myCotton}
        alt={myCotton}
        className="relative image-center md:"
      />

      <div className="h-screen bg-[url('/654321.png')] bg-cover bg-center md:">
        <img
          src={myBarista}
          alt={myBarista}
          className="relative image-left top-20 ml-10 rounded-lg shadow-md "
        />
        <p className="relative mx-150 text-base font-normal italic text-bold left-110 bottom-140 ">
          Sedat was born in North Macedonia, right in the heart of the vibrant
          city of Tetova. Growing up here laid the strong foundation for his
          personal and professional journey.
        </p>
        <p className="relative mx-150 text-base font-normal md: italic text-bold left-110 bottom-130 ">
          He went on to pursue higher education and successfully graduated in
          Tetova within the BCT department. During his academic years, he built
          a solid technical background and developed a strong focus on
          technology. His time in university helped shape his logical thinking
          and gave him the problem-solving skills needed for tech. This degree
          marked the official beginning of his dedicated career path in the
          modern digital world.
        </p>

        <p className="relative mx-150 text-base font-normal md: italic text-bold left-110 bottom-120 ">
          He discovered a deep passion for programming, specializing
          specifically in creating engaging frontend interfaces. Through years
          of practice and continuous learning, he has become a truly skilled and
          professional frontend developer. His daily work revolves around
          building high-quality, modern web applications with precision and
          clean code.
        </p>

        <p className="relative mx-150 text-base font-normal italic md: text-bold left-110 bottom-110 ">
          In addition to his career in tech, he decided to follow another
          creative vision and opened his own business. He established a
          welcoming coffee shop named "My spot" to serve as a warm community
          gathering space. What began as a personal hobby quickly transformed
          into a vibrant local haven for coffee lovers to enjoy. It stands today
          as a perfect reflection of his dedication, creative spirit, and love
          for hospitality.
        </p>
      </div>
    </div>
  );
}
