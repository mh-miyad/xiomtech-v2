"use client";
import CTA from "@/components/common/CTA";
import PageHeader from "@/components/common/PageHeader";
import {
  IconBrandAws,
  IconBrandDocker,
  IconBrandMongodb,
  IconBrandReact,
  IconBrandTypescript,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconMapPin,
  IconRocket,
  IconServer,
  IconTarget,
  IconUsers,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ── */
const stats = [
  { value: "6", label: "Enterprise SaaS Products" },
  { value: "8+", label: "Years Experience" },
  { value: "13+", label: "Active Clients" },
  { value: "99.9%", label: "Target Uptime" },
  { value: "3", label: "Target Markets" },
];

const values = [
  {
    icon: IconTarget,
    title: "Quality Without Compromise",
    description:
      "Every product we ship is something we would run our own business on. If it isn't good enough for us, it isn't good enough for you.",
  },
  {
    icon: IconUsers,
    title: "Transparency in Everything",
    description:
      "Our pricing is public. Our process is clear. No hidden fees, no vague timelines, no surprises.",
  },
  {
    icon: IconMapPin,
    title: "Built for the Region",
    description:
      "We understand the markets we serve — the payment gateways, the compliance requirements, the languages, the bandwidth constraints.",
  },
  {
    icon: IconRocket,
    title: "Long-term Thinking",
    description:
      "We are not building for an exit. We are building a software company that serves real businesses for the long term.",
  },
];

const techStack = [
  { icon: IconBrandReact, name: "Next.js 14+" },
  { icon: IconBrandReact, name: "React" },
  { icon: IconBrandTypescript, name: "TypeScript" },
  { icon: IconServer, name: "Node.js / NestJS" },
  { icon: IconDatabase, name: "PostgreSQL" },
  { icon: IconBrandMongodb, name: "MongoDB" },
  { icon: IconDeviceMobile, name: "React Native" },
  { icon: IconBrandAws, name: "AWS" },
  { icon: IconBrandDocker, name: "Docker" },
  { icon: IconCode, name: "CI/CD" },
];

const timeline = [
  { year: "2024", event: "XiomTech Founded in Dhaka" },
  { year: "2025", event: "First 4 Clients Onboarded" },
  { year: "2025", event: "6 SaaS Products Launched" },
  { year: "2026", event: "GCC Market Expansion" },
];

const markets = [
  { name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
];

export default function AboutClient() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-about-stat]",
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-about-stat]", start: "top 85%" },
        },
      );

      gsap.fromTo(
        "[data-about-story] > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-about-story]", start: "top 80%" },
        },
      );

      gsap.fromTo(
        "[data-about-value]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-about-value]", start: "top 85%" },
        },
      );

      gsap.fromTo(
        "[data-about-tech]",
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-about-tech]", start: "top 85%" },
        },
      );

      gsap.fromTo(
        "[data-about-timeline]",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-timeline]",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        "[data-about-founder]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-about-founder]", start: "top 85%" },
        },
      );

      gsap.fromTo(
        "[data-about-cta] > *",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-about-cta]", start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef}>
      <PageHeader title="About Us" breadcrumbs={[{ label: "About Us" }]} />

      <div className="pb-20 px-5 md:px-8 lg:px-16 pt-14">
        {/* ── Stats Bar ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-about-stat
                className="text-center p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <p className="text-3xl md:text-4xl font-bold text-blue-600 font-[family-name:var(--font-syne)]">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-1.5 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Our Story ── */}
        <div data-about-story className=" max-w-7xl mx-auto mb-20">
          <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight mb-6">
            From a Single POS Product to{" "}
            <span className="italic font-serif">Six Enterprise Platforms</span>
          </h2>
          <div className="space-y-5 text-gray-500 text-sm md:text-[15px] leading-relaxed  max-w-6xl mx-auto">
            <p>
              XiomTech was founded by{" "}
              <strong className="text-gray-900">Mahamudul Hasan Miyad</strong>,
              a full-stack software engineer with over 4 years of experience
              building production-grade web and mobile applications. After years
              of developing enterprise systems for clients across the UAE and
              Bangladesh, Miyad saw a gap in the market — businesses needed
              integrated software solutions that actually fit their regional
              needs, not expensive global platforms that required months of
              customization.
            </p>
            <p>
              What started as a single POS product for a local retail client has
              grown into a suite of six enterprise SaaS products serving
              businesses across Bangladesh, the Gulf Cooperation Council, and
              beyond.
            </p>
            <p>
              Today, XiomTech is led by{" "}
              <strong className="text-gray-900">Mominur Rahman</strong>{" "}
              (Co-founder & CEO) and Miyad (Founder & CTO), with a growing team
              of engineers, designers, and product specialists focused on one
              goal: building reliable, affordable, and powerful software that
              works for the businesses that need it most.
            </p>
          </div>
        </div>

        {/* ── Founders ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5  max-w-6xl mx-auto">
            {[
              {
                name: "Mahamudul Hasan Miyad",
                role: "Founder & CTO",
                initials: "MH",
              },
              {
                name: "Mominur Rahman",
                role: "Co-founder & CEO",
                initials: "MR",
              },
            ].map((founder) => (
              <div
                key={founder.name}
                data-about-founder
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="size-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold font-[family-name:var(--font-syne)] text-lg shrink-0">
                  {founder.initials}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 font-[family-name:var(--font-syne)]">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-gray-500">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── What We Build ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
              Products & <span className="italic font-serif">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-3">
                SaaS Product Company
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We build and maintain six flagship SaaS platforms: XiomPOS,
                XiomHR, XiomAccounts, XiomEdu, XiomTickets, and XiomCare. Each
                product is built on modern technology, priced for the real
                world, and continuously improved based on actual customer
                feedback.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-3">
                Custom Development Partner
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We design and build custom web applications, mobile apps, SaaS
                platforms, and AI-integrated systems. Our own product suite is
                proof of what we deliver: every Xiom product was built in-house,
                using the same stack and standards we apply to client work.
              </p>
            </div>
          </div>
        </div>

        {/* ── How We Work ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
              Agile. Continuous.{" "}
              <span className="italic font-serif">Rigorous.</span>
            </h2>
          </div>
          <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-2xl">
            XiomTech follows an agile development process with continuous
            integration and deployment. Every product and every client project
            goes through the same rigorous workflow: requirements analysis,
            architecture design, iterative development, quality assurance
            testing, and post-launch support.
          </p>
        </div>

        {/* ── Technology Stack ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              Our Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
              Built With <span className="italic font-serif">Modern Tools</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                data-about-tech
                className="flex items-center gap-2.5 p-3.5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <tech.icon
                  size={20}
                  stroke={1.5}
                  className="text-blue-600 shrink-0"
                />
                <span className="text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
              Milestones
            </h2>
          </div>
          <div className="space-y-0  max-w-6xl mx-auto">
            {timeline.map((item, i) => (
              <div
                key={i}
                data-about-timeline
                className="flex items-center gap-5 py-5 border-b border-gray-100 last:border-0"
              >
                <div className="relative flex items-center justify-center">
                  <div className="size-3 rounded-full bg-blue-600" />
                  {i < timeline.length - 1 && (
                    <div className="absolute top-full w-px h-5 bg-blue-200" />
                  )}
                </div>
                <span className="text-sm font-bold text-blue-600 font-[family-name:var(--font-syne)] w-12 shrink-0">
                  {item.year}
                </span>
                <span className="text-sm text-gray-700 font-medium">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Where We Operate ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              Where We Operate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
              Global <span className="italic font-serif">Reach</span>
            </h2>
            <p className="mt-4 text-sm text-gray-500 max-w-xl leading-relaxed">
              XiomTech is based in Dhaka, Bangladesh. We serve clients across
              Bangladesh, the United Arab Emirates, Saudi Arabia, and
              internationally via remote engagement.
            </p>
          </div>
          <div className="flex items-center gap-5">
            {markets.map((market) => (
              <div
                key={market.name}
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={market.flag}
                  alt={`${market.name} flag`}
                  width={48}
                  height={36}
                  sizes="48px"
                  className="rounded"
                />
                <span className="text-sm font-medium text-gray-700">
                  {market.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Values ── */}
        <div className=" max-w-7xl mx-auto mb-20">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
              What We <span className="italic font-serif">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                data-about-value
                className="p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="size-10 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
                  <value.icon
                    size={20}
                    stroke={1.5}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <CTA />
      </div>
    </main>
  );
}
