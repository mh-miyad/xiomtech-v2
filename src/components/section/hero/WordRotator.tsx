"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export function WordRotator({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll<HTMLSpanElement>("[data-word]");
    const measurer =
      container.querySelector<HTMLSpanElement>("[data-measurer]");
    if (spans.length === 0 || !measurer) return;

    // Measure each word's width
    const widths: number[] = [];
    for (const span of spans) {
      gsap.set(span, {
        position: "absolute",
        visibility: "visible",
        opacity: 1,
      });
      widths.push(span.offsetWidth);
      gsap.set(span, { opacity: 0 });
    }

    // Set initial state: first word visible, rest below
    gsap.set(container, { width: widths[0] });
    gsap.set(spans[0], { y: 0, opacity: 1 });
    for (let i = 1; i < spans.length; i++) {
      gsap.set(spans[i], { y: "100%", opacity: 0 });
    }

    const tl = gsap.timeline({ repeat: -1, delay: 2 });

    for (let i = 0; i < spans.length; i++) {
      const next = (i + 1) % spans.length;

      // Animate width to next word + slide current out + slide next in
      tl.to(container, {
        width: widths[next],
        duration: 0.5,
        ease: "power2.inOut",
      })
        .to(
          spans[i],
          {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          "<",
        )
        .fromTo(
          spans[next],
          { y: "100%", opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );

      // Pause between swaps
      if (next !== 0) {
        tl.to({}, { duration: 2.5 });
      }
    }

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [words]);

  const handleMouseEnter = () => {
    if (timelineRef.current && !isPaused.current) {
      timelineRef.current.pause();
      isPaused.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (timelineRef.current && isPaused.current) {
      timelineRef.current.resume();
      isPaused.current = false;
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block overflow-hidden cursor-pointer ${className ?? ""}`}
      style={{ height: "1.1em", verticalAlign: "bottom" }}
    >
      {words.map((word) => (
        <span
          key={word}
          data-word
          className="absolute left-0 whitespace-nowrap"
        >
          {word}
        </span>
      ))}
      <span data-measurer className="invisible whitespace-nowrap">
        {words[0]}
      </span>
    </span>
  );
}
