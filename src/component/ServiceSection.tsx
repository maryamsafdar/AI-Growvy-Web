// components/services/ServiceCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({
  image,
  alt,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <div className="text-center border-2 border-black rounded-4xl p-6 flex flex-col items-center justify-between">
      <Image
        src={image}
        alt={alt}
        width={200}
        height={200}
        className="mb-4 -mt-20"
      />
      <h3 className="font-bold text-xl mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href={link}>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          Plans
        </button>
      </Link>
    </div>
  );
}
