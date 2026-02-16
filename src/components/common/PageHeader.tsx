"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-page-header-content] > *",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={headerRef}
      className="bg-blue-600 pt-28 pb-10 px-5 md:px-8 lg:px-16"
    >
      <div
        data-page-header-content
        className="max-w-[1700px] mx-auto"
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-white/40">/</span>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-syne)] leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
