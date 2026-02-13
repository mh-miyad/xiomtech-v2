"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Testimonial Data ── */
const testimonials = [
  {
    id: 1,
    quote:
      "XiomTech completely transformed our digital presence. The website they built isn't just beautiful — it generates 3x more leads than our previous one.",
    name: "Sarah Chen",
    role: "CEO, Innovate Labs",
    initials: "SC",
    color: "#3B82F6",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their AI integration into our workflow saved us 200+ hours per month. The team's technical depth is unmatched — they delivered what three other agencies couldn't.",
    name: "Marcus Rivera",
    role: "CTO, NexGen Finance",
    initials: "MR",
    color: "#8B5CF6",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "From concept to launch in 8 weeks. The e-commerce platform they built handles 10k+ daily transactions without breaking a sweat. Truly enterprise-grade.",
    name: "Aisha Al-Rashid",
    role: "Founder, Luxe Market",
    initials: "AR",
    color: "#06B6D4",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "We needed a design system that could scale across 12 products. XiomTech delivered a system so elegant, our entire dev team's velocity doubled overnight.",
    name: "David Okonkwo",
    role: "VP Engineering, CloudScale",
    initials: "DO",
    color: "#F59E0B",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The mobile app they built became the #1 rated app in our category within 3 months. Their obsession with UX details is what sets them apart from everyone else.",
    name: "Yuki Tanaka",
    role: "Product Director, HealthBridge",
    initials: "YT",
    color: "#10B981",
    rating: 5,
  },
];

/* ── Star SVG ── */
const Star = () => (
  <svg
    className="w-4 h-4 fill-current"
    style={{ color: "#FBBF24" }}
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      /* ── Heading entrance ── */
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      /* ── Horizontal scroll ── */
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* ── Decorative Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(59,130,246,0.05)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(59,130,246,0.04)" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Header ── */}
      <div
        ref={headingRef}
        className="relative  pb-16 md:pb-20 px-6 md:px-12 lg:px-20"
        style={{ opacity: 0 }}
      >
        <span
          className="inline-block text-xs font-semibold tracking-wide mb-5 rounded-full px-4 py-1.5"
          style={{
            color: "#3B82F6",
            border: "1px solid rgba(59,130,246,0.3)",
          }}
        >
          Testimonials
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight font-[family-name:var(--font-syne)] leading-[1.05]">
          Words from those
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #3B82F6, #06B6D4)",
            }}
          >
            who trust us.
          </span>
        </h2>
      </div>

      {/* ── Horizontal Scroll Track ── */}
      <div className="relative pb-24">
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 pl-6 md:pl-12 lg:pl-20"
          style={{ paddingRight: "40vw" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-card
              className="relative flex-shrink-0 w-[85vw] md:w-[550px] lg:w-[600px]"
            >
              {/* Card */}
              <div
                className="relative h-full rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundColor: "#FAFAFA",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Decorative quote mark */}
                <svg
                  className="absolute -top-1 -left-1 w-24 h-24"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  style={{ opacity: 0.04 }}
                >
                  <path
                    fill="#3B82F6"
                    d="M30 60c-6.6 0-12-5.4-12-12 0-13.2 10.8-28 28-36l4 8c-10 5.6-16 13.2-17.2 20.4C35 41.2 40 46 40 52c0 4.4-4.4 8-10 8zm40 0c-6.6 0-12-5.4-12-12 0-13.2 10.8-28 28-36l4 8c-10 5.6-16 13.2-17.2 20.4C75 41.2 80 46 80 52c0 4.4-4.4 8-10 8z"
                  />
                </svg>

                {/* Gradient top edge line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, transparent, rgba(59,130,246,0.2), transparent)",
                  }}
                />

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className="text-lg md:text-xl lg:text-[22px] leading-relaxed md:leading-[1.65] font-light"
                    style={{ color: "#374151" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Client info */}
                <div
                  className="relative flex items-center gap-4 mt-10 pt-6"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {/* Avatar with initials */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      {t.name}
                    </p>
                    <p
                      className="text-xs tracking-wide"
                      style={{ color: "#9CA3AF" }}
                    >
                      {t.role}
                    </p>
                  </div>
                  {/* Card number */}
                  <span
                    className="ml-auto text-6xl font-bold font-[family-name:var(--font-syne)] select-none"
                    style={{ color: "rgba(0,0,0,0.04)" }}
                  >
                    0{i + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Scroll Hint ── */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-3 z-10">
        <div
          className="w-12 h-px"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
        />
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(0,0,0,0.3)" }}
        >
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
