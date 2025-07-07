// components/Ecommerce.tsx
import Image from "next/image";

export default function Ecommerce() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 mt-20" data-aos="fade-up">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-28">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 text-black">
            E-commerce Owner?
          </h3>
          <p className="text-gray-700 mb-5 text-base md:text-lg">
            Optimize your business with smart <br />
            asset management, growth <br />
            strategies, and cutting-edge <br />
            solutions to boost sales and <br />
            efficiency with Growvy
          </p>
          <button className="bg-green-600 text-white font-semibold py-2.5 px-8 rounded-full text-base hover:bg-green-700 transition">
            Plans
          </button>
        </div>
        <Image
          src="/business-owner.png"
          alt="Ecommerce"
          width={250}
          height={250}
          className="object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
