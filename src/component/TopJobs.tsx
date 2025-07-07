// components/TopJobs.tsx
"use client";

import React from "react";

const TopJobs = () => {
  const jobs = [
    "Business Developer",
    "Finance Manager",
    "Human Resource Manager",
    "Software Engineer",
    "Graphic Desginer/ UI/ UX",
    "SEO Expert",
    "Android Developer",
    "Floor Manager",
    "Sales Representative",
    "Data Entry Operator",
    "Delivery Man",
    "Urdu/ English/ Call Center Agent",
    "Morning Shift Jobs For Females",
    "Accountant",
  ];

  return (
    <section
      className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32 py-12"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Top Jobs
      </h2>

      <div className="grid gap-6 max-w-full">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-200 px-6 py-4 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            <span className="text-base font-medium text-black text-center sm:text-left mb-2 sm:mb-0">
              {job}
            </span>
            <button className="bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopJobs;
