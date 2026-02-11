"use client";
import gsap from "gsap";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Marquee } from "../ui/marquee";
import { ShimmerButton } from "../ui/shimmer-button";
import { WordRotator } from "./hero/WordRotator";

const brandLogos = Array.from({ length: 10 }, (_, i) => ({
  src: `/brand-logo/b-${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

const actionWords = ["Engineer", "Build", "Craft", "Design", "Develop"];
const resultWords = ["Scale", "Grow", "Succeed", "Thrive", "Launch"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 0.9 },
        delay: 0.7,
      });

      // Phase 1: Center content flows in as one cohesive unit
      tl.fromTo(
        "[data-hero-rating]",
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
      )
        .fromTo(
          "[data-hero-headline] > *",
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.12 },
          "-=0.35",
        )
        .fromTo(
          "[data-hero-sub]",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          "[data-hero-cta]",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.45",
        )
        .fromTo(
          "[data-hero-proof]",
          { y: 20, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7 },
          "-=0.35",
        );

      // Phase 2: Side images glide in together, timed to overlap with end of text
      tl.fromTo(
        '[data-hero-bar="left"]',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
        "-=1.2",
      ).fromTo(
        '[data-hero-bar="right"]',
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
        "<0.08",
      );

      // Phase 3: Gentle floating after everything has settled
      tl.to(
        '[data-hero-bar="left"]',
        { y: -14, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 },
        "-=0.1",
      ).to(
        '[data-hero-bar="right"]',
        { y: 14, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 },
        "<",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[50vh] h-auto relative overflow-hidden"
    >
      {/* Left floating image */}
      <div
        data-hero-bar="left"
        className="hidden lg:block absolute lg:top-[5%] left-0 lg:w-[220px] xl:w-[320px] 2xl:w-[450px] opacity-0"
      >
        <Image
          src="/hero-left.avif"
          alt="XiomTech web development and SaaS project showcase"
          width={1000}
          height={1000}
          sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 220px, (max-width: 1536px) 320px, 450px"
          className="-mt-28"
          priority
        />
      </div>

      {/* Right floating image */}
      <div
        data-hero-bar="right"
        className="hidden lg:block absolute lg:top-[10%] right-0 lg:w-[220px] xl:w-[320px] 2xl:w-[450px] opacity-0"
      >
        <Image
          src="/left-hero.avif"
          alt="XiomTech mobile app development and digital solutions portfolio"
          width={1000}
          height={1000}
          sizes="(max-width: 1024px) 0vw, (max-width: 1280px) 220px, (max-width: 1536px) 320px, 450px"
          className="-mt-14"
          priority
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-5 md:pt-14">
        {/* Rating badge */}
        <div
          data-hero-rating
          className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-2.5 mb-8 opacity-0"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-2 md:size-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-xs font-medium text-[#1a1a1a]">
            Leading Software Development Agency
          </span>
        </div>

        {/* Main headline */}
        <h1
          data-hero-headline
          className="font-[family-name:var(--font-syne)] text-[#1a1a1a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl"
        >
          <span className="block">
            We{" "}
            <WordRotator
              words={actionWords}
              className="italic font-serif text-blue-600"
            />{" "}
            Products
          </span>
          <span className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <span>That</span>
            {/* Tech stack pill */}
            <span className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-5 py-2.5 border border-gray-200">
              <Image
                src="/icons/figma.svg"
                alt="Figma"
                width={24}
                height={24}
                className="size-5 md:size-7"
              />
              <Image
                src="/icons/react.svg"
                alt="React"
                width={28}
                height={28}
                className="size-5 md:size-7"
              />
              <Image
                src="/icons/openai.svg"
                alt="OpenAI"
                width={28}
                height={28}
                className="size-5 md:size-7"
              />
              <Image
                src="/icons/nextjs.svg"
                alt="Next.js"
                width={28}
                height={28}
                className="size-5 md:size-7"
              />
            </span>
            <WordRotator
              words={resultWords}
              className="italic font-serif text-blue-600"
            />
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          data-hero-sub
          className="mt-4 md:mt-7 text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed opacity-0"
        >
          Transforming ideas into high-performance SaaS platforms and custom
          digital experiences for businesses across the globe.
        </p>

        {/* CTA buttons */}
        <div data-hero-cta className="mt-9 flex flex-row gap-5 opacity-0">
          <ShimmerButton variant="primary">
            Book a Consultation
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </ShimmerButton>
          <ShimmerButton variant="outline">View Our Work</ShimmerButton>
        </div>

        {/* Social proof - countries */}
        <div
          data-hero-proof
          className="mt-10 text-xs px-5 py-2 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full md:px-6 md:py-3 opacity-0"
        >
          <span className=" font-medium text-gray-500">Serving clients in</span>
          <span className="flex items-center gap-1.5 ">
            <Image
              src="https://flagcdn.com/w40/bd.png"
              alt="Bangladesh"
              width={24}
              height={16}
              className="rounded-sm"
            />
            <Image
              src="https://flagcdn.com/w40/ae.png"
              alt="UAE"
              width={24}
              height={16}
              className="rounded-sm"
            />
            <Image
              src="https://flagcdn.com/w40/sa.png"
              alt="Saudi Arabia"
              width={24}
              height={16}
              className="rounded-sm"
            />
            <Image
              src="https://flagcdn.com/w40/qa.png"
              alt="Qatar"
              width={24}
              height={16}
              className="rounded-sm"
            />
          </span>
          <span className=" font-medium text-gray-500">& beyond</span>
        </div>
      </div>

      {/* Brand logos marquee with blue gradient */}
      <div className="relative mt-5   ">
        {/* Blue gradient background */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-white via-sky-50 to-blue-700/50 rounded-t-[3rem]" /> */}

        <div className="relative 2xl:pt-10 pb-20 space-y-4 overflow-hidden max-w-5xl mx-auto">
          <p className="text-center text-sm sm:text-base md:text-2xl font-medium  mb-8 tracking-wide uppercase">
            Trusted by innovative companies worldwide
          </p>

          {/* Row 1: left to right */}
          <Marquee pauseOnHover className="[--duration:50s] [--gap:3rem]">
            {brandLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={30}
                sizes="120px"
                loading="lazy"
                className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </Marquee>

          {/* Row 2: right to left */}
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:50s] [--gap:3rem]"
          >
            {brandLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={30}
                className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
