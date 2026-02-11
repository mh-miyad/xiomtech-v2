"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ── */
const expertiseItems = [
  {
    id: "ai",
    title: "AI Transformation",
    image: "/img/Ai.webp",
    imageAlt: "AI Transformation services by XiomTech",
    caption:
      "We embed AI intelligence across your entire business — from automation to analytics.",
    description:
      "AI Transformation is the key to staying ahead — streamlining operations, unlocking insights, and driving intelligent growth. At XiomTech, we don't just implement AI — we embed intelligence into your entire business. From boosting lead generation and accelerating sales to enhancing customer support and operational efficiency, we help you build a truly AI-First organization ready to scale. Our AI expertise spans machine learning models, natural language processing, computer vision, and predictive analytics — enabling smarter decisions, automated workflows, and personalized customer experiences that set you apart from the competition.",
    highlights: [
      "streamlining operations",
      "unlocking insights",
      "boosting lead generation",
      "accelerating sales",
      "AI-First",
      "machine learning models",
      "predictive analytics",
      "personalized customer experiences",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    image: "/img/mobile-app.webp",
    imageAlt: "Mobile App Development by XiomTech",
    caption:
      "Building feature-rich, intuitive mobile apps that delight users and drive engagement.",
    description:
      "XiomTech is your trusted partner for crafting digital experiences that inspire and perform. Need a powerful mobile app? We turn your idea into a feature-rich, intuitive app that delights users — whether you're a startup founder looking for an MVP or an enterprise optimizing your internal processes. We don't just build apps; we create digital experiences that elevate your brand and engage your customers. Our mobile development team works with React Native, Flutter, and native iOS/Android to deliver cross-platform solutions with pixel-perfect UI, smooth animations, push notifications, offline support, and seamless backend integration — all optimized for performance and scalability from day one.",
    highlights: [
      "trusted partner",
      "feature-rich",
      "intuitive app",
      "elevate your brand",
      "engage your customers",
      "cross-platform solutions",
      "pixel-perfect UI",
      "performance and scalability",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    image: "/img/ecommarce.png",
    imageAlt: "E-Commerce Development by XiomTech",
    caption:
      "We develop e-commerce that is beautiful, responsive, and built to boost your online sales.",
    description:
      "At XiomTech, we design e-commerce sites that are not only visually stunning but also responsive, fast, and easy to manage. From custom platforms to headless commerce architectures, we build solutions that convert visitors into buyers. Our e-commerce solutions have delivered measurable success — increased traffic, higher conversion rates, and robust security. We integrate payment gateways, inventory management, real-time analytics dashboards, and AI-powered product recommendations to give your store every competitive edge. Whether you need a single storefront or a multi-vendor marketplace, we architect systems built for growth and built to last.",
    highlights: [
      "responsive",
      "fast",
      "easy to manage",
      "convert visitors into buyers",
      "increased traffic",
      "higher conversion rates",
      "robust security",
      "payment gateways",
      "AI-powered product recommendations",
      "built for growth",
    ],
  },
];

/* ── Helper: bold the highlighted phrases ── */
function renderDescription(text: string, highlights: string[]) {
  const parts: (string | { bold: string })[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let earliestHighlight = "";

    for (const h of highlights) {
      const idx = remaining.toLowerCase().indexOf(h.toLowerCase());
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        earliestHighlight = h;
      }
    }

    if (earliestHighlight) {
      if (earliestIndex > 0) {
        parts.push(remaining.slice(0, earliestIndex));
      }
      parts.push({
        bold: remaining.slice(
          earliestIndex,
          earliestIndex + earliestHighlight.length,
        ),
      });
      remaining = remaining.slice(earliestIndex + earliestHighlight.length);
    } else {
      parts.push(remaining);
      remaining = "";
    }
  }

  return parts.map((part) => {
    const content = typeof part === "string" ? part : part.bold;
    const key = `${typeof part === "string" ? "t" : "b"}-${content.slice(0, 32).replace(/\s+/g, "_")}`;
    return typeof part === "string" ? (
      <span key={key}>{part}</span>
    ) : (
      <strong key={key} className="font-semibold text-gray-900">
        {part.bold}
      </strong>
    );
  });
}

/* ── Main Section ── */
export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header reveal */
      gsap.fromTo(
        "[data-expertise-header] > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-expertise-header]",
            start: "top 82%",
          },
        },
      );

      /* Each row: image + text reveal */
      itemRefs.current.forEach((row) => {
        if (!row) return;

        const img = row.querySelector("[data-expertise-img]");
        const text = row.querySelector("[data-expertise-text]");
        const blurOrb = row.querySelector("[data-blur-orb]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });

        if (blurOrb) {
          tl.fromTo(
            blurOrb,
            { scale: 0.3, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
            0,
          );
        }

        if (img) {
          const isEven = row.getAttribute("data-row-index") === "1";
          tl.fromTo(
            img,
            { x: isEven ? 80 : -80, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            0.1,
          );
        }

        if (text) {
          const children = text.querySelectorAll("[data-reveal]");
          tl.fromTo(
            children,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            },
            0.3,
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Image hover parallax */
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget.querySelector("img");
    if (!target) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    gsap.to(target, {
      x,
      y,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget.querySelector("img");
    if (!target) return;
    gsap.to(target, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Section Header */}
      <div data-expertise-header className="text-center mb-16 md:mb-24">
        <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
          What Sets Us Apart
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
          Why Us? Because Your{" "}
          <span className="italic font-serif">Growth Is Our Mission</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          See the difference thoughtful design makes. Our works highlight the
          dedication we bring to every client partnership.
        </p>
      </div>

      {/* Expertise Items */}
      <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-28 lg:gap-36">
        {expertiseItems.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-row-index={index}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                isEven ? "lg:direction-rtl" : ""
              }`}
              style={isEven ? { direction: "rtl" } : undefined}
            >
              {/* Blue Blur Orb */}
              <div
                data-blur-orb
                className="absolute pointer-events-none opacity-0"
                style={{
                  width: "clamp(300px, 40vw, 500px)",
                  height: "clamp(300px, 40vw, 500px)",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.04) 50%, transparent 70%)",
                  top: "50%",
                  left: isEven ? "auto" : "-10%",
                  right: isEven ? "-10%" : "auto",
                  transform: "translateY(-50%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* Image Column */}
              <figure
                data-expertise-img
                className="relative opacity-0 group"
                style={isEven ? { direction: "ltr" } : undefined}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <div className="absolute -inset-4 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={600}
                    className="relative w-full h-auto object-cover transition-transform duration-500 will-change-transform"
                  />
                </div>
                <figcaption className="mt-4 text-xs md:text-sm text-gray-400 italic leading-relaxed">
                  {item.caption}
                </figcaption>
              </figure>

              {/* Text Column */}
              <div
                data-expertise-text
                className="relative z-10"
                style={isEven ? { direction: "ltr" } : undefined}
              >
                <span
                  data-reveal
                  className="absolute -top-8 md:-top-12 -left-2 md:-left-4 text-[120px] md:text-[180px] font-bold text-gray-100 leading-none select-none pointer-events-none font-[family-name:var(--font-syne)]"
                  aria-hidden="true"
                >
                  {item.title.charAt(0)}
                </span>

                <h3
                  data-reveal
                  className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-5"
                >
                  {item.title}
                </h3>

                <div data-reveal>
                  <p className="relative text-sm md:text-[15px] text-gray-500 leading-relaxed md:leading-7">
                    {renderDescription(item.description, item.highlights)}
                  </p>
                </div>

                <div
                  data-reveal
                  className="mt-6 w-12 h-[3px] rounded-full bg-linear-to-r from-blue-600 to-blue-400"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
