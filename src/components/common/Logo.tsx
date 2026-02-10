import { Smooch_Sans } from "next/font/google";
import Image from "next/image";

const arimo = Smooch_Sans({
  weight: ["400", "500", "700", "200", "300", "600", "800"],
  subsets: ["latin"],
});
const Logo = () => {
  return (
    <div className="flex  items-center gap-1 ">
      <Image
        src={"/logo.webp"}
        alt="Xiomtech Logo Icon"
        width={1000}
        height={1000}
        className="size-8"
      />
      <span className={`text-4xl font-bold ${arimo.className}`}>XiomTech</span>
    </div>
  );
};

export default Logo;
