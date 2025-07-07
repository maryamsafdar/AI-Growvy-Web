// components/success/LogoGrid.tsx
import Image from "next/image";

const logos = [
  { src: "/ECHONET.png", alt: "Echonet" },
  { src: "/easypaisa.png", alt: "Easypaisa" },
  { src: "/Hawk.png", alt: "Hawk" },
  { src: "/Motive.png", alt: "Motive" },
];

export default function LogoGrid() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          width={150}
          height={150}
        />
      ))}
    </div>
  );
}
