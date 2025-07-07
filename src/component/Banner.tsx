// components/Banner.tsx
export default function Banner() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-20 bg-white text-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6">
        Join Growvy’s 50M+ Job Seeker
        <br className="hidden md:block" />
        Community &amp; Get Hired Faster!
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
        “Build your profile, get noticed by top employers, and access exclusive
        job opportunities tailored to your skills. Your next career move starts
        here!”
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-base transition">
        Sign In
      </button>
    </section>
  );
}
