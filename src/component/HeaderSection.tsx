// components/jobs/HeaderSection.tsx
export default function HeaderSection() {
  return (
    <section
      className="bg-green-100 text-center py-12 px-6 rounded-b-[12rem] w-full max-w-none"
      data-aos="fade-up"
    >
      <div className="mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Jobs</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mt-5">
          Join our team and shape the future—explore exciting career
          opportunities today!
        </p>
      </div>
    </section>
  );
}
