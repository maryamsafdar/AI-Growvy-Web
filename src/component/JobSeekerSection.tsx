// components/jobs/JobSeekerSection.tsx
import Image from "next/image";

export default function JobSeekerSection() {
  return (
    <section className="gap-16 mt-20 w-full px-6 md:px-12 lg:px-20">
      <div
        className="flex flex-col md:flex-row items-center gap-10 animate__animated animate__fadeInUp animate__delay-1s"
        data-aos="fade-up"
      >
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 text-black">
            I’m a Job Seeker!
          </h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            Looking for job according to my <br /> skills and requirements.
          </p>
          <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
            Jobs
          </button>
        </div>
        <Image
          src="/job seeker.webp"
          alt="Job Seeker"
          width={250}
          height={250}
          className="object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
