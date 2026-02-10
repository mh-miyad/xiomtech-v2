import Image from "next/image";
import Logo from "../common/Logo";

const HeroSection = () => {
  return (
    <section className="min-h-screen h-full relative">
      <div className=" hidden lg:block absolute lg:top-[20%] left-0 bg-[#0231b4] lg:size-[300px] xl:size-[400px] 2xl:size-[450px]  rounded-r-full ">
        <Image
          src={"/hero-left.avif"}
          alt="left-image"
          width={1000}
          height={1000}
          className="absolute -top-1/4"
        />
      </div>
      <div className=" hidden lg:block absolute  lg:top-[20%] right-0 bg-[#0231b4] lg:size-[300px] xl:size-[400px] 2xl:size-[450px]  rounded-l-full ">
        <Image
          src={"/left-hero.avif"}
          alt="left-image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="">
        <div className="w-full max-w-fit mx-auto mt-5 ">
          <Logo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
