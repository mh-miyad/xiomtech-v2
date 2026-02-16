"use client";
import PageHeader from "@/components/common/PageHeader";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconCalendar,
  IconClock,
  IconMail,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ── */
const subjects = [
  "Product Inquiry",
  "Custom Development",
  "Partnership",
  "General",
];

const faqItems = [
  {
    q: "How quickly do you respond to inquiries?",
    a: "We respond to all messages within 24 hours on business days. For urgent matters, WhatsApp is the fastest channel.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients in Bangladesh, the UAE, Saudi Arabia, the UK, and beyond. All project communication is conducted in English, and we are comfortable with timezone differences.",
  },
  {
    q: "Do you offer free trials for your products?",
    a: "Yes. All XiomTech SaaS products include a permanent free tier or a 14-day free trial of paid features. No credit card required.",
  },
  {
    q: "What is the typical process for a custom development project?",
    a: "We start with a free consultation call to understand your requirements, then provide a detailed scope and estimate within 3–5 business days. Approved projects move into design and development with weekly progress updates.",
  },
];

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedSubject, setSelectedSubject] = useState("General");
  const [openFaq, setOpenFaq] = useState<number>(-1);

  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  }, []);

  useEffect(() => {
    faqItems.forEach((_, i) => {
      const content = contentRef.current[i];
      const inner = innerRef.current[i];
      if (!content || !inner) return;

      if (openFaq === i) {
        gsap.to(content, {
          height: inner.offsetHeight,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(inner, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          delay: 0.1,
          ease: "power3.out",
        });
      } else {
        gsap.to(inner, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in" });
        gsap.to(content, {
          height: 0,
          duration: 0.35,
          delay: 0.1,
          ease: "power3.inOut",
        });
      }
    });
  }, [openFaq]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact-info]",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-contact-info]", start: "top 80%" },
        },
      );

      gsap.fromTo(
        "[data-contact-form-card]",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-contact-form-card]",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        "[data-contact-faq] > *",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-contact-faq]", start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef}>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: "Contact Us" }]} />

      <div className="pb-20 px-5 md:px-8 lg:px-16 pt-14">
        {/* ── Main Grid: Info + Form ── */}
        <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
          {/* Left — Contact Info */}
          <div data-contact-info className="lg:col-span-2 space-y-6">
            {/* Direct Contact */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-5">
                Reach Us Directly
              </h3>
              <div className="space-y-4">
                <Link
                  href="mailto:hello@xiomtech.net"
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <IconMail
                    size={18}
                    stroke={1.5}
                    className="text-blue-600 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p>hello@xiomtech.net</p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      support@xiomtech.net (product support)
                    </p>
                  </div>
                </Link>
                <Link
                  href="https://wa.me/8801822830775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  <IconBrandWhatsapp
                    size={18}
                    stroke={1.5}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      Phone / WhatsApp
                    </p>
                    <p>+880 1822-830775</p>
                  </div>
                </Link>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <IconClock
                    size={18}
                    stroke={1.5}
                    className="text-blue-600 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p>Sun – Thu: 9:00 AM – 6:00 PM (BST)</p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Fri – Sat: Closed (emergency via email)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <IconMapPin
                    size={18}
                    stroke={1.5}
                    className="text-blue-600 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book a Demo */}
            <div className="p-6 bg-blue-600 rounded-xl text-white">
              <div className="flex items-center gap-3 mb-3">
                <IconCalendar size={20} stroke={1.5} />
                <h3 className="text-base font-bold font-[family-name:var(--font-syne)]">
                  Book a Free Demo
                </h3>
              </div>
              <p className="text-sm text-white/75 leading-relaxed mb-4">
                Interested in seeing XiomPOS, XiomHR, or any of our products
                live? We offer free 30-minute product demos via Google Meet or
                Zoom.
              </p>
              <ShimmerButton variant="outline">
                Book a Demo
                <IconArrowRight size={15} stroke={2} />
              </ShimmerButton>
            </div>

            {/* Founder card */}
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4">
              <div className="relative size-16 rounded-xl overflow-hidden shrink-0 border border-blue-500/25">
                <Image
                  src="/profile-image-png.png"
                  alt="Mahamudul Hasan Miyad"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm font-[family-name:var(--font-syne)]">
                  Mahamudul Hasan Miyad
                </p>
                <p className="text-xs text-gray-500">Founder & CTO</p>
                <Link
                  href="https://wa.me/8801822830775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 font-semibold mt-1 inline-block hover:text-blue-700 transition-colors"
                >
                  Book a Call Directly
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            data-contact-form-card
            className="lg:col-span-3 p-6 md:p-8 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-colors duration-200"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-2 block">
                  Subject
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => setSelectedSubject(subject)}
                      className={`px-3.5 py-1.5 rounded-lg text-[11px] font-medium border transition-all duration-200 ${
                        selectedSubject === subject
                          ? "bg-blue-600 border-blue-500 text-white"
                          : "bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project or question..."
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                  required
                  minLength={20}
                />
              </div>

              <ShimmerButton variant="primary">
                Send Message
                <IconSend size={15} stroke={2} />
              </ShimmerButton>

              <p className="text-xs text-gray-400">
                We take your privacy seriously. Your information is never shared
                with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div data-contact-faq className=" max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
              Frequently Asked{" "}
              <span className="italic font-serif">Questions</span>
            </h2>
          </div>
          <div className=" max-w-6xl mx-auto">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-sm md:text-base font-semibold text-gray-900 font-[family-name:var(--font-syne)] group-hover:text-blue-600 transition-colors duration-200">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 size-8 flex items-center justify-center rounded-full border transition-all duration-300 text-xs ${
                      openFaq === i
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-transparent border-gray-300 text-gray-400"
                    }`}
                  >
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  ref={(el) => {
                    contentRef.current[i] = el;
                  }}
                  className="overflow-hidden h-0"
                >
                  <div
                    ref={(el) => {
                      innerRef.current[i] = el;
                    }}
                    className="pb-5 opacity-0 -translate-y-2"
                  >
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
