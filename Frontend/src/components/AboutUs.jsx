import React from "react";
import myCotton from "../assets/cotton.jpg";
import myBarista from "../assets/barista.png";
import { FaHubspot } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[url('/654321.png')] bg-cover bg-center text-amber-950 font-sans">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3">
          About Us <FaHubspot className="text-amber-800 text-4xl sm:text-5xl" />
        </h1>
        <h2 className="text-2xl font-semibold text-amber-900 mb-8">My Spot</h2>

        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-6 font-normal">
          Since opening its doors in 2011 under the direction of founder Sedat
          Ramadani, our coffee shop has been dedicated to elevating the
          neighborhood's daily coffee experience through relentless passion and
          craft. Driven by a deep appreciation for specialty coffee, Sedat
          transformed a simple neighborhood space into a vibrant, modern hub
          where great ideas flow as smoothly as our signature espresso brews.
        </p>
        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-6 font-normal">
          We continuously explore rich flavor profiles and precise brewing
          methods, ensuring that every cup delivers an unforgettable taste. Our
          menu reflects a perfect balance of timeless cafe classics and
          inventive seasonal creations.
        </p>
        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-10 font-normal">
          More than a decade later, Sedat’s original vision continues to guide
          everything we do—bringing people together over incredible coffee. Stop
          by to experience our atmosphere, enjoy exceptional flavor, and become
          part of our ongoing story.
        </p>

        <img
          src={myCotton}
          alt="Coffee Cotton"
          className="mx-auto rounded-2xl shadow-xl max-w-md w-full object-cover mb-16"
        />
      </section>

      {/* Founder Profile Section */}
      <section className="bg-black/30 backdrop-blur-md py-16 px-6 border-t border-amber-900/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={myBarista}
              alt="Barista"
              className="rounded-2xl shadow-2xl max-w-sm w-full object-cover border-2 border-amber-800/40"
            />
          </div>

          <div className="space-y-4 text-amber-100 italic">
            <p className="text-base leading-relaxed">
              Sedat was born in North Macedonia, right in the heart of the
              vibrant city of Tetova. Growing up here laid the strong foundation
              for his personal and professional journey.
            </p>
            <p className="text-base leading-relaxed">
              He went on to pursue higher education and successfully graduated
              in Tetova within the BCT department. During his academic years, he
              built a solid technical background and developed a strong focus on
              technology.
            </p>
            <p className="text-base leading-relaxed">
              He discovered a deep passion for programming, specializing
              specifically in creating engaging frontend interfaces. Through
              years of practice and continuous learning, he has become a skilled
              frontend developer.
            </p>
            <p className="text-base leading-relaxed">
              In addition to his career in tech, he established a welcoming
              coffee shop named "My spot" to serve as a warm community gathering
              space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
