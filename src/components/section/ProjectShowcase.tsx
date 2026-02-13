"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Project Data ── */
const projects = [
  {
    id: "luxemarket",
    number: "01",
    category: "E-Commerce",
    title: "Luxe Market",
    description:
      "A premium e-commerce platform handling 10k+ daily transactions with a conversion rate 40% above industry average. Built with headless architecture for blazing performance.",
    tech: ["Next.js", "Stripe", "Headless CMS"],
    image: "/img/ecommarce.png",
    color: "#3B82F6",
  },
  {
    id: "nexgenfinance",
    number: "02",
    category: "FinTech",
    title: "NexGen Finance",
    description:
      "AI-powered financial dashboard that processes real-time market data. Custom ML models predict trends with 94% accuracy, serving 50k+ active traders daily.",
    tech: ["React", "Python", "TensorFlow"],
    image: "/img/Ai.webp",
    color: "#8B5CF6",
  },
  {
    id: "healthbridge",
    number: "03",
    category: "HealthTech",
    title: "HealthBridge",
    description:
      "A telehealth platform connecting 200+ doctors with patients across 3 countries. Features real-time video, AI triage, and seamless EHR integration.",
    tech: ["React Native", "WebRTC", "Node.js"],
    image: "/img/mobile-app.webp",
    color: "#06B6D4",
  },
  {
    id: "cloudscale",
    number: "04",
    category: "SaaS Platform",
    title: "CloudScale",
    description:
      "Enterprise SaaS platform managing infrastructure for 300+ companies. Auto-scaling, real-time monitoring, and one-click deployments reduced DevOps overhead by 70%.",
    tech: ["TypeScript", "AWS", "Kubernetes"],
    image: "/img/seo.png",
    color: "#F59E0B",
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const total = projects.length;

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

      /* ── Initial stagger-in for first panel's info ── */
      const firstInfo = infoRefs.current[0];
      if (firstInfo) {
        gsap.fromTo(
          firstInfo.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
          }
        );
      }

      /* ── Pinned scroll-driven timeline ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (total + 0.5)}`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * total),
              total - 1
            );
            /* Update counter */
            if (counterRef.current) {
              counterRef.current.textContent = projects[idx].number;
            }
            /* Update progress line */
            if (lineRef.current) {
              lineRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      /* ── Sequence transitions ── */
      for (let i = 1; i < total; i++) {
        const prevPanel = panelRefs.current[i - 1];
        const nextPanel = panelRefs.current[i];
        const nextInfo = infoRefs.current[i];
        const nextImage = imageRefs.current[i];

        /* Scale down & fade current panel */
        tl.to(prevPanel, {
          scale: 0.88,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        });

        /* Circle clip-path reveal on next panel */
        tl.fromTo(
          nextPanel,
          { clipPath: "circle(0% at 50% 50%)" },
          {
            clipPath: "circle(100% at 50% 50%)",
            duration: 0.6,
            ease: "power3.inOut",
          },
          "<0.1"
        );

        /* Parallax zoom on the image */
        if (nextImage) {
          tl.fromTo(
            nextImage,
            { scale: 1.3 },
            { scale: 1, duration: 0.6, ease: "power3.out" },
            "<"
          );
        }

        /* Stagger in text elements */
        if (nextInfo) {
          tl.fromTo(
            nextInfo.children,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.06,
              duration: 0.3,
              ease: "power2.out",
            },
            "<0.25"
          );
        }

        /* Breathing space */
        if (i < total - 1) {
          tl.to({}, { duration: 0.25 });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white">
      {/* ── Section Header (above pinned area) ── */}
      <div
        ref={headingRef}
        className="text-center pt-28 pb-16 md:pt-36 md:pb-20 px-4 opacity-0"
      >
        <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
          Featured Work
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight font-[family-name:var(--font-syne)] leading-[1.05]">
          Projects that
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            speak volumes.
          </span>
        </h2>
      </div>

      {/* ── Pinned Container ── */}
      <div ref={sectionRef} className="relative bg-white">
        <div className="relative h-screen overflow-hidden">
          {/* ── Stacked Project Panels ── */}
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="absolute inset-0"
              style={{
                zIndex: i + 1,
                clipPath: i === 0 ? "circle(100% at 50% 50%)" : undefined,
              }}
            >
              {/* Full-bleed image background */}
              <div
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="absolute inset-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
              </div>

              {/* ── Project Info Overlay ── */}
              <div
                ref={(el) => {
                  infoRefs.current[i] = el;
                }}
                className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-24 md:pb-32 max-w-3xl"
              >
                {/* Category tag */}
                <div>
                  <span
                    className="inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase rounded-full border mb-6"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}40`,
                      backgroundColor: `${project.color}15`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-[family-name:var(--font-syne)] leading-[1.05] mb-4">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack tags */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View project CTA */}
                <div>
                  <button className="group/btn mt-8 flex items-center gap-3 text-white text-xs font-semibold tracking-[0.2em] uppercase">
                    <span className="relative">
                      View Case Study
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover/btn:w-full transition-all duration-300" />
                    </span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* ── Floating Counter (top-right) ── */}
          <div className="absolute top-8 right-8 md:top-12 md:right-16 z-50 flex items-center gap-3">
            <span
              ref={counterRef}
              className="text-5xl md:text-7xl font-bold text-white/10 font-[family-name:var(--font-syne)] tabular-nums"
            >
              01
            </span>
            <div className="flex flex-col items-end gap-1">
              <span className="text-white/30 text-[10px] tracking-wider">
                / 0{projects.length}
              </span>
            </div>
          </div>

          {/* ── Bottom Progress Line ── */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-50">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
