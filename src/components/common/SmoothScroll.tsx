"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/* Expose lenis globally so overlays (FullPageMenu etc.) can stop/start it */
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Detects if the device is primarily touch-based (phone / tablet).
 * We combine multiple signals for reliability.
 */
function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;

  // 1. No fine pointer (mouse) available
  const noMouse = !window.matchMedia("(pointer: fine)").matches;

  // 2. Coarse pointer is the primary input (finger)
  const hasCoarse = window.matchMedia("(pointer: coarse)").matches;

  // 3. Small viewport typical of phones/tablets
  const smallScreen = window.innerWidth <= 1024;

  return (noMouse && hasCoarse) || (hasCoarse && smallScreen);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const mobile = isMobileDevice();

    // ── Shared: GSAP ScrollTrigger reveal animations ──
    const setupReveals = () => {
      const reveals = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-scale",
      );

      reveals.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    };

    /* ── MOBILE: skip Lenis entirely, use native scroll ── */
    if (mobile) {
      // ScrollTrigger works perfectly with native scroll
      setupReveals();

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    /* ── DESKTOP: use Lenis for buttery smooth scroll ── */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 0, // Ignore touch on desktop (trackpad is fine via wheel)
      syncTouch: false, // Don't hijack touch events at all
      prevent: (node) => {
        /* Let any scrollable overlay (menu, modal) scroll natively */
        return (
          node.closest("[data-lenis-prevent]") !== null ||
          node.classList.contains("overflow-y-auto")
        );
      },
    });

    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    setupReveals();

    return () => {
      delete window.__lenis;
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(raf);
    };
  }, []);

  return <>{children}</>;
}
