// components/ScheduleCall.tsx
import Image from "next/image";

export default function ScheduleCall() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 mt-20" data-aos="fade-up">
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between animate__animated animate__fadeInUp animate__delay-4s">
        <div className="w-full md:w-auto text-center md:text-left flex flex-col items-center md:items-start">
          <button className="bg-green-600 text-white font-semibold py-5 px-8 rounded-full text-base hover:bg-green-700 transition">
            Schedule Call Now
          </button>
          <p className="text-gray-700 mb-5 text-base md:text-lg mt-3">
            Join over 10k users worldwide.
            <br />
            Start scheduling in less than 1 <br />
            minutes
          </p>
        </div>
        <Image
          src="/call.png"
          alt="Schedule Call"
          width={450}
          height={450}
          className="object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
