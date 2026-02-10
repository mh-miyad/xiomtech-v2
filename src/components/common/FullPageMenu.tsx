"use client";
import gsap from "gsap";
import {
  IconX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandDribbble,
  IconArrowRight,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import { useEffect, useRef, useCallback } from "react";
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

const quickLinks = [
  { name: "Case Studies", color: "text-blue-600" },
  { name: "Blog & Insights", color: "text-indigo-600" },
  { name: "Careers — We're Hiring!", color: "text-violet-600" },
  { name: "Testimonials", color: "text-sky-600" },
  { name: "Events & Webinars", color: "text-blue-500" },
  { name: "Partner Program", color: "text-indigo-500" },
];

const socials = [
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandX, href: "#", label: "X" },
  { icon: IconBrandDribbble, href: "#", label: "Dribbble" },
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
        { scale: 1, borderRadius: "0%", opacity: 1, duration: 0.7, ease: "power3.inOut" },
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
        "[data-menu-quick]",
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
        "-=0.4",
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
      "[data-menu-item], [data-menu-col-title], [data-menu-main-link], [data-menu-quick], [data-menu-footer], [data-menu-logo], [data-menu-social], [data-menu-close]",
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
    <div ref={overlayRef} className="fixed inset-0 z-100 hidden" aria-hidden={!isOpen}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" onClick={onClose} />

      {/* Menu panel */}
      <div
        ref={menuRef}
        className="absolute inset-0 md:inset-3 lg:inset-5 bg-white/97 backdrop-blur-2xl md:rounded-[2rem] overflow-y-auto origin-center opacity-0 scale-0"
      >
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-5 md:px-10 lg:px-14 pt-5 md:pt-7">
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

        {/* ── Main content ── */}
        <div className="px-5 md:px-10 lg:px-14 pt-8 md:pt-10 pb-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
            {/* ── LEFT: Big nav links ── */}
            <div className="lg:w-[22%] lg:border-r lg:border-gray-100 lg:pr-6">
              <nav className="flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-1">
                {mainNav.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    data-menu-main-link
                    className="opacity-0 group flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 py-1 lg:py-2.5"
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
                    className="opacity-0 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 md:mb-5 pb-2 border-b-2 border-blue-100 inline-block"
                  >
                    Services
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {services.map((item) => (
                      <li key={item} data-menu-item className="opacity-0">
                        <a
                          href="#"
                          className="text-xs md:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 leading-snug"
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
                    className="opacity-0 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4 md:mb-5 pb-2 border-b-2 border-indigo-100 inline-block"
                  >
                    Products
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {products.map((item) => (
                      <li key={item} data-menu-item className="opacity-0">
                        <a
                          href="#"
                          className="text-xs md:text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 leading-snug font-medium"
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
                    className="opacity-0 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-violet-600 mb-4 md:mb-5 pb-2 border-b-2 border-violet-100 inline-block"
                  >
                    Industries
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3">
                    {industries.map((item) => (
                      <li key={item} data-menu-item className="opacity-0">
                        <a
                          href="#"
                          className="text-xs md:text-sm text-gray-600 hover:text-violet-600 transition-colors duration-200 leading-snug"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links / Explore */}
                <div>
                  <h3
                    data-menu-col-title
                    className="opacity-0 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-sky-600 mb-4 md:mb-5 pb-2 border-b-2 border-sky-100 inline-block"
                  >
                    Explore
                  </h3>
                  <ul className="space-y-3 md:space-y-4">
                    {quickLinks.map((item) => (
                      <li key={item.name} data-menu-quick className="opacity-0">
                        <a
                          href="#"
                          className={`text-xs md:text-sm font-semibold ${item.color} hover:underline underline-offset-2 transition-all duration-200`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer bar ── */}
        <div
          data-menu-footer
          className="opacity-0 mx-5 md:mx-10 lg:mx-14 py-5 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs text-gray-500">
              <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200">
                <IconMail size={15} stroke={1.5} />
                <span>hello@xiomtech.com</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200">
                <IconPhone size={15} stroke={1.5} />
                <span>+880 1XXX-XXXXXX</span>
              </a>
              <span className="flex items-center gap-1.5">
                <IconMapPin size={15} stroke={1.5} />
                <span>Bangladesh &middot; UAE &middot; Saudi Arabia &middot; Qatar</span>
              </span>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-xs hover:bg-blue-700 transition-colors duration-300"
            >
              Start a Project
              <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
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

          <p className="mt-4 text-[11px] text-gray-400 tracking-wide">
            &copy; {new Date().getFullYear()} XiomTech &mdash; Engineering the future, one product at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullPageMenu;
