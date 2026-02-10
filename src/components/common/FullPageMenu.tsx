"use client";
import {
  IconArrowRight,
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import gsap from "gsap";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import Logo from "./Logo";

const mainNav = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact Us", href: "#" },
];

const services = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "UI/UX Design & Branding",
  "SaaS Platform Development",
  "AI & Machine Learning",
  "Cloud Infrastructure",
  "DevOps & CI/CD",
  "API Development & Integration",
  "E-Commerce Solutions",
];

const products = [
  "XiomOS",
  "XiomCloud",
  "XiomAI",
  "XiomCRM",
  "XiomAnalytics",
  "XiomPay",
  "XiomHR",
  "XiomEdu",
];

const industries = [
  "Healthcare & MedTech",
  "Finance & Banking",
  "E-Commerce & Retail",
  "Education & EdTech",
  "Real Estate & PropTech",
  "Logistics & Supply Chain",
  "Government & Public Sector",
  "Media & Entertainment",
];

const explore = [
  "Case Studies",
  "Blog & Insights",
  "Careers",
  "Testimonials",
  "Events & Webinars",
  "Partner Program",
];

const socials = [
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandX, href: "#", label: "X" },
  { icon: IconBrandDribbble, href: "#", label: "Dribbble" },
];

const partners = [
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Microsoft",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Google Cloud",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Vercel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Slack",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
];

const countries = [
  { name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "Qatar", flag: "https://flagcdn.com/w40/qa.png" },
];

interface FullPageMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullPageMenu = ({ isOpen, onClose }: FullPageMenuProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const animateOpen = useCallback(() => {
    const overlay = overlayRef.current;
    const menu = menuRef.current;
    if (!overlay || !menu) return;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tlRef.current = tl;

    tl.set(overlay, { display: "block" })
      .fromTo(
        menu,
        { scale: 0, borderRadius: "50%", opacity: 0 },
        { scale: 1, borderRadius: "24px", opacity: 1, duration: 0.7, ease: "power3.inOut" },
      )
      .fromTo(
        "[data-menu-close]",
        { rotate: -90, opacity: 0, scale: 0.5 },
        { rotate: 0, opacity: 1, scale: 1, duration: 0.4 },
        "-=0.2",
      )
      .fromTo(
        "[data-menu-logo]",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3",
      )
      .fromTo(
        "[data-menu-social]",
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
        "-=0.3",
      )
      .fromTo(
        "[data-menu-main-link]",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
        "-=0.3",
      )
      .fromTo(
        "[data-menu-col-title]",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 },
        "-=0.4",
      )
      .fromTo(
        "[data-menu-item]",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.015 },
        "-=0.3",
      )
      .fromTo(
        "[data-menu-partners]",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2",
      )
      .fromTo(
        "[data-menu-partner-logo]",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, stagger: 0.04 },
        "-=0.3",
      )
      .fromTo(
        "[data-menu-footer]",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2",
      );
  }, []);

  const animateClose = useCallback(() => {
    const overlay = overlayRef.current;
    const menu = menuRef.current;
    if (!overlay || !menu) return;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        gsap.set(overlay, { display: "none" });
      },
    });
    tlRef.current = tl;

    tl.to(
      "[data-menu-item], [data-menu-col-title], [data-menu-main-link], [data-menu-partner-logo], [data-menu-partners], [data-menu-footer], [data-menu-logo], [data-menu-social], [data-menu-close]",
      { opacity: 0, y: -10, duration: 0.2, stagger: 0.008 },
    ).to(
      menu,
      { scale: 0, borderRadius: "50%", opacity: 0, duration: 0.5, ease: "power3.inOut" },
      "-=0.05",
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      animateOpen();
      document.body.style.overflow = "hidden";
    } else {
      animateClose();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, animateOpen, animateClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-100 hidden"
      aria-hidden={!isOpen}
    >
      {/* Backdrop — blurred website visible behind */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Menu panel — rounded, semi-transparent glass */}
      <div
        ref={menuRef}
        className="absolute inset-3 md:inset-5 lg:inset-8 bg-white/90 backdrop-blur-2xl rounded-3xl overflow-y-auto origin-center opacity-0 scale-0 flex flex-col shadow-2xl"
      >
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-5 md:px-10 lg:px-14 pt-5 md:pt-7 shrink-0">
          <div data-menu-logo className="opacity-0">
            <Logo />
          </div>

          <div className="flex items-center gap-4">
            {/* Social icons */}
            <div className="hidden md:flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-menu-social
                  className="opacity-0 size-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors duration-200"
                  aria-label={s.label}
                >
                  <s.icon size={18} stroke={1.5} />
                </a>
              ))}
            </div>

            {/* Close */}
            <button
              data-menu-close
              type="button"
              onClick={onClose}
              className="opacity-0 size-11 md:size-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-700 transition-colors duration-200"
              aria-label="Close menu"
            >
              <IconX size={22} stroke={1.5} />
            </button>
          </div>
        </div>

        {/* ── Main content — grows to fill space ── */}
        <div className="px-5 md:px-10 lg:px-14 pt-8 md:pt-10 pb-4 flex-1">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 h-full">
            {/* ── LEFT: Big nav links ── */}
            <div className="lg:w-[22%] lg:border-r lg:border-gray-200/60 lg:pr-6">
              <nav className="flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-1">
                {mainNav.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    data-menu-main-link
                    className="opacity-0 group flex items-center gap-2 font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 py-1 lg:py-2.5"
                  >
                    <span>{link.name}</span>
                    <IconArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-600"
                    />
                  </a>
                ))}
              </nav>
            </div>

            {/* ── RIGHT: Columns grid ── */}
            <div className="lg:w-[78%]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-5 lg:gap-6">
                {/* Services */}
                <div>
                  <h3
                    data-menu-col-title
                    className="opacity-0 text-[10px] md:text-xs font-[family-name:var(--font-syne)] font-bold uppercase tracking-[0.15em] text-gray-900 mb-4 md:mb-5 pb-2 border-b border-gray-200"
                  >
                    Services
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {services.map((item) => (
                      <li key={item} data-menu-item className="opacity-0">
                        <a
                          href="#"
                          className="text-xs md:text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200 leading-snug"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div>
                  <h3
                    data-menu-col-title
                    className="opacity-0 text-[10px] md:text-xs font-[family-name:var(--font-syne)] font-bold uppercase tracking-[0.15em] text-gray-900 mb-4 md:mb-5 pb-2 border-b border-gray-200"
                  >
                    Products
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {products.map((item) => (
                      <li key={item} data-menu-item className="opacity-0">
                        <a
                          href="#"
                          className="text-xs md:text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200 leading-snug"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div>
                  <h3
                    data-menu-col-title
                    className="opacity-0 text-[10px] md:text-xs font-[family-name:var(--font-syne)] font-bold uppercase tracking-[0.15em] text-gray-900 mb-4 md:mb-5 pb-2 border-b border-gray-200"
                  >
                    Industries
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {industries.map((item) => (
                      <li key={item} data-menu-item className="opacity-0">
                        <a
                          href="#"
                          className="text-xs md:text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200 leading-snug"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore */}
                <div>
                  <h3
                    data-menu-col-title
                    className="opacity-0 text-[10px] md:text-xs font-[family-name:var(--font-syne)] font-bold uppercase tracking-[0.15em] text-gray-900 mb-4 md:mb-5 pb-2 border-b border-gray-200"
                  >
                    Explore
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {explore.map((item) => (
                      <li key={item} data-menu-item className="opacity-0">
                        <a
                          href="#"
                          className="text-xs md:text-[13px] text-gray-500 hover:text-gray-900 transition-colors duration-200 leading-snug"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Partners strip ── */}
        <div
          data-menu-partners
          className="opacity-0 mx-5 md:mx-10 lg:mx-14 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-violet-50/80 border border-gray-100 px-6 py-4 md:py-5 shrink-0"
        >
          <p className="text-[10px] md:text-xs font-[family-name:var(--font-syne)] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3 text-center">
            Trusted Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
            {partners.map((p) => (
              <div key={p.name} data-menu-partner-logo className="opacity-0">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={80}
                  height={40}
                  className="h-6 md:h-7 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          data-menu-footer
          className="opacity-0 mx-5 md:mx-10 lg:mx-14 mt-4 py-4 md:py-5 border-t border-gray-200 shrink-0"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Contact row */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 text-xs text-gray-600 font-medium">
              <a
                href="mailto:info.xiomtech@gmail.com"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
              >
                <IconMail size={15} stroke={1.5} />
                <span>info.xiomtech@gmail.com</span>
              </a>
              <a
                href="https://wa.me/8801822830775"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-green-600 transition-colors duration-200"
              >
                <IconBrandWhatsapp size={15} stroke={1.5} />
                <span>+880 1822-830775</span>
              </a>
              <a
                href="tel:+8801822830775"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
              >
                <IconPhone size={15} stroke={1.5} />
                <span>+880 1822-830775</span>
              </a>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/8801822830775"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-xs hover:bg-blue-700 transition-colors duration-300"
            >
              Start a Project
              <IconArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Flags + locations + copyright row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
            {/* Country flags */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-gray-500">Serving</span>
              {countries.map((c) => (
                <span key={c.name} className="inline-flex items-center gap-1">
                  <Image
                    src={c.flag}
                    alt={c.name}
                    width={24}
                    height={16}
                    className="rounded-sm"
                    unoptimized
                  />
                  <span className="text-[11px] font-medium text-gray-600">{c.name}</span>
                </span>
              ))}
              <span className="text-xs font-semibold text-gray-500">& beyond</span>
            </div>

            {/* Copyright */}
            <p className="text-xs font-semibold text-gray-500 font-[family-name:var(--font-syne)]">
              &copy; {new Date().getFullYear()} XiomTech
            </p>
          </div>

          {/* Mobile social icons */}
          <div className="flex md:hidden items-center gap-3 mt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="size-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors duration-200"
                aria-label={s.label}
              >
                <s.icon size={17} stroke={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageMenu;
