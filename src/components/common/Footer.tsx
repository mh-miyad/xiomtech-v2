"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "SaaS Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Brand Identity", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Work", href: "#projects" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <Image
                src="/logo.webp"
                alt="XiomTech"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-syne)]">
                Xiom<span className="gradient-text">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Award-winning digital agency crafting exceptional web experiences,
              SaaS platforms, and digital products that drive real business
              results.
            </p>
            <a
              href="mailto:hello@xiomtech.com"
              className="inline-flex items-center gap-2 text-sm text-[#a78bfa] hover:text-[#c4b5fd] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              hello@xiomtech.com
            </a>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-syne)]">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-syne)]">
              Stay Updated
            </h4>
            <p className="text-sm text-zinc-500 mb-4">
              Get the latest insights on design and tech.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#7c3aed]/50 transition-colors"
              />
              <button
                type="button"
                className="shrink-0 rounded-lg bg-[#7c3aed] px-3 py-2 text-sm font-medium text-white hover:bg-[#6d28d9] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} XiomTech. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
