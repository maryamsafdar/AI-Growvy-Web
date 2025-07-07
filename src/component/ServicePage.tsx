"use client";

import CallToAction from "@/component/callToAction";
import ProblemSolutionSection from "@/component/ProblemSolutionSection";
import ScheduleCall from "@/component/ScheduleCall";
import ServiceCard from "./ServiceSection";

export default function ServicesPage() {
  const services = [
    {
      image: "/job seeker.webp",
      alt: "Hiring",
      title: "Hiring",
      description:
        "Access a vast talent pool to hire the right candidates quickly and affordably.",
      link: "/pricing",
    },
    {
      image: "/ecommerce.avif",
      alt: "E-commerce",
      title: "E-commerce",
      description:
        "Drive expansion with targeted strategies and market-driven solutions.",
      link: "/pricing",
    },
    {
      image: "/business.jpg",
      alt: "Business",
      title: "Business",
      description:
        "Optimize and manage business resources with data-backed insights.",
      link: "/pricing",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section
        className="bg-green-100 text-center py-12 px-6 rounded-b-[10rem]"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 text-black">
          Services
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-5">
          At Growvy, we provide innovative, cost-effective solutions to help
          businesses and professionals thrive.
        </p>
      </section>

      {/* Services Cards */}
      <section
        className="grid grid-cols-2 md:grid-cols-3 gap-10 py-20 px-6 max-w-6xl mx-auto mt-5"
        data-aos="fade-up"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            alt={service.alt}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </section>

      {/* Extras */}
      <CallToAction />
      <ProblemSolutionSection />
      <ScheduleCall />
    </main>
  );
}
