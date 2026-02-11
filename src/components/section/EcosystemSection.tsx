"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "XiomPOS",
    icon: "/xiom/xiompos.png",
    desc: "Smart point-of-sale system for retail & restaurants",
  },
  {
    name: "XiomAccounts",
    icon: "/xiom/xiomaccount.png",
    desc: "Automated accounting & financial management",
  },
  {
    name: "XiomHR",
    icon: "/xiom/hrm.png",
    desc: "End-to-end human resource management",
  },
  {
    name: "XiomEdu",
    icon: "/xiom/XiomEduFlow.png",
    desc: "Learning management & education platform",
  },
  {
    name: "XiomTickets",
    icon: "/xiom/xiomTickets.png",
    desc: "Helpdesk & customer support ticketing",
  },
  {
    name: "XiomCare",
    icon: "/xiom/xiomCare.png",
    desc: "Healthcare & patient management system",
  },
];

/* ── SVG Vertical Beam ── */
const VBeam = ({ h = 40 }: { h?: number }) => (
  <svg
    width="6"
    height={h}
    viewBox={`0 0 6 ${h}`}
    fill="none"
    className="block"
  >
    <line
      x1="3"
      y1="0"
      x2="3"
      y2={h}
      stroke="rgba(96,165,250,0.12)"
      strokeWidth="6"
    />
    <line
      data-eco-draw
      x1="3"
      y1="0"
      x2="3"
      y2={h}
      stroke="url(#vGrad)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      data-eco-vflow
      x1="3"
      y1="0"
      x2="3"
      y2={h}
      stroke="#93c5fd"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray={`${Math.max(h * 0.2, 6)} ${Math.max(h * 0.8, 20)}`}
      opacity="0.6"
    />
  </svg>
);

/* ── Glowing Dot ── */
const GDot = ({ s = 10 }: { s?: number }) => (
  <div
    data-eco-dot
    className="shrink-0 rounded-full"
    style={{
      width: s,
      height: s,
      background:
        "radial-gradient(circle, #60a5fa 40%, rgba(96,165,250,0.3) 70%, transparent 100%)",
      boxShadow: "0 0 8px rgba(96,165,250,0.6)",
    }}
  />
);

/* ── Product Card ── */
const Card = ({ p }: { p: (typeof products)[0] }) => (
  <div
    data-eco-card
    className="group relative bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 md:p-6 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
  >
    <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <Image
        src={p.icon}
        alt={p.name}
        width={48}
        height={48}
        className="size-10 md:size-12 rounded-xl object-contain mb-4"
      />
      <h3 className="text-white font-bold text-base md:text-lg font-[family-name:var(--font-syne)] mb-1.5">
        {p.name}
      </h3>
      <p className="text-white/50 text-xs md:text-sm leading-relaxed">
        {p.desc}
      </p>
    </div>
  </div>
);

/* ── Mobile Connector (dot → beam → dot) ── */
const MobileConnector = () => (
  <div className="flex flex-col items-center py-1">
    <GDot s={8} />
    <VBeam h={28} />
    <GDot s={8} />
  </div>
);

/* ── Desktop Horizontal Beam Bar ── */
const HBar = () => (
  <div className="flex items-center max-w-3xl mx-auto w-full">
    <GDot s={10} />
    <div className="relative flex-1 h-0.5 overflow-hidden mx-0.5">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-500/40 to-blue-400/10" />
      <div
        data-eco-draw-h
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-400/60 to-blue-400/20 origin-left"
      />
      <div
        data-eco-hflow
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #93c5fd 15%, transparent 30%)",
          backgroundSize: "40% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
    <GDot s={10} />
  </div>
);

/* ── Hub ── */
const HubNode = () => (
  <div className="flex justify-center py-2 md:py-3">
    <div data-eco-hub className="relative">
      <div
        data-eco-pulse
        className="absolute inset-0 rounded-full bg-blue-500/20"
      />
      <div
        className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 blur-sm animate-spin"
        style={{ animationDuration: "8s" }}
      />
      <div className="relative size-24 md:size-32 rounded-full border border-blue-500/40 bg-blue-950/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)]">
        <div className="text-center">
          <Image
            src="/logo.webp"
            alt="XiomOS"
            width={40}
            height={40}
            className="size-8 md:size-10 mx-auto mb-1"
          />
          <span className="text-white font-bold text-xs md:text-sm font-[family-name:var(--font-syne)]">
            XiomOS
          </span>
        </div>
      </div>
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
      <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 size-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
      <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 size-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
    </div>
  </div>
);

const EcosystemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-eco-heading]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-eco-heading]", start: "top 85%" },
        },
      );

      gsap.fromTo(
        "[data-eco-hub]",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: "[data-eco-hub]", start: "top 85%" },
        },
      );

      gsap.fromTo(
        "[data-eco-card]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-eco-card]", start: "top 92%" },
        },
      );

      gsap.fromTo(
        "[data-eco-dot]",
        { scale: 0 },
        {
          scale: 1,
          duration: 0.3,
          stagger: 0.02,
          ease: "back.out(2)",
          scrollTrigger: { trigger: "[data-eco-hub]", start: "top 85%" },
        },
      );

      /* SVG beam draw-in */
      const drawLines = gsap.utils.toArray(
        "[data-eco-draw]",
      ) as SVGLineElement[];
      drawLines.forEach((line) => {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line.closest("svg")?.parentElement || sectionRef.current!,
            start: "top 90%",
          },
        });
      });

      /* Horizontal beam draw-in */
      gsap.fromTo(
        "[data-eco-draw-h]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-eco-hub]", start: "top 85%" },
        },
      );

      /* Hub pulse */
      gsap.to("[data-eco-pulse]", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out",
      });

      /* Vertical flow particles */
      const vFlows = gsap.utils.toArray("[data-eco-vflow]") as SVGLineElement[];
      vFlows.forEach((p) => {
        const len = p.getTotalLength();
        gsap.to(p, {
          strokeDashoffset: -len,
          duration: 1.2 + Math.random() * 0.6,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 1,
        });
      });

      /* Horizontal flow particles */
      gsap.to("[data-eco-hflow]", {
        backgroundPosition: "200% 0",
        duration: 2.5,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-dark-section
      className="relative bg-black py-20 md:py-28 lg:py-36 overflow-hidden mb-8"
    >
      {/* SVG Gradient Defs */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id="vGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />

      {/* Heading */}
      <div
        data-eco-heading
        className="text-center px-5 mb-16 md:mb-20 relative z-10"
      >
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          The XiomTech Ecosystem
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-syne)] max-w-3xl mx-auto">
          Everything Connected.{" "}
          <span className="text-blue-400">Powered by XiomOS.</span>
        </h2>
        <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
          One operating system at the core. Every product seamlessly integrated.
        </p>
      </div>

      {/* ═══ MOBILE LAYOUT ═══ */}
      <div className="sm:hidden max-w-sm mx-auto px-5">
        {products.slice(0, 3).map((p) => (
          <Fragment key={p.name}>
            <Card p={p} />
            <MobileConnector />
          </Fragment>
        ))}
        <HubNode />
        {products.slice(3).map((p) => (
          <Fragment key={p.name}>
            <MobileConnector />
            <Card p={p} />
          </Fragment>
        ))}
      </div>

      {/* ═══ DESKTOP LAYOUT ═══ */}
      <div className="hidden sm:block max-w-6xl mx-auto px-5">
        {/* Top row */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {products.slice(0, 3).map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>

        {/* Top tree: 3 branches merge down */}
        <div className="py-1">
          <div className="flex items-end justify-center gap-[28%] max-w-3xl mx-auto w-full">
            <div className="flex flex-col items-center">
              <GDot s={8} />
              <VBeam h={48} />
            </div>
            <div className="flex flex-col items-center">
              <GDot s={8} />
              <VBeam h={28} />
            </div>
            <div className="flex flex-col items-center">
              <GDot s={8} />
              <VBeam h={48} />
            </div>
          </div>
        </div>

        <HBar />

        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <VBeam h={28} />
            <GDot s={12} />
          </div>
        </div>

        <HubNode />

        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <GDot s={12} />
            <VBeam h={28} />
          </div>
        </div>

        <HBar />

        {/* Bottom tree: 1 splits to 3 branches */}
        <div className="py-1">
          <div className="flex items-start justify-center gap-[28%] max-w-3xl mx-auto w-full">
            <div className="flex flex-col items-center">
              <VBeam h={48} />
              <GDot s={8} />
            </div>
            <div className="flex flex-col items-center">
              <VBeam h={28} />
              <GDot s={8} />
            </div>
            <div className="flex flex-col items-center">
              <VBeam h={48} />
              <GDot s={8} />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {products.slice(3).map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
