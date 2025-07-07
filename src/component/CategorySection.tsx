// components/jobs/CategoryButtons.tsx
const categories = [
  "Tech",
  "Management",
  "Human Resource",
  "Marketing & Sales",
  "Accounts & Finance",
  "Customer Service",
];

export default function CategoryButtons() {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 px-6"
      data-aos="fade-up"
    >
      {categories.map((category, idx) => (
        <button
          key={idx}
          className="border border-black text-black font-medium rounded-full px-5 py-2 text-center hover:bg-green-600 hover:text-white transition"
        >
          {category}
        </button>
      ))}
    </section>
  );
}
