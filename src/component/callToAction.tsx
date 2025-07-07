// component/callToAction.tsx
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="text-center bg-white py-10 px-6" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Join over 10k users worldwide
      </h2>
      <Link href="/pricing">
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
          View Pricing
        </button>
      </Link>
    </section>
  );
}
