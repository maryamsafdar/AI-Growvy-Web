// components/success/SuccessHeader.tsx
export default function SuccessHeader() {
  return (
    <section
      className="bg-green-100 text-center py-12 px-6 rounded-b-[10rem]"
      data-aos="fade-up"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 text-black">
        Success
      </h1>
      <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-2">
        Discover inspiring Success Stories—see how our solutions empower
        businesses to thrive
      </p>
    </section>
  );
}