"use client";
import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
];

const footerLinks = {
  company: {
    title: "Company",
    items: ["About Us", "Our Team", "Careers", "Contact Us", "Blog"],
  },
  services: {
    title: "Services",
    items: [
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "AI & ML Solutions",
      "Cloud Services",
      "SaaS Development",
    ],
  },
  products: {
    title: "Products",
    items: ["XiomOS", "XiomCloud", "XiomAI", "XiomCRM", "XiomPay", "XiomEdu"],
  },
  resources: {
    title: "Resources",
    items: [
      "Case Studies",
      "Documentation",
      "Partner Program",
      "Privacy Policy",
      "Terms of Service",
    ],
  },
};

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
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandX, href: "#", label: "X" },
  { icon: IconBrandDribbble, href: "#", label: "Dribbble" },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Globe section
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
        }
      );

      // Country cards stagger
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
        }
      );

      // Link columns
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
        }
      );

      // Partner strip
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
        }
      );

      // Big text
      gsap.fromTo(
        "[data-footer-bigtext]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-footer-bigtext]",
            start: "top 95%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative mt-20 overflow-hidden">
      {/* ─── Globe Video + Country Cards ─── */}
      <div
        data-footer-globe
        className="relative w-full h-[420px] md:h-[500px] lg:h-[580px] bg-black overflow-hidden"
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/footer_globe.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent h-32" />

        {/* Country cards overlaid on globe */}
        <div className="absolute inset-x-0 bottom-12 md:bottom-16 flex justify-center px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl w-full">
            {countries.map((c) => (
              <div
                key={c.name}
                data-footer-country
                className="bg-black/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-center"
              >
                <Image
                  src={c.flag}
                  alt={c.name}
                  width={52}
                  height={50}
                  className="mx-auto mb-2 "
                />
                <p className="text-white font-bold text-sm font-[family-name:var(--font-syne)]">
                  {c.name}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{c.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Footer Links Section ─── */}
      <div className="bg-gray-950 px-5 md:px-10 lg:px-16 pt-16 pb-10">
        {/* Top row: Logo + socials + contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="XiomTech"
              width={40}
              height={40}
              className="size-9"
            />
            <span className="text-white text-2xl font-bold font-[family-name:var(--font-syne)]">
              XiomTech
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="mailto:info.xiomtech@gmail.com"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              <IconMail size={16} stroke={1.5} />
              <span>info.xiomtech@gmail.com</span>
            </a>
            <a
              href="https://wa.me/8801822830775"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-green-400 transition-colors duration-200"
            >
              <IconBrandWhatsapp size={16} stroke={1.5} />
              <span>+880 1822-830775</span>
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="size-8 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-colors duration-200"
                  aria-label={s.label}
                >
                  <s.icon size={16} stroke={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} data-footer-col>
              <h4 className="text-white font-bold text-sm font-[family-name:var(--font-syne)] mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Partner Badges Strip ─── */}
      <div className="bg-gray-950 border-t border-white/10">
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
                  alt={p.name}
                  width={80}
                  height={40}
                  className="h-7 md:h-8 w-auto object-contain transition-opacity duration-300"
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
      <div className="bg-gray-950 border-t border-white/10">
        <div className="px-5 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="#"
            className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200 font-medium"
          >
            Terms & Conditions
          </a>
          <p className="text-white/40 text-xs font-medium text-center">
            &copy; {new Date().getFullYear()} XiomTech. All Rights Reserved.
          </p>
          <a
            href="#"
            className="text-white/40 text-xs hover:text-white/70 transition-colors duration-200 font-medium"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* ─── Big Brand Text ─── */}
      <div className="bg-gray-950 overflow-hidden pb-6">
        <div
          data-footer-bigtext
          className="relative flex items-center justify-center h-[120px] md:h-[180px] lg:h-[240px]"
        >
          <span className="text-[80px] md:text-[70px] lg:text-[100px] xl:text-[140px] 2xl:text-[200px] font-black font-[family-name:var(--font-syne)] uppercase leading-none select-none text-white">
            XiomTech
          </span>
          {/* Reflection glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
