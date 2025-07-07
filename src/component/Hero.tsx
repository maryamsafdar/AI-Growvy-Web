// components/Hero.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Libre_Bodoni } from "next/font/google";
import { Playwrite_AT } from "next/font/google";

const libre = Libre_Bodoni({ weight: "400", subsets: ["latin"] });
const sacramento = Playwrite_AT({ weight: "400" });

export default function Hero() {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12 ${libre.className}`}
      data-aos="fade-up"
    >
      <div className="text-left max-w-xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-black"
        >
          Maximize <br />
          <span className="relative inline-block mr-2">
            <span className="text-black">business</span>
            <svg
              viewBox="0 0 400 120"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-8 -left-8 w-[150%] h-[160%] pointer-events-none"
              style={{ transform: "rotate(-10deg)" }}
            >
              <ellipse
                cx="200"
                cy="60"
                rx="180"
                ry="36"
                stroke="#00C200"
                strokeWidth="4"
                fill="none"
              />
              <ellipse
                cx="200"
                cy="64"
                rx="180"
                ry="36"
                stroke="#00C200"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>{" "}
          efficiency
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col mb-6 leading-tight items-start"
        >
          <span className="text-green-600 text-lg md:text-2xl font-medium pl-20 -mt-4">
            with
          </span>
          <span className="text-green-600 text-5xl md:text-6xl font-bold leading-none -mt-4">
            Growvy
          </span>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-gray-700 mb-6"
        >
          Scale your company with <br /> tailored strategies, market <br />{" "}
          insights, and expert consulting.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition"
        >
          Start Today
        </motion.button>
      </div>

      {/* Right Side Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px]"
      >
        <Image
          src="/arrow.jpg"
          alt="Arrow Up"
          fill
          className="object-contain"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className={`absolute inset-0 flex items-center justify-center text-6xl md:text-7xl text-black ${sacramento.className}`}
        >
          Growvy
        </motion.div>
      </motion.div>
    </section>
  );
}
