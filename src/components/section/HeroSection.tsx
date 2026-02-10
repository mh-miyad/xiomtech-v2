"use client";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Logo from "../common/Logo";
import { Marquee } from "../ui/marquee";

const brandLogos = Array.from({ length: 10 }, (_, i) => ({
  src: `/brand-logo/b-${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stagger the center content in
      tl.fromTo(
        "[data-hero-rating]",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          "[data-hero-headline] > *",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 },
          "-=0.4"
        )
        .fromTo(
          "[data-hero-sub]",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-cta]",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-proof]",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      // Slide left and right images
      tl.fromTo(
        '[data-hero-bar="left"]',
        { x: -120, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          onComplete: () => {
            gsap.to('[data-hero-bar="left"]', {
              y: -15,
              duration: 2,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        },
        "-=1"
      ).fromTo(
        '[data-hero-bar="right"]',
        { x: 120, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          onComplete: () => {
            gsap.to('[data-hero-bar="right"]', {
              y: 15,
              duration: 2,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        },
        "-=1.1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden">
      {/* Left floating image */}
      <div
        data-hero-bar="left"
        className="hidden lg:block absolute lg:top-[18%] left-0 lg:w-[220px] xl:w-[320px] 2xl:w-[450px] opacity-0"
      >
        <Image
          src="/hero-left.avif"
          alt="Our work showcase"
          width={1000}
          height={1000}
          className="-mt-28"
          priority
        />
      </div>

      {/* Right floating image */}
      <div
        data-hero-bar="right"
        className="hidden lg:block absolute lg:top-[18%] right-0 lg:w-[220px] xl:w-[320px] 2xl:w-[450px] opacity-0"
      >
        <Image
          src="/left-hero.avif"
          alt="Our work showcase"
          width={1000}
          height={1000}
          className="-mt-14"
          priority
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-6">
        {/* Logo */}
        <div className="mb-16">
          <Logo />
        </div>

        {/* Rating badge */}
        <div
          data-hero-rating
          className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-2.5 mb-8 opacity-0"
        >
          <div className="flex gap-0.5 text-amber-500 text-base">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
          </div>
          <span className="text-base font-medium text-[#1a1a1a]">
            Leading Software Development Agency
          </span>
        </div>

        {/* Main headline */}
        <h1
          data-hero-headline
          className="font-[family-name:var(--font-syne)] text-[#1a1a1a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl"
        >
          <span className="block">
            We <span className="italic font-serif text-blue-600">Engineer</span>{" "}
            Products
          </span>
          <span className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <span>That</span>
            {/* Tech stack pill */}
            <span className="inline-flex items-center gap-2.5 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
              <Image
                src="/icons/react.svg"
                alt="React"
                width={28}
                height={28}
              />
              <Image
                src="/icons/nextjs.svg"
                alt="Next.js"
                width={28}
                height={28}
              />
              <Image
                src="/icons/typescript.svg"
                alt="TypeScript"
                width={28}
                height={28}
              />
              <Image
                src="/icons/nodejs.svg"
                alt="Node.js"
                width={28}
                height={28}
              />
            </span>
            <span className="italic font-serif text-sky-600">Scale</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          data-hero-sub
          className="mt-7 text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed opacity-0"
        >
          Transforming ideas into high-performance SaaS platforms and custom
          digital experiences for businesses across the globe.
        </p>

        {/* CTA buttons */}
        <div
          data-hero-cta
          className="mt-9 flex flex-col sm:flex-row gap-4 opacity-0"
        >
          <button
            type="button"
            className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-blue-700 transition-colors duration-300"
          >
            Book a Consultation
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
          >
            View Our Work
          </button>
        </div>

        {/* Social proof - countries */}
        <div
          data-hero-proof
          className="mt-10 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 opacity-0"
        >
          <span className="text-sm font-medium text-gray-500">
            Serving clients in
          </span>
          <span className="flex items-center gap-1.5 text-xl">
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
          <span className="text-sm font-medium text-gray-500">& beyond</span>
        </div>
      </div>

      {/* Brand logos marquee with blue gradient */}
      <div className="relative mt-20">
        {/* Blue gradient background */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-white via-sky-50 to-blue-700/50 rounded-t-[3rem]" /> */}

        <div className="relative pt-16 pb-20 space-y-4 overflow-hidden">
          <p className="text-center text-2xl font-medium  mb-8 tracking-wide uppercase">
            Trusted by innovative companies worldwide
          </p>

          {/* Row 1: left to right */}
          <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
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

          {/* Row 2: right to left */}
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:30s] [--gap:3rem]"
          >
            {brandLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
