// components/success/ClientsSection.tsx
import Link from "next/link";
import LogoGrid from "@/component/Success/LogoGrid";

export default function ClientsSection() {
  return (
    <section className="text-center py-16 px-6" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Join over <span className="text-black">10k Clients worldwide</span>
      </h2>
      <Link href="/pricing">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition mb-8">
          View Pricing
        </button>
      </Link>
      <LogoGrid />
    </section>
  );
}