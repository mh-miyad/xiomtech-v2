"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Service Data ── */
const services = [
  {
    id: "web",
    number: "01",
    title: "Website\nDevelopment",
    description:
      "We create stunning, high-performance websites that captivate your audience and drive results. From corporate sites to complex web applications, our solutions are built with cutting-edge technology and designed for seamless user experiences.",
    tags: ["Next.js", "React", "Tailwind CSS", "WordPress"],
    image: "/product/p-2.png",
  },
  {
    id: "digital",
    number: "02",
    title: "Digital\nMarketing",
    description:
      "Data-driven marketing strategies that amplify your brand presence and deliver measurable ROI. We combine creative storytelling with analytical precision to reach your ideal audience across all digital touchpoints.",
    tags: ["SEO", "PPC", "Social Media", "Content Strategy"],
    image: "/product/p-4.png",
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile App\nDevelopment",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences. We transform your ideas into powerful, intuitive apps that your users will love and your business will depend on.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    image: "/product/m-1.png",
  },
  {
    id: "uiux",
    number: "04",
    title: "UI/UX\nDesign",
    description:
      "Human-centered design that bridges the gap between beauty and functionality. Every pixel serves a purpose, every interaction tells a story, and every design decision is backed by research and user empathy.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    image: "/product/p-6.png",
  },
  {
    id: "ai",
    number: "05",
    title: "AI &\nAutomation",
    description:
      "Harness the power of artificial intelligence to automate workflows, extract insights, and create intelligent experiences. We build custom AI solutions that give your business a real competitive edge.",
    tags: ["Machine Learning", "NLP", "Computer Vision", "Chatbots"],
    image: "/img/Ai.webp",
  },
  {
    id: "ecommerce",
    number: "06",
    title: "E-Commerce\nSolutions",
    description:
      "End-to-end e-commerce platforms designed to maximize conversions and streamline operations. From product discovery to checkout, we craft shopping experiences that turn browsers into loyal customers.",
    tags: ["Shopify", "WooCommerce", "Headless", "Payment Integration"],
    image: "/img/ecommarce.png",
  },
];

export default function ServiceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const total = services.length;

      /* ── Header entrance ── */
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        },
      );

      /* ── Main pinned scroll-driven timeline ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * total}`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            /* Update counter number */
            const idx = Math.min(Math.floor(self.progress * total), total - 1);
            if (counterRef.current) {
              counterRef.current.textContent = services[idx].number;
            }
            /* Update progress bar */
            if (progressRef.current) {
              progressRef.current.style.height = `${self.progress * 100}%`;
            }
          },
        },
      });

      /* ── Sequence each service transition ── */
      for (let i = 1; i < total; i++) {
        const prevText = textRefs.current[i - 1];
        const nextText = textRefs.current[i];
        const nextImage = imageRefs.current[i];

        /* Fade out previous text */
        tl.to(prevText, {
          opacity: 0,
          y: -40,
          duration: 0.35,
          ease: "power2.in",
        });

        /* Clip-path reveal next image from bottom */
        tl.fromTo(
          nextImage,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 0.55,
            ease: "power3.inOut",
          },
          "<0.05",
        );

        /* Fade in next text */
        tl.fromTo(
          nextText,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          "<0.15",
        );

        /* Breathing space between transitions */
        if (i < total - 1) {
          tl.to({}, { duration: 0.25 });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white">
      {/* ── Section Header (above the pinned area) ── */}
      <div
        ref={titleRef}
        className="text-center pt-28 pb-16 md:pt-36 md:pb-20 px-4 opacity-0"
      >
        <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
          What We Do
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight font-[family-name:var(--font-syne)]">
          Our Services
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
          We craft digital experiences that drive growth — from concept to
          launch and beyond.
        </p>
      </div>

      {/* ── Pinned Container ── */}
      <div ref={sectionRef} className="relative bg-white">
        <div className="h-screen flex flex-col lg:flex-row">
          {/* ── Left Column: Text ── */}
          <div className="relative w-full lg:w-[45%] h-[40vh] lg:h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20">
            {/* Stacked text panels */}
            <div className="relative min-h-[260px] md:min-h-[300px]">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {/* Large background number */}
                  <span
                    className="absolute -top-6 -left-3 text-[140px] md:text-[180px] font-bold text-gray-100 leading-none select-none pointer-events-none font-[family-name:var(--font-syne)]"
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>

                  <h3 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-5 font-[family-name:var(--font-syne)] whitespace-pre-line">
                    {service.title}
                  </h3>

                  <p className="relative text-gray-500 text-sm md:text-[15px] leading-relaxed md:leading-7 max-w-md mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="relative flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase border border-gray-200 text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 xl:left-20 flex items-center gap-4">
              <span
                ref={counterRef}
                className="text-5xl md:text-6xl font-bold text-gray-200 font-[family-name:var(--font-syne)] tabular-nums"
              >
                01
              </span>
              <div className="w-[2px] h-14 bg-gray-100 relative overflow-hidden rounded-full">
                <div
                  ref={progressRef}
                  className="absolute top-0 left-0 w-full bg-blue-600 rounded-full transition-[height] duration-100"
                  style={{ height: "0%" }}
                />
              </div>
              <span className="text-xs text-gray-400 tracking-wider">
                / 0{services.length}
              </span>
            </div>
          </div>

          {/* ── Right Column: Images (centered) ── */}
          <div className="relative w-full lg:w-[55%] h-[60vh] lg:h-full flex items-center justify-center p-6 md:p-10 lg:p-16">
            <div className="relative w-full max-w-[600px] aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  className="absolute inset-0"
                  style={{
                    zIndex: i + 1,
                    clipPath: i === 0 ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title.replace("\n", " ")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
