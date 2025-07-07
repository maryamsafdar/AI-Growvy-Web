"use client";
import Link from "next/link";

const routes = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Success", href: "/success" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <nav className="border rounded-full px-6 py-2 mb-12 shadow-md">
      <ul className="flex flex-wrap justify-center gap-4 font-semibold text-base sm:text-lg">
        {routes.map((route) => (
          <li key={route.label}>
            <Link
              href={route.href}
              className={`underline ${
                route.label === "Home" ? "font-bold" : ""
              } transition-colors duration-300 hover:text-green-600`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
