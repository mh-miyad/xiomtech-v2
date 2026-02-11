"use client";
import {
  IconArrowRight,
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconCheck,
  IconMail,
  IconSend,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "../ui/marquee";
import { ShimmerButton } from "../ui/shimmer-button";

gsap.registerPlugin(ScrollTrigger);

const budgetOptions = [
  "Less than $5K",
  "$5K - $10K",
  "$10K - $20K",
  "$20K - $50K",
  "More than $50K",
];

const bulletPoints = [
  "Expect a response from us within 24 hours",
  "We're happy to sign an NDA upon request",
  "Get access to a team of dedicated product specialists",
];

const marqueeText =
  "Don't Miss Out - Secure Your Brand's Future Today. Why Risk It With The Wrong Partner? Get 100% Value And Guarantee.";

const teamAvatars = [
  "https://i.pravatar.cc/80?img=11",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=44",
  "https://i.pravatar.cc/80?img=68",
  "https://i.pravatar.cc/80?img=52",
];

const socials = [
  { icon: IconBrandDribbble, label: "Dribbble" },
  { icon: IconBrandInstagram, label: "Instagram" },
  { icon: IconBrandLinkedin, label: "LinkedIn" },
  { icon: IconBrandFacebook, label: "Facebook" },
  { icon: IconBrandX, label: "X" },
  { icon: IconSend, label: "Telegram" },
];

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact-left] > *",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        "[data-contact-form]",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        "[data-contact-banner]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-contact-banner]", start: "top 90%" },
        }
      );
      gsap.fromTo(
        "[data-contact-newsletter] > *",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-contact-newsletter]",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-8 lg:px-16 pt-12 pb-6">
      <div className="max-w-5xl mx-auto space-y-5">
        {/* ── Main Card ── */}
        <div className="bg-black rounded-2xl overflow-hidden relative">
          {/* Blue ambient glows — more prominent like reference */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[140px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/25 rounded-full blur-[140px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 p-7 md:p-12">
            {/* ── Left ── */}
            <div data-contact-left className="flex flex-col gap-2">
              <span className="inline-block w-fit text-[11px] font-semibold text-blue-600 border border-blue-500/30 bg-blue-800/10 rounded-full px-4 py-1.5 tracking-wide">
                Claim a $799 Consultation, on Us!
              </span>

              <h2 className="text-3xl md:text-4xl  md:leading-[1.15] font-bold text-white font-[family-name:var(--font-syne)]">
                Enhance Your Brand Potential{" "}
                <span className="italic font-serif text-blue-400">
                  At No Cost!
                </span>
              </h2>

              <ul className="space-y-2.5">
                {bulletPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-[13px] text-white/65"
                  >
                    <IconCheck
                      size={16}
                      stroke={2}
                      className="text-blue-400 shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Profile card — stacked like reference */}
              <div className="mt-3">
                <div className="relative w-44 h-[156px] rounded-2xl overflow-hidden border border-blue-500/25 mb-3 shadow-lg shadow-blue-500/10">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/50 via-transparent to-sky-500/40 pointer-events-none z-10" />
                  <Image
                    src="/profile-image-png.png"
                    alt="Founder"
                    width={240}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base font-[family-name:var(--font-syne)]">
                  Mahamudul Hasan Miyad
                </h3>
                <p className="text-white/45 text-xs mt-0.5">Founder & CTO</p>

                <div className="flex flex-col gap-1.5 mt-3">
                  <a
                    href="https://wa.me/8801822830775"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/55 hover:text-green-400 transition-colors duration-200"
                  >
                    <IconBrandWhatsapp size={15} stroke={1.5} />
                    +880 1822-830775
                  </a>
                  <a
                    href="#"
                    className="text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200"
                  >
                    Book a Call Directly
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right — Form ── */}
            <div data-contact-form className="flex flex-col gap-6">
              <div>
                <label className="text-xs font-semibold text-white mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-blue-500/50 transition-colors duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-white mb-1.5 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="yourmail@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-blue-500/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white mb-1.5 block">
                    Whatsapp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="1 123 1234567"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-blue-500/50 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white mb-2 block">
                  Project Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-3.5 py-1.5 rounded-lg text-[11px] font-medium border transition-all duration-200 ${
                        selectedBudget === budget
                          ? "bg-blue-600 border-blue-500 text-white"
                          : "bg-white/5 border-white/10 text-white/55 hover:border-white/25 hover:text-white/80"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white mb-1.5 block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="I want to redesign my website.."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-blue-500/50 transition-colors duration-200 resize-none"
                />
              </div>

              <ShimmerButton variant="primary" className="w-fit mt-1">
                Let&apos;s Connect
                <IconArrowRight size={16} stroke={2} />
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA Marquee Banner ── */}
        <div
          data-contact-banner
          className="relative rounded-full py-3 px-5 flex items-center gap-5 overflow-hidden bg-gray-50 border border-gray-200"
        >
          {/* Blurry blue overlays on left & right */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-blue-500/30 to-transparent blur-xl pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-blue-500/30 to-transparent blur-xl pointer-events-none" />

          {/* Team avatars + count */}
          <div className="relative z-10 flex items-center shrink-0">
            <div className="flex -space-x-2.5">
              {teamAvatars.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Team member ${i + 1}`}
                  width={36}
                  height={36}
                  className="size-9 rounded-full border-2 border-white object-cover"
                  unoptimized
                />
              ))}
            </div>
            <span className="ml-2.5 text-sm font-bold text-gray-900 whitespace-nowrap">
              40+
            </span>
          </div>

          {/* Scrolling text */}
          <Marquee className="relative z-10 flex-1 [--duration:22s] [--gap:3rem]" repeat={4}>
            <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
              {marqueeText.split(" ").map((word, i) => {
                const isBold = [
                  "Brand's",
                  "Future",
                  "Wrong",
                  "Partner?",
                  "100%",
                  "Guarantee.",
                ].includes(word);
                return (
                  <span
                    key={i}
                    className={isBold ? "font-bold italic text-gray-900" : ""}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </span>
          </Marquee>
        </div>
      </div>

      {/* ── Newsletter Section ── */}
      <div data-contact-newsletter className="max-w-3xl mx-auto text-center mt-16 mb-10 px-4">
        <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Say goodbye to outdated enterprise software and welcome the smoother one.
          We lead you from design to product innovation to shape your path from idea to success
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              className="size-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors duration-200"
              aria-label={s.label}
            >
              <s.icon size={18} stroke={1.5} />
            </a>
          ))}
        </div>

        {/* Email subscribe */}
        <div className="flex items-center gap-3 mt-8 max-w-md mx-auto">
          <div className="flex-1 flex items-center gap-2.5 border border-gray-200 rounded-full px-4 py-3 bg-white">
            <IconMail size={18} stroke={1.5} className="text-gray-400 shrink-0" />
            <input
              type="email"
              placeholder="Your email here"
              className="flex-1 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 outline-none"
            />
          </div>
          <ShimmerButton variant="primary">
            Subscribe
            <IconArrowRight size={15} stroke={2} />
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
