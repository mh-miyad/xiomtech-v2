"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LETTERS = "XiomTech".split("");

export default function LoadingScreen() {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // Lock scroll immediately
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();

    const container = containerRef.current;
    const progressBar = progressRef.current;
    if (!container || !progressBar) return;

    // ── Entrance timeline ──
    const entranceTl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Logo image: scale + rotate in
    entranceTl
      .fromTo(
        "[data-loader-logo]",
        { scale: 0, rotate: -180, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      )
      // Glow pulse on logo
      .to("[data-loader-logo]", {
        filter: "drop-shadow(0 0 30px rgba(37,99,235,0.6))",
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      })
      // Letters stagger in
      .fromTo(
        "[data-loader-letter]",
        { y: 60, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "back.out(2)",
        },
        "-=0.8"
      )
      // Tagline fades in
      .fromTo(
        "[data-loader-tagline]",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      )
      // Progress bar container fades in
      .fromTo(
        "[data-loader-progress-wrap]",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

    // ── Progress bar: animate to 90% quickly, then wait for load ──
    progressTween.current = gsap.to(progressBar, {
      width: "90%",
      duration: 2.5,
      ease: "power1.out",
    });

    // ── On full page load, finish bar + play exit ──
    const handleLoad = () => {
      // Kill the 90% tween and snap to 100%
      progressTween.current?.kill();

      const exitTl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          window.__lenis?.start();
          setIsDone(true);
        },
      });

      // Complete the bar
      exitTl
        .to(progressBar, {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        })
        // Slight pause to let user see 100%
        .to({}, { duration: 0.3 })
        // Logo + text scale up and fade
        .to("[data-loader-center]", {
          scale: 1.15,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        })
        // Progress bar fades
        .to(
          "[data-loader-progress-wrap]",
          { opacity: 0, duration: 0.3 },
          "<"
        )
        // ── Curtain split reveal ──
        .to("[data-loader-top]", {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        })
        .to(
          "[data-loader-bottom]",
          {
            yPercent: 100,
            duration: 0.8,
            ease: "power4.inOut",
          },
          "<"
        );
    };

    // If document already loaded (cached visit), fire immediately
    if (document.readyState === "complete") {
      // Small delay to let fonts render
      setTimeout(handleLoad, 300);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      entranceTl.kill();
      progressTween.current?.kill();
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 pointer-events-auto"
      aria-hidden="true"
    >
      {/* Top curtain half */}
      <div
        data-loader-top
        className="absolute top-0 left-0 w-full h-1/2  bg-white"
      />
      {/* Bottom curtain half */}
      <div
        data-loader-bottom
        className="absolute bottom-0 left-0 w-full h-1/2 bg-white "
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div data-loader-center className="flex flex-col items-center gap-5">
          {/* Logo icon */}
          <div data-loader-logo className="opacity-0">
            <Image
              src="/logo.webp"
              alt="XiomTech"
              width={80}
              height={80}
              className="size-16 md:size-20"
              priority
            />
          </div>

          {/* Letter-by-letter brand name */}
          <div className="flex items-center font-(family-name:--font-syne) perspective-[600px]">
            {LETTERS.map((letter, i) => (
              <span
                key={i}
                data-loader-letter
                className="text-4xl md:text-6xl font-bold text-black opacity-0 inline-block"
                style={{ transformStyle: "preserve-3d" }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p
            data-loader-tagline
            className="text-sm md:text-base text-gray-900 tracking-[0.3em] uppercase opacity-0"
          >
            Engineering Digital Excellence
          </p>
        </div>

        {/* Progress bar */}
        <div
          data-loader-progress-wrap
          className="mt-10 w-56 md:w-72 h-[3px] bg-blue-500/10 rounded-full overflow-hidden opacity-0 origin-center"
        >
          <div
            ref={progressRef}
            className="h-full w-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #2563eb, #60a5fa, #2563eb)",
              backgroundSize: "200% 100%",
              animation: "loader-shimmer 1.5s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
