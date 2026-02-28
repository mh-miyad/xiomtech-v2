"use client";
import {
  IconApi,
  IconBrain,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconBuildingBank,
  IconBuildingEstate,
  IconCloud,
  IconCode,
  IconDeviceMobile,
  IconDeviceTv,
  IconGitBranch,
  IconHeartbeat,
  IconMail,
  IconPalette,
  IconPhone,
  IconSchool,
  IconServer,
  IconShoppingCart,
  IconTruck,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Types ── */
type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number; stroke?: number }
>;

type MenuItem = {
  name: string;
  icon: IconComponent;
};

type ProductItem = {
  name: string;
  icon: string;
};

/* ── Data (matching FullPageMenu exactly) ── */

const services: MenuItem[] = [
  { name: "Custom Software Development", icon: IconCode },
  { name: "Web Application Development", icon: IconWorld },
  { name: "Mobile App Development", icon: IconDeviceMobile },
  { name: "UI/UX Design & Branding", icon: IconPalette },
  { name: "SaaS Platform Development", icon: IconCloud },
  { name: "AI & Machine Learning", icon: IconBrain },
  { name: "Cloud Infrastructure", icon: IconServer },
  { name: "DevOps & CI/CD", icon: IconGitBranch },
  { name: "API Development & Integration", icon: IconApi },
  { name: "E-Commerce Solutions", icon: IconShoppingCart },
];

const products: ProductItem[] = [
  { name: "XiomPOS", icon: "/xiom/xiompos.png" },
  { name: "XiomAccounts", icon: "/xiom/xiomaccount.png" },
  { name: "XiomHR", icon: "/xiom/hrm.png" },
  { name: "XiomEdu", icon: "/xiom/XiomEduFlow.png" },
  { name: "XiomTickets", icon: "/xiom/xiomTickets.png" },
  { name: "XiomCare", icon: "/xiom/xiomCare.png" },
];

const industries: MenuItem[] = [
  { name: "Healthcare & MedTech", icon: IconHeartbeat },
  { name: "Finance & Banking", icon: IconBuildingBank },
  { name: "E-Commerce & Retail", icon: IconShoppingCart },
  { name: "Education & EdTech", icon: IconSchool },
  { name: "Real Estate & PropTech", icon: IconBuildingEstate },
  { name: "Logistics & Supply Chain", icon: IconTruck },
  { name: "Government & Public Sector", icon: IconUsersGroup },
  { name: "Media & Entertainment", icon: IconDeviceTv },
];

