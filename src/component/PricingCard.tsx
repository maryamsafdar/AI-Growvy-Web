// components/pricing/PricingCard.tsx
import Image from "next/image";
import Link from "next/link";

interface PricingCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

export default function PricingCard({
  image,
  alt,
  title,
  description,
  link,
}: PricingCardProps) {
  return (
    <section
      className="py-16 px-6 text-center max-w-6xl mx-auto"
      data-aos="fade-up"
    >
      <Image
        src={image}
        alt={alt}
        width={250}
        height={250}
        className="mx-auto mb-6"
      />
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
        {description}
      </p>
      <Link href={link}>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
          Plans
        </button>
      </Link>
    </section>
  );
}
