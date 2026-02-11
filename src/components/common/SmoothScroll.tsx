"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Expose lenis globally so overlays (FullPageMenu etc.) can stop/start it */
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    /* Disable Lenis on touch-only devices — native mobile scroll is smoother */
    const isTouchOnly =
      "ontouchstart" in window && !window.matchMedia("(pointer: fine)").matches;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      prevent: (node) => {
        /* Let any scrollable overlay (menu, modal) scroll natively */
        return (
          node.closest("[data-lenis-prevent]") !== null ||
          node.classList.contains("overflow-y-auto")
        );
      },
    });

    /* On mobile-only devices, stop Lenis so native scroll takes over */
    if (isTouchOnly) {
      lenis.stop();
    }

    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger reveal animations
    const reveals = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
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

    return () => {
      delete window.__lenis;
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(raf);
    };
  }, []);

  return <>{children}</>;
}
