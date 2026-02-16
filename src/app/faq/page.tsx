"use client";
import PageHeader from "@/components/common/PageHeader";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { IconChevronUp } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Types ── */
type FAQItem = { question: string; answer: string };
type FAQCategory = { label: string; items: FAQItem[] };

/* ── Data ── */
const categories: FAQCategory[] = [
  {
    label: "General",
    items: [
      {
        question: "What is XiomTech?",
        answer:
          "XiomTech is a software company based in Dhaka, Bangladesh. We build and sell six enterprise SaaS products — XiomPOS, XiomHR, XiomAccounts, XiomEdu, XiomTickets, and XiomCare — and we also provide custom software development services to businesses worldwide.",
      },
      {
        question: "Where is XiomTech based?",
        answer:
          "We are headquartered in Dhaka, Bangladesh and currently serve businesses across Bangladesh, the United Arab Emirates, and Saudi Arabia. We work with international clients globally via remote engagement.",
      },
      {
        question: "Who uses XiomTech products?",
        answer:
          "Our products are used by retail businesses, restaurants, supermarkets, HR departments, schools, colleges, clinics, and customer support teams. Our clients range from small independent businesses to multi-branch operations.",
      },
      {
        question: "Is XiomTech a local Bangladeshi company?",
        answer:
          "Yes, we are proudly Bangladesh-based. But we are building for the world — our products are designed with international markets in mind, and we currently serve clients in the Gulf region as well as Bangladesh.",
      },
    ],
  },
  {
    label: "Products",
    items: [
      {
        question: "What products does XiomTech offer?",
        answer:
          "XiomTech offers six SaaS products: XiomPOS (Cloud POS with ecommerce), XiomHR (HR & payroll management), XiomAccounts (Accounting & inventory), XiomEdu (Education management), XiomTickets (Customer support ticketing), and XiomCare (Healthcare management).",
      },
      {
        question: "Can I use multiple XiomTech products together?",
        answer:
          "Yes. XiomTech products are designed to work together. For example, XiomPOS integrates with XiomAccounts so your sales data flows directly into your accounting records. More integrations are being added continuously.",
      },
      {
        question: "Are XiomTech products available in Bangla?",
        answer:
          "Bangla language support is available in XiomPOS and XiomHR, with the remaining products being localized throughout 2026. All products generate Bangla-language reports and support BDT currency formatting.",
      },
      {
        question: "Do your products work on mobile?",
        answer:
          "Yes. All XiomTech products are accessible via mobile browser. Dedicated Android apps are available for XiomPOS and XiomHR, with iOS versions and apps for the remaining products in development.",
      },
    ],
  },
  {
    label: "Pricing & Trials",
    items: [
      {
        question: "Do you offer a free version?",
        answer:
          "Yes. Every XiomTech product includes a permanent free tier with core features and reasonable usage limits. You can use our free tiers indefinitely without entering a credit card.",
      },
      {
        question: "Is there a free trial for paid features?",
        answer:
          "Yes. All paid tiers include a 14-day free trial with no credit card required. You get full access to all paid features during the trial. At the end of the trial, you either subscribe or automatically return to the free tier.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "In Bangladesh, we accept bKash, Nagad, Rocket, and bank transfer. Card payments (Visa/Mastercard) are accepted via SSL Commerz. For international customers, we accept major credit/debit cards.",
      },
      {
        question: "Can I switch between plans?",
        answer:
          "Yes. You can upgrade your plan at any time — changes take effect immediately. You can downgrade at the end of your current billing cycle.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "For XiomPOS, a one-time setup and onboarding fee of ৳5,000 applies. This fee is waived if you subscribe to an annual plan. All other products have no setup fee.",
      },
      {
        question: "Do you offer discounts for annual subscriptions?",
        answer:
          "Yes. Annual subscriptions are priced at a 20% discount compared to monthly billing — the equivalent of getting more than two months free per year.",
      },
      {
        question: "Do you offer discounts for NGOs, schools, or nonprofits?",
        answer:
          "We offer a 30% discount on all annual plans for verified NGOs, registered schools, and nonprofit organizations. Contact us with your registration documents to apply.",
      },
    ],
  },
  {
    label: "Setup & Onboarding",
    items: [
      {
        question: "How long does it take to get started?",
        answer:
          "For self-service setup, you can be running within minutes of signing up. For businesses that want assisted onboarding — data migration, staff training, and integration setup — we offer a guided onboarding process that typically takes 2–5 business days depending on complexity.",
      },
      {
        question: "Do you help migrate data from our existing software?",
        answer:
          "Yes. For paid plan subscribers, we provide data migration support for common formats (Excel/CSV exports from most accounting and POS systems). Custom migration from specialized platforms may incur additional charges.",
      },
      {
        question: "Do you provide training?",
        answer:
          "All plans include access to our documentation, video tutorials, and email support. Business and Enterprise plan subscribers receive priority onboarding support including live training sessions via Google Meet.",
      },
    ],
  },
  {
    label: "Integrations",
    items: [
      {
        question: "What payment gateways does XiomPOS support?",
        answer:
          "XiomPOS supports bKash, Nagad, Rocket, SSL Commerz, and cash transactions. Integration with additional payment providers is ongoing.",
      },
      {
        question: "Does XiomAccounts support Bangladesh VAT (NBR) compliance?",
        answer:
          "Yes. XiomAccounts generates NBR-compliant VAT reports and Mushak forms compatible with the Bangladesh National Board of Revenue's requirements.",
      },
      {
        question: "Will XiomAccounts be ZATCA-compliant for Saudi Arabia?",
        answer:
          "ZATCA Phase 2 e-invoicing compliance for Saudi Arabia is on our roadmap for the second half of 2026. We will notify all existing subscribers when this feature is available.",
      },
      {
        question: "Can XiomHR connect to biometric attendance devices?",
        answer:
          "Yes. XiomHR supports integration with common fingerprint and face-recognition attendance hardware. Contact us for a compatibility check for your specific device.",
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        question: "What support options are available?",
        answer:
          "Free tier: Email support with a 3-business-day response target. Starter tier: 1-business-day response. Business tier: Priority email and live chat. Enterprise tier: Dedicated support manager, phone support, and 4-hour response SLA.",
      },
      {
        question: "How do I report a bug or technical issue?",
        answer:
          "Email support@xiomtech.net with a description of the issue and screenshots if possible. Business and Enterprise customers can submit tickets directly through XiomTickets.",
      },
      {
        question: "Is there a status page to check product uptime?",
        answer:
          "Yes. You can check current status and past incidents at status.xiomtech.net.",
      },
    ],
  },
  {
    label: "Custom Development",
    items: [
      {
        question: "Do you build custom software?",
        answer:
          "Yes. In addition to our SaaS products, XiomTech offers custom web development, mobile app development, SaaS platform development, and AI integration services.",
      },
      {
        question: "What technologies do you build with?",
        answer:
          "We specialize in Next.js, React, TypeScript, Node.js, NestJS, React Native, and PostgreSQL/MongoDB. We are comfortable with most modern JavaScript/TypeScript stacks.",
      },
      {
        question: "How do I get a quote for a custom project?",
        answer:
          "Contact us with a description of your project and we will schedule a free discovery call. After the call, we provide a detailed scope and estimate within 3–5 business days.",
      },
      {
        question:
          "What is the typical timeline for a custom development project?",
        answer:
          "Simple web applications take 4–8 weeks. Complex platforms and mobile apps typically take 3–6 months. We provide detailed timelines during scoping, and projects are tracked with weekly check-ins.",
      },
    ],
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
      gsap.to(inner, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in" });
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
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm md:text-base font-semibold text-gray-900 font-[family-name:var(--font-syne)] group-hover:text-blue-600 transition-colors duration-200">
          {item.question}
        </span>
        <span
          className={`shrink-0 size-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-blue-600 border-blue-600 text-white rotate-0"
              : "bg-transparent border-gray-300 text-gray-400 rotate-180"
          }`}
        >
          <IconChevronUp size={16} stroke={2} />
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0">
        <div ref={innerRef} className="pb-5 opacity-0 -translate-y-2">
          <p className="text-sm text-gray-500 leading-relaxed  max-w-6xl mx-auto">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function FAQPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  const handleCategoryChange = useCallback((index: number) => {
    setActiveCategory(index);
    setOpenIndex(0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-faq-tabs]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-faq-tabs]", start: "top 85%" },
        }
      );

      gsap.fromTo(
        "[data-faq-content]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-faq-content]", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentItems = categories[activeCategory].items;

  return (
    <main ref={sectionRef}>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <div className="pb-20 px-5 md:px-8 lg:px-16 pt-14">
        {/* ── Category Tabs ── */}
        <div
          data-faq-tabs
          className="max-w-[1700px] mx-auto flex flex-wrap items-center gap-2 mb-10"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => handleCategoryChange(i)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                activeCategory === i
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Accordion ── */}
        <div data-faq-content className="max-w-[1700px] mx-auto">
          <div className=" max-w-6xl mx-auto">
            {currentItems.map((item, index) => (
              <AccordionItem
                key={`${activeCategory}-${index}`}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-[1700px] mx-auto mt-16 pt-10 border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-3">
            Still have questions?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            We&apos;re here to help. Reach out and we&apos;ll get back to you
            within 24 hours.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/contact">
              <ShimmerButton variant="primary">
                Contact Us
                <ArrowRight size={15} />
              </ShimmerButton>
            </Link>
            <Link href="/pricing">
              <ShimmerButton variant="outline">
                View Pricing
                <ArrowRight size={15} />
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
