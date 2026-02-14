"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Technology Data (all colorful logos) ── */
// const aiTools = [
//   {
//     name: "OpenAI",
//     logo: "https://www.royex.ae/media/kilptnii/chatgpt.png",
//   },
//   {
//     name: "Claude",
//     logo: "https://www.royex.ae/media/d3vlbaiv/claude.png",
//   },
//   {
//     name: "Gemini",
//     logo: "https://www.royex.ae/media/l4dhptri/gimini.png",
//   },

//   {
//     name: "DeepSeek",
//     logo: "https://www.royex.ae/media/ldjjg2ks/deepseek.png",
//   },
//   {
//     name: "LLAMA 4",
//     logo: "https://www.royex.ae/media/3izgaxsg/llama4.png",
//   },
// ];

const frontendTech = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Svelte",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
];

const backendTech = [
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
];

const devopsTech = [
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  },
  {
    name: "Nginx",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "GitHub Actions",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "Terraform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  },
];

const categories = [
  // {
  //   id: "ai",
  //   label: "AI Tools We Use",
  //   subtitle:
  //     "Powerful AI models and tools we leverage to deliver intelligent, scalable solutions.",
  //   items: aiTools,
  // },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    subtitle:
      "Modern frameworks powering our blazing-fast, pixel-perfect user interfaces.",
    items: frontendTech,
  },
  {
    id: "backend",
    label: "Backend & Data",
    subtitle:
      "Robust server-side technologies and databases that form the backbone of every system.",
    items: backendTech,
  },
  {
    id: "devops",
    label: "DevOps & Design",
    subtitle:
      "Infrastructure, collaboration, and design tools that keep our delivery world-class.",
    items: devopsTech,
  },
];

/* ── Tech Card ── */
function TechCard({
  name,
  logo,
  index,
}: {
  name: string;
  logo: string;
  index: number;
}) {
  return (
    <figure
      data-tech-card
      className="flex flex-col items-center justify-center gap-3 p-6 md:p-8 bg-white border border-gray-100 cursor-default"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-contain"
          unoptimized
        />
      </div>
    </figure>
  );
}

/* ── Main Section ── */
export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Section header */
      gsap.fromTo(
        "[data-techstack-header] > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-techstack-header]",
            start: "top 85%",
          },
        },
      );

      /* Each category block */
      const blocks = sectionRef.current?.querySelectorAll("[data-tech-block]");
      blocks?.forEach((block) => {
        const label = block.querySelector("[data-tech-label]");
        if (label) {
          gsap.fromTo(
            label,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: block, start: "top 82%" },
            },
          );
        }

        const cards = block.querySelectorAll("[data-tech-card]");
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 80%" },
          },
        );
      });

      /* Connector lines */
      const lines = sectionRef.current?.querySelectorAll("[data-connector]");
      lines?.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: line, start: "top 85%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 lg:px-16 py-20 md:py-28 bg-gray-50/60 overflow-hidden"
    >
      {/* Background blur orbs */}
      <div
        className="absolute top-20 -left-32 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-20 -right-32 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Section Header */}
      <div
        data-techstack-header
        className="text-center mb-16 md:mb-20 relative z-10"
      >
        <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
          Our Technology
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
          Built With the{" "}
          <span className="italic font-serif">Best in Class</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
          A comprehensive look at the technologies, AI models, and tools we use
          to power world-class mobile apps, web platforms, and enterprise
          systems.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto relative z-10">
        {categories.map((cat, catIndex) => (
          <div key={cat.id}>
            {catIndex > 0 && (
              <div className="flex justify-center my-6 md:my-8">
                <div
                  data-connector
                  className="w-px h-10 md:h-14 bg-linear-to-b from-blue-300 to-blue-100 origin-top"
                />
              </div>
            )}

            <div data-tech-block>
              <div data-tech-label className="mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 font-[family-name:var(--font-syne)]">
                  {cat.label}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mt-1 max-w-lg">
                  {cat.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                {cat.items.map((item, i) => (
                  <TechCard
                    key={item.name}
                    name={item.name}
                    logo={item.logo}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
