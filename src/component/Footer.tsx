"use client";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://www.facebook.com", src: "/facebook.jpg", alt: "Facebook" },
  {
    href: "https://www.instagram.com",
    src: "/instagram.jpg",
    alt: "Instagram",
  },
  { href: "https://www.linkedin.com", src: "/linkedin.jpg", alt: "LinkedIn" },
];

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Plans & Pricing" },
  { href: "/business", label: "Business Solutions" },
  { href: "/success", label: "Success Stories" },
  { href: "/jobs", label: "Jobs" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 lg:px-20 mt-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        {/* Left: Branding and Description */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
            Growvy
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
            Optimize your business with smart asset management, growth
            strategies, and cutting-edge solutions to boost sales and efficiency
            with Growvy!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={link.src} alt={link.alt} width={40} height={40} />
              </a>
            ))}
          </div>
        </div>

        {/* Center: Navigation Links & Stars */}
        <div className="flex-1">
          <ul className="text-black space-y-2 text-sm md:text-base font-semibold">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-green-600 transition"
                >
                  • {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* 5-Star Rating */}
          <div className="flex justify-center md:justify-start mt-4 text-green-600 text-xl">
            {"★★★★★".split("").map((star, index) => (
              <span key={index} className="mx-0.5">
                {star}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Arrow Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/arrow.jpg"
            alt="Arrow Up"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
