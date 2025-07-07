"use client";
import Image from "next/image";

interface SolutionItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonText?: string;
  reverse?: boolean;
}

const solutions: SolutionItem[] = [
  {
    title: "Problems in Hiring",
    description: `Companies spend high $$$ budgets
on job portals like Indeed and LinkedIn, only to receive
low-quality CVs and irrelevant applicants, making hiring
slow and inefficient.`,
    image: "/question-marks.png",
    alt: "Hiring Problems",
  },
  {
    title: "With Growvy Solution",
    description: `With Growvy, businesses can access a
database of active job seekers who have recently joined for job search.
Use advanced filters to find the right candidates quickly and at a fraction
of the cost—no wasted budget, just quality hires!`,
    image: "/circle-boy.png",
    alt: "Employer",
    buttonText: "Post a Job",
    reverse: true,
  },
  {
    title: "E-commerce Business",
    description: `E-commerce businesses struggle with high
marketing costs, inefficient operations, and slow growth,
making it difficult to scale and maximize profits.`,
    image: "/green.png",
    alt: "Ecommerce",
  },
  {
    title: "With Growvy Solution",
    description: `Growvy helps e-commerce businesses streamline operations,
manage assets, and implement smart growth strategies to boost sales and
efficiency—all at a low cost with proven results.`,
    image: "/arrow.png",
    alt: "Business",
    buttonText: "Business Plans",
    reverse: true,
  },
];
 
export default function GrowvySolutions() {
  return (
    <section className="flex flex-col gap-16 w-full px-6 md:px-12 lg:px-20 min-h-[1px]">
      {solutions.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            item.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-10 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
          data-aos="fade-up"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-3 text-black">{item.title}</h3>
            <p className="text-gray-700 mb-5 text-base md:text-lg whitespace-pre-line">
              {item.description}
            </p>
            {item.buttonText && (
              <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
                {item.buttonText}
              </button>
            )}
          </div>
          <Image
            src={item.image}
            alt={item.alt}
            width={450}
            height={450}
            className="object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </section>
  );
}
