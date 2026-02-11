"use client";
import { IconChevronUp } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Types ── */
type FAQItem = {
  question: string;
  answer: string;
};

/* ── Data ── */
const faqItems: FAQItem[] = [
  {
    question: "How can I start a project with XiomTech?",
    answer:
      "Starting a project with us is simple. Just reach out through our contact form or email, and share a brief about your needs. We'll schedule a call to understand your goals, discuss the scope, and recommend the right approach tailored to your product or brand.",
  },
  {
    question: "What services does XiomTech offer?",
    answer:
      "We specialize in custom web development, ERP systems, POS solutions, KMS (Knowledge Management Systems), SaaS platforms, mobile applications, and UI/UX design. From MVPs to enterprise-grade solutions, we deliver end-to-end digital products.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on project complexity. A standard website takes 2–4 weeks, while ERP or POS systems may take 6–12 weeks. We always provide a clear roadmap and milestones before starting so you know exactly what to expect.",
  },
  {
    question: "Is XiomTech suitable for startups?",
    answer:
      "Absolutely. We work with startups, SMEs, and enterprises alike. For startups, we offer flexible engagement models and can help you build an MVP quickly to validate your idea before scaling further.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our core stack includes Next.js, React, Node.js, TypeScript, and Tailwind CSS for frontend and full-stack work. For backend and infrastructure, we leverage PostgreSQL, MongoDB, AWS, Docker, and AI/ML integrations where needed.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, performance monitoring, and feature updates post-launch. Our support plans are flexible—whether you need dedicated hours or on-demand assistance, we've got you covered.",
  },
];

/* ── Accordion Item ── */
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const inner = innerRef.current;
    if (!content || !inner) return;

    if (isOpen) {
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
      gsap.to(inner, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(content, {
        height: 0,
        duration: 0.35,
        delay: 0.1,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 font-[family-name:var(--font-syne)] group-hover:text-blue-600 transition-colors duration-200">
          {item.question}
        </span>
        <span
          className={`shrink-0 size-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-blue-600 border-blue-600 text-white rotate-0"
              : "bg-transparent border-gray-300 text-gray-400 rotate-180"
          }`}
        >
          <IconChevronUp size={18} stroke={2} />
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden h-0">
        <div ref={innerRef} className="pb-6 opacity-0 -translate-y-2">
          <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-3xl">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ Section ── */
export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-faq-header] > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
      gsap.fromTo(
        "[data-faq-item]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-faq-item]",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div data-faq-header className="text-center mb-14">
          <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-syne)] leading-tight">
            Your Questions
            <br />
            <span className="italic font-serif text-gray-900">Answered!</span>
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => (
            <div key={item.question} data-faq-item>
              <AccordionItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