const explore = [
  { name: "Blog & Insights", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const countries = [
  {
    name: "Bangladesh",
    flag: "https://flagcdn.com/w40/bd.png",
    address: "Dhaka, Bangladesh",
  },
  {
    name: "UAE",
    flag: "https://flagcdn.com/w40/ae.png",
    address: "Dubai, UAE",
  },
  {
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/w40/sa.png",
    address: "Riyadh, KSA",
  },
  {
    name: "Qatar",
    flag: "https://flagcdn.com/w40/qa.png",
    address: "Doha, Qatar",
  },
  {
    name: "Indonesia",
    flag: "https://flagcdn.com/w40/id.png",
    address: "Jakarta, Indonesia",
  },
  {
    name: "Nigeria",
    flag: "https://flagcdn.com/w40/ng.png",
    address: "Lagos, Nigeria",
  },
];

const partners = [
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    label: "Cloud Partner",
  },
  {
    name: "Google Cloud",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    label: "Cloud Partner",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    label: "Design Partner",
  },
  {
    name: "Vercel",
    src: "/vercel.svg",
    label: "Hosting Partner",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    label: "Dev Partner",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    label: "Infra Partner",
  },
];

const socials = [
  {
    icon: IconBrandFacebook,
    href: "https://www.facebook.com/xiomtech",
    label: "Facebook",
  },
  {
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/xiomtech",
    label: "Instagram",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/company/xiomtech",
    label: "LinkedIn",
  },
  { icon: IconBrandX, href: "https://x.com/xiomtech", label: "X" },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-footer-globe]",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-footer-globe]",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        "[data-footer-country]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-footer-country]",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        "[data-footer-col]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-footer-col]",
            start: "top 90%",
          },
        },
      );

      gsap.fromTo(
        "[data-footer-partner]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-footer-partner]",
            start: "top 92%",
          },
        },
      );

      gsap.fromTo(
        "[data-footer-bigtext]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "bottom 120%",
          },
        },
      );
    }, footerRef);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      data-dark-section
      className="relative mt-20 overflow-hidden"
    >
      {/* ─── Globe Video + Country Cards ─── */}
      <div
        data-footer-globe
        className="relative w-full h-[420px] md:h-[500px] lg:h-[580px] bg-black overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source
            src="https://www.xiomtech.net/footer_globe.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-transparent h-32" />

        <div className="absolute inset-x-0 bottom-12 md:bottom-16 flex justify-center px-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl w-full">
            {countries.map((c) => (
              <div
                key={c.name}
                data-footer-country
                className="bg-black/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-center"
              >
                <Image
                  src={c.flag}
                  alt={`${c.name} flag`}
                  width={52}
                  height={50}
                  sizes="52px"
                  loading="lazy"
                  className="mx-auto mb-2"
                />
                <p className="text-white font-bold text-sm font-(family-name:--font-syne)">
                  {c.name}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{c.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main Footer Content ─── */}
      <div className="bg-black px-5 md:px-10 lg:px-16 pt-16 pb-10">
        {/* Top: Logo + Description + Contact + Socials */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12 pb-8 border-b border-white/10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.webp"
                alt="XiomTech Logo"
                width={40}
                height={40}
                sizes="36px"
                loading="lazy"
                className="size-9"
              />
              <span className="text-white text-2xl font-bold font-(family-name:--font-syne)">
                XiomTech
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Building the future of business software. From XiomPOS to
              XiomCare, we create enterprise-grade solutions that power
              companies across Bangladesh, the GCC, and beyond.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
              <Link
                href="mailto:info.xiomtech@gmail.com"
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                <IconMail size={16} stroke={1.5} />
                <span>info.xiomtech@gmail.com</span>
              </Link>
              <Link
                href="https://wa.me/8801822830775"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-green-400 transition-colors duration-200"
              >
                <IconBrandWhatsapp size={16} stroke={1.5} />
                <span>+880 1822-830775</span>
              </Link>
              <Link
                href="tel:+8801822830775"
                className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                <IconPhone size={16} stroke={1.5} />
                <span>+880 1822-830775</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-colors duration-200"
                  aria-label={s.label}
                >
                  <s.icon size={17} stroke={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 4-Column Menu Grid (same as FullPageMenu) ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-5 lg:gap-6">
          {/* Services */}
          <div data-footer-col>
            <h4 className="font-(family-name:--font-syne) font-bold uppercase tracking-[0.15em] text-white text-sm mb-5 pb-2 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 leading-snug group"
                  >
                    <item.icon
                      size={15}
                      className="shrink-0 text-white/30 group-hover:text-blue-400 transition-colors duration-200"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div data-footer-col>
            <h4 className="font-(family-name:--font-syne) font-bold uppercase tracking-[0.15em] text-white text-sm mb-5 pb-2 border-b border-white/10">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200 leading-snug group"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="size-5 rounded object-contain shrink-0"
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div data-footer-col>
            <h4 className="font-(family-name:--font-syne) font-bold uppercase tracking-[0.15em] text-white text-sm mb-5 pb-2 border-b border-white/10">
              Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 leading-snug group"
                  >
                    <item.icon
                      size={15}
                      className="shrink-0 text-white/30 group-hover:text-blue-400 transition-colors duration-200"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div data-footer-col>
            <h4 className="font-(family-name:--font-syne) font-bold uppercase tracking-[0.15em] text-white text-sm mb-5 pb-2 border-b border-white/10">
              Explore
            </h4>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 leading-snug"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ─── Partner Badges Strip ─── */}
      <div className="bg-black border-t border-white/10">
        <div className="px-5 md:px-10 lg:px-16 py-10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((p) => (
              <div
                key={p.name}
                data-footer-partner
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={p.src}
                  alt={`${p.name} - ${p.label}`}
                  width={80}
                  height={40}
                  sizes="80px"
                  loading="lazy"
                  className="h-7 md:h-8 w-auto object-contain invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                  unoptimized
                />
                <span className="text-[10px] text-white/40 font-medium uppercase tracking-wider">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Copyright Bar ─── */}
      <div className="bg-black border-t border-white/10">
        <div className="px-5 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/terms-of-service"
            className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200 font-medium"
          >
            Terms & Conditions
          </Link>
          <p className="text-white/40 text-xs font-medium text-center">
            &copy; {new Date().getFullYear()} XiomTech. All Rights Reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200 font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* ─── Big Brand Text ─── */}
      <div className="bg-black overflow-hidden pb-6">
        <div
          data-footer-bigtext
          className="relative flex items-center justify-center h-[120px] md:h-[180px] lg:h-[240px]"
        >
          <span className="text-[80px] md:text-[70px] lg:text-[100px] xl:text-[140px] 2xl:text-[200px] font-black font-(family-name:--font-syne) uppercase leading-none select-none text-white">
            XiomTech
          </span>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
