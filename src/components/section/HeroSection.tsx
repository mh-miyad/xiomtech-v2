"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import Logo from "../common/Logo";
const HeroSection = () => {
  useEffect(() => {
    // Slide in from left, then start smooth bounce
    gsap.fromTo(
      '[data-hero-bar="left"]',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        onComplete: () => {
          gsap.to('[data-hero-bar="left"]', {
            y: -15,
            duration: 1.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      }
    );
    // Slide in from right, then start smooth bounce
    gsap.fromTo(
      '[data-hero-bar="right"]',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        onComplete: () => {
          gsap.to('[data-hero-bar="right"]', {
            y: 15,
            duration: 1.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen h-full relative">
      {/* <div
        data-hero-bar="left"
        className=" hidden lg:block absolute lg:top-[20%] left-0 bg-[#0231b4] lg:size-[200px] xl:size-[300px] 2xl:size-[450px]  rounded-r-full "
      > */}
      <div
        data-hero-bar="left"
        className=" hidden lg:block absolute lg:top-[20%] left-0 lg:size-[200px] xl:size-[300px] 2xl:size-[450px]  rounded-r-full "
      >
        <Image
          src={"/hero-left.avif"}
          alt="left-image"
          width={1000}
          height={1000}
          className="-mt-28"
        />
      </div>
      <div
        data-hero-bar="right"
        className=" hidden lg:block absolute  lg:top-[20%] right-0  lg:size-[200px] xl:size-[300px] 2xl:size-[450px]  rounded-l-full "
      >
        <Image
          src={"/left-hero.avif"}
          alt="left-image"
          width={1000}
          height={1000}
          className="-mt-14 "
        />
      </div>
      <div className=" h-full">
        <div className="w-full max-w-fit mx-auto mt-5 ">
          <Logo />
        </div>

        <div className="max-w-2xl mx-auto bg-red-600 p-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          officiis temporibus nisi omnis! Porro at laboriosam voluptas saepe,
          obcaecati neque id veniam voluptatum numquam quisquam illum
          accusantium quas deleniti fugiat?
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
