import { Smooch_Sans } from "next/font/google";
import Image from "next/image";

const arimo = Smooch_Sans({
  weight: ["400", "500", "700", "200", "300", "600", "800"],
  subsets: ["latin"],
});

interface LogoProps {
  inverted?: boolean;
}

const Logo = ({ inverted }: LogoProps) => {
  return (
    <div className="flex items-center">
      <Image
        src={"/logo.webp"}
        alt="Xiomtech Logo Icon"
        width={1000}
        height={1000}
        className="size-10"
      />
      <span
        className={`text-5xl font-bold transition-colors duration-300 ${
          inverted ? "text-white" : "text-black"
        } ${arimo.className}`}
      >
        XiomTech
      </span>
    </div>
  );
};

export default Logo;
