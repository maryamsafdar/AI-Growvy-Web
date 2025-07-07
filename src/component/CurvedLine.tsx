import Image from "next/image";
export default function CurvedLine() {
  return (
    <div className="relative w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] flex justify-center items-center mt-[-20px]">
      <Image
        src="/curved-line.jpg"
        alt="Curved Line"
        fill
        className="object-contain"
        data-aos="fade-up"
      />
    </div>
  );
}
