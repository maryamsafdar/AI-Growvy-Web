"use client";

import RecruitmentSolution from "@/component/RecruimentSolution";
import ScheduleCall from "@/component/ScheduleCall";
import PricingCard from "./PricingCard";

export default function PricingPage() {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <section
        className="bg-green-100 text-center py-12 px-6 rounded-b-[10rem] w-full max-w-none"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Pricing</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-5">
          Discover flexible pricing plans tailored to your needs—start growing
          with us today!
        </p>
      </section>

      {/* Pricing Cards */}
      <PricingCard
        image="/job seeker.webp"
        alt="Recruitment"
        title="Recruitment Solution"
        description="Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed to find your perfect talent, fast!"
        link="/contact"
      />

      <RecruitmentSolution />

      <PricingCard
        image="/ecommerce.avif"
        alt="Ecommerce"
        title="E-commerce Solutions"
        description="Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!"
        link="/contact"
      />

      <RecruitmentSolution />

      <PricingCard
        image="/business.jpg"
        alt="Business"
        title="Business Solutions"
        description="Boost your online store with our E-commerce Plans—affordable pricing crafted to scale your business effortlessly!"
        link="/contact"
      />

      <RecruitmentSolution />

      <ScheduleCall />
    </main>
  );
}
