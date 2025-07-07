"use client";
import Image from "next/image";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="text-center bg-white py-8 px-6" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-20 text-black relative inline-block">
        <span className="relative inline-block">
          <Image
            src="/Community.png"
            alt="Community Icon"
            width={8000}
            height={8000}
            className="absolute -top-10 -left-6"
          />
          Join
        </span>{" "}
        Growvy’s 50M+ Job Seeker <br /> Community &amp; Get Hired Faster!
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Build your profile, get noticed by top employers, and access exclusive
        job <br />
        opportunities tailored to your skills. Your next career move starts
        here!
      </p>

      <Link href="/pricing">
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
          Sign In
        </button>
      </Link>
    </section>
  );
}
