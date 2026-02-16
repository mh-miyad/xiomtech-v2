"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ── Service Data ── */
const services = [
  {
    id: "web",
    number: "01",
    title: "Website Design and\nDevelopment",
    description:
      "We create stunning, high-performance websites that captivate your audience and drive results. From corporate sites to complex web applications, our solutions are built with cutting-edge technology.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/product/p-2.png",
    /* React atom — cyan */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
        <ellipse
          cx="20"
          cy="20"
          rx="16"
          ry="6"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="16"
          ry="6"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(60 20 20)"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="16"
          ry="6"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(120 20 20)"
        />
      </svg>
    ),
  },
  {
    id: "ai",
    number: "02",
    title: "AI Transformation\nService",
    description:
      "Harness the power of artificial intelligence to automate workflows, extract insights, and create intelligent experiences. We build custom AI solutions that give your business a competitive edge.",
    tags: ["Machine Learning", "NLP", "Chatbots"],
    image: "/img/Ai.webp",
    /* AI sparkle brain — purple/cyan gradient */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <defs>
          <linearGradient id="ai-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path
          d="M20 4c-1.5 3-5 4-5 8a5 5 0 005 5 5 5 0 005-5c0-4-3.5-5-5-8z"
          fill="url(#ai-grad)"
        />
        <path
          d="M20 4c1.5 3 5 4 5 8a5 5 0 01-5 5"
          fill="url(#ai-grad)"
          opacity="0.6"
        />
        <circle
          cx="20"
          cy="25"
          r="8"
          stroke="url(#ai-grad)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M16 24h8M16 27h8M18 21h4"
          stroke="url(#ai-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="10" cy="8" r="1.5" fill="#8B5CF6" />
        <path
          d="M10 5v6M7 8h6"
          stroke="#8B5CF6"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="32" cy="12" r="1" fill="#06B6D4" />
        <path
          d="M32 10v4M30 12h4"
          stroke="#06B6D4"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "ecommerce",
    number: "03",
    title: "Ecommerce Website\nDesign",
    description:
      "End-to-end e-commerce platforms designed to maximize conversions and streamline operations. From product discovery to checkout, we craft shopping experiences that convert.",
    tags: ["Shopify", "WooCommerce", "Headless"],
    image: "/img/ecommarce.png",
    /* Shopping bag — Shopify green */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <defs>
          <linearGradient id="shop-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#96BF48" />
            <stop offset="100%" stopColor="#5E8E3E" />
          </linearGradient>
        </defs>
        <path d="M10 12h20l-2 18H12L10 12z" fill="url(#shop-grad)" />
        <path
          d="M15 12V9a5 5 0 0110 0v3"
          stroke="#5E8E3E"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M18 20v4M22 20v4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "mobile",
    number: "04",
    title: "Mobile App\nDevelopment",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences. We transform your ideas into powerful, intuitive apps your users will love.",
    tags: ["React Native", "Flutter", "iOS"],
    image: "/product/m-1.png",
    /* Phone — blue gradient */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <defs>
          <linearGradient id="phone-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#42A5F5" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>
        </defs>
        <rect
          x="11"
          y="4"
          width="18"
          height="32"
          rx="4"
          fill="url(#phone-grad)"
        />
        <rect x="13" y="8" width="14" height="20" rx="1" fill="white" />
        <circle cx="20" cy="33" r="1.5" fill="white" opacity="0.8" />
        <rect
          x="17"
          y="5.5"
          width="6"
          height="1.5"
          rx="0.75"
          fill="white"
          opacity="0.5"
        />
        <rect
          x="16"
          y="12"
          width="8"
          height="2"
          rx="1"
          fill="#42A5F5"
          opacity="0.4"
        />
        <rect
          x="16"
          y="16"
          width="5"
          height="2"
          rx="1"
          fill="#0D47A1"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    id: "digital",
    number: "05",
    title: "Digital Marketing\n& SEO",
    description:
      "Data-driven marketing strategies that amplify your brand presence and deliver measurable ROI. We combine creative storytelling with analytical precision across all digital touchpoints.",
    tags: ["SEO", "PPC", "Content Strategy"],
    image: "/img/seo.png",
    /* Growth chart — Google multi-color */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect x="5" y="24" width="6" height="12" rx="1" fill="#4285F4" />
        <rect x="13" y="18" width="6" height="18" rx="1" fill="#EA4335" />
        <rect x="21" y="12" width="6" height="24" rx="1" fill="#FBBC04" />
        <rect x="29" y="6" width="6" height="30" rx="1" fill="#34A853" />
        <path
          d="M8 22L16 16 24 10 32 4"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="32" cy="4" r="2" fill="#34A853" />
      </svg>
    ),
  },
  {
    id: "uiux",
    number: "06",
    title: "UI/UX\nDesign",
    description:
      "Human-centered design that bridges the gap between beauty and functionality. Every pixel serves a purpose, every interaction tells a story, backed by research and user empathy.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    image: "/product/p-6.png",
    /* Figma logo — multi-color */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect x="10" y="4" width="9" height="10" rx="4.5" fill="#F24E1E" />
        <rect x="21" y="4" width="9" height="10" rx="4.5" fill="#FF7262" />
        <rect x="10" y="15" width="9" height="10" rx="4.5" fill="#A259FF" />
        <circle cx="25.5" cy="20" r="4.5" fill="#1ABCFE" />
        <rect x="10" y="26" width="9" height="10" rx="4.5" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    id: "cloud",
    number: "07",
    title: "Cloud Hosting &\nMaintenance",
    description:
      "Secure, scalable, and expertly managed cloud infrastructure to power your business — backed by 24/7 monitoring and proactive maintenance to keep you running smoothly.",
    tags: ["AWS", "DevOps", "CI/CD"],
    image: "/product/p-3.png",
    /* Cloud upload — AWS orange */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <defs>
          <linearGradient id="cloud-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF9900" />
            <stop offset="100%" stopColor="#FFB84D" />
          </linearGradient>
        </defs>
        <path
          d="M30 22a6 6 0 00-5.7-6 8.5 8.5 0 00-16.3 3A6 6 0 008 31h22a6 6 0 000-12v3z"
          fill="url(#cloud-grad)"
        />
        <path
          d="M16 26l4-5 4 5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20 21v10"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "geo",
    number: "08",
    title: "Generative Engine\nOptimization",
    description:
      "Stay ahead of the AI search revolution. We optimize your digital presence for generative engines, ensuring your brand surfaces in AI-powered search results and recommendations.",
    tags: ["GEO", "AI Search", "Content"],
    image: "/product/p-5.png",
    /* Globe — Google multi-color */
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle
          cx="20"
          cy="20"
          r="14"
          fill="none"
          stroke="#4285F4"
          strokeWidth="1.5"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="8"
          ry="14"
          fill="none"
          stroke="#EA4335"
          strokeWidth="1.2"
        />
        <path d="M6 20h28" stroke="#FBBC04" strokeWidth="1.2" />
        <path d="M8 13h24" stroke="#34A853" strokeWidth="1" opacity="0.7" />
        <path d="M8 27h24" stroke="#34A853" strokeWidth="1" opacity="0.7" />
        <circle cx="20" cy="20" r="3" fill="#4285F4" opacity="0.3" />
        <circle cx="28" cy="10" r="1.5" fill="#EA4335" />
        <path
          d="M28 8v4M26 10h4"
          stroke="#EA4335"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

/* ── Helper Hook: Intersection Observer ── */
function useOnScreen(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return [ref, isVisible] as const;
}

export default function ServiceSection() {
  const [headerRef, isHeaderVisible] = useOnScreen({ threshold: 0.1 });
  const [gridRef, isGridVisible] = useOnScreen({ threshold: 0.05 });

  return (
    <section className="relative w-full bg-black py-24 md:py-32">
      {/* ── Section Header ── */}
      <div
        ref={headerRef}
        className={`text-center mb-16 md:mb-20 px-4 transition-all duration-1000 ease-out transform ${
          isHeaderVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <span className="inline-block text-[11px] font-semibold text-blue-400 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
          What We Do
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-[family-name:var(--font-syne)]">
          Our Services
        </h2>
        <p className="mt-4 text-sm md:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
          We craft digital experiences that drive growth — from concept to
          launch and beyond.
        </p>
      </div>

      {/* ── Service Cards Grid ── */}
      <div
        ref={gridRef}
        className=" max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`group relative h-[380px] w-full transition-all duration-700 ease-out transform ${
              isGridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* ── Layer A: Background Image (revealed on hover) ── */}
            <div className="absolute inset-0 z-0 bg-neutral-900 overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.title.replace("\n", " ")}
                fill
                className="object-cover transition-all duration-700 ease-in-out opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* ── Layer B: White Card (default state, hidden on hover) ── */}
            <div className="absolute inset-0 z-10 bg-white rounded-lg p-8 flex flex-col justify-between transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-3 group-hover:pointer-events-none">
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 whitespace-pre-line font-[family-name:var(--font-syne)]">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-300 font-medium tracking-wider">
                  {service.number}
                </span>
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors"
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
              </div>
            </div>

            {/* ── Layer C: Hover Overlay Content ── */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 rounded-lg">
              <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                  {service.number} / Service
                </span>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md whitespace-pre-line font-[family-name:var(--font-syne)]">
                  {service.title}
                </h3>
                <div className="w-full h-[1px] bg-white/20 mb-3" />
                <p className="text-white/85 text-xs leading-relaxed mb-4 font-light">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-wider text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
