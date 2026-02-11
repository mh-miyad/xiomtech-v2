"use client";
import { IconMenu } from "@tabler/icons-react";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import FullPageMenu from "./FullPageMenu";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* ── Detect dark sections behind the navbar ── */
  const updateTheme = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;
    const navBottom = header.getBoundingClientRect().bottom;
    const navMid = navBottom / 2;

    const darkSections = document.querySelectorAll("[data-dark-section]");
    let overDark = false;

    darkSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= navMid && rect.bottom >= navMid) {
        overDark = true;
      }
    });

    setIsDark(overDark);
  }, []);

  useEffect(() => {
    updateTheme();

    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme, { passive: true });

    /* Also listen to Lenis scroll for smooth scroll sync */
    const lenis = window.__lenis;
    if (lenis) {
      lenis.on("scroll", updateTheme);
    }

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
      if (lenis) {
        lenis.off("scroll", updateTheme);
      }
    };
  }, [updateTheme]);

  /* ── Intro animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        "[data-nav-logo]",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      ).fromTo(
        "[data-nav-menu]",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3",
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const iconColor = isDark ? "white" : "black";

  return (
    <>
      <header
        ref={headerRef}
        className="backdrop-blur-sm sticky top-0 w-full h-20 z-50 px-6 md:px-10 transition-colors duration-300"
      >
        <nav className="flex items-center justify-between h-full">
          <div>
            {/* <button
              aria-label="Open menu"
              onClick={() => setIsopen(true)}
            >
              <IconMenu size={46} strokeWidth={1} color={iconColor} className="transition-colors duration-300" />
            </button> */}
          </div>
          {/* Logo */}
          <div data-nav-logo className="opacity-0">
            <Logo inverted={isDark} />
          </div>
          <div data-nav-menu className="opacity-0">
            <button aria-label="Open menu" onClick={() => setIsopen(true)}>
              <IconMenu
                size={46}
                strokeWidth={1}
                color={iconColor}
                className="transition-colors duration-300"
              />
            </button>
          </div>
        </nav>
      </header>

      <FullPageMenu isOpen={isOpen} onClose={() => setIsopen(false)} />
    </>
  );
};

export default Navbar;
