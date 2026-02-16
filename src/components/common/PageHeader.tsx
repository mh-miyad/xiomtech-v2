"use client";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
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
    <section
      ref={headerRef}
      className="relative bg-gray-950 pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-950 to-transparent" />

      <div
        data-page-header-content
        className="relative max-w-7xl mx-auto"
      >
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-sm mb-8">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="size-3.5 text-gray-600" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-(family-name:--font-syne) leading-tight">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
