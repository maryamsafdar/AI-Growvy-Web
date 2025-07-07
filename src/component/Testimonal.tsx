import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20 max-w-4xl mx-auto">
      {/* Testimonial 1 */}
      <div className="bg-gradient-to-br from-green-900 via-lime-600 to-yellow-500 p-[6px] rounded-3xl shadow-md">
        <div className="bg-white rounded-2xl p-6 pt-12 relative">
          {/* User Image in Corner */}
          <Image
            src="/User.jpg"
            alt="User"
            width={80}
            height={80}
            className="rounded-full object-cover absolute -top-7 -left-5"
          />

          <p className="text-gray-700 font-semibold mb-2 mt-2">
            Growvy made hiring so much easier!
          </p>
          <div className="text-yellow-500 text-lg">{"\u2605".repeat(5)}</div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gradient-to-br from-green-900 via-lime-600 to-yellow-500 p-[6px] rounded-3xl shadow-md">
        <div className="bg-white rounded-2xl p-6 pt-12 relative">
          {/* User Image in Corner */}
          <Image
            src="/User.jpg"
            alt="User"
            width={80}
            height={80}
            className="rounded-full object-cover absolute -top-7 -left-5"
          />

          <p className="text-gray-700 font-semibold mb-2 mt-2">
            Growvy made hiring so much easier!
          </p>
          <div className="text-yellow-500 text-lg">{"\u2605".repeat(5)}</div>
        </div>
      </div>
    </section>
  );
}
