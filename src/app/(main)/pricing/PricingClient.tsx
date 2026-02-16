"use client";
import PageHeader from "@/components/common/PageHeader";
import ProductSchema from "@/components/schema/ProductSchema";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { IconCheck, IconChevronUp } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Types ── */
type Plan = {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  highlight?: boolean;
  description: string;
  features: string[];
};

type Product = {
  name: string;
  tagline: string;
  slug: string;
  plans: Plan[];
  setupNote?: string;
};

/* ── Data ── */
const products: Product[] = [
  {
    name: "XiomPOS",
    tagline: "Cloud POS & Ecommerce",
    slug: "xiompos",
    setupNote: "One-time setup fee: ৳5,000 (waived on annual plans)",
    plans: [
      {
        name: "Free",
        monthlyPrice: "৳0",
        annualPrice: "৳0",
        description: "Get started with the basics",
        features: ["1 user", "100 products", "1 outlet", "Basic reports"],
      },
      {
        name: "Starter",
        monthlyPrice: "৳799",
        annualPrice: "৳7,670/yr",
        description: "For growing businesses",
        features: [
          "3 users",
          "1,000 products",
          "1 outlet",
          "bKash/Nagad integration",
          "Ecommerce store",
        ],
      },
      {
        name: "Growth",
        monthlyPrice: "৳1,499",
        annualPrice: "৳14,390/yr",
        highlight: true,
        description: "Most popular for retail",
        features: [
          "5 users",
          "Unlimited products",
          "2 outlets",
          "Advanced reports",
          "Priority email support",
        ],
      },
      {
        name: "Pro",
        monthlyPrice: "৳2,499",
        annualPrice: "৳23,990/yr",
        description: "Multi-branch operations",
        features: [
          "Unlimited users",
          "Unlimited products",
          "5 outlets",
          "API access",
          "Dedicated support",
        ],
      },
    ],
  },
  {
    name: "XiomHR",
    tagline: "HR & Payroll Management",
    slug: "xiomhr",
    plans: [
      {
        name: "Free",
        monthlyPrice: "৳0",
        annualPrice: "৳0",
        description: "Up to 10 employees",
        features: ["Basic HR", "Attendance", "Leave management"],
      },
      {
        name: "Starter",
        monthlyPrice: "৳999",
        annualPrice: "৳9,590/yr",
        description: "Up to 50 employees",
        features: [
          "Payroll",
          "Biometric integration",
          "Reports",
          "Email support",
        ],
      },
      {
        name: "Business",
        monthlyPrice: "৳1,999",
        annualPrice: "৳19,190/yr",
        highlight: true,
        description: "Up to 200 employees",
        features: [
          "Multi-branch",
          "Advanced payroll",
          "Custom reports",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        monthlyPrice: "৳3,999",
        annualPrice: "৳38,390/yr",
        description: "Unlimited employees",
        features: [
          "Unlimited",
          "API access",
          "Custom integrations",
          "Dedicated manager",
        ],
      },
    ],
  },
  {
    name: "XiomAccounts",
    tagline: "Accounting & Inventory",
    slug: "xiomaccounts",
    plans: [
      {
        name: "Free",
        monthlyPrice: "৳0",
        annualPrice: "৳0",
        description: "Solo businesses",
        features: ["Basic ledger", "Up to 100 transactions/mo", "1 user"],
      },
      {
        name: "Starter",
        monthlyPrice: "৳799",
        annualPrice: "৳7,670/yr",
        description: "Growing businesses",
        features: [
          "Full double-entry",
          "Inventory",
          "NBR VAT reports",
          "3 users",
        ],
      },
      {
        name: "Business",
        monthlyPrice: "৳1,999",
        annualPrice: "৳19,190/yr",
        highlight: true,
        description: "Multi-branch",
        features: [
          "Multi-branch",
          "Advanced reports",
          "Mushak forms",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        monthlyPrice: "৳3,999",
        annualPrice: "৳38,390/yr",
        description: "Large operations",
        features: [
          "Unlimited",
          "API access",
          "Custom reports",
          "Dedicated manager",
        ],
      },
    ],
  },
  {
    name: "XiomEdu",
    tagline: "Education Management",
    slug: "xiomedu",
    plans: [
      {
        name: "Free",
        monthlyPrice: "৳0",
        annualPrice: "৳0",
        description: "Small institutions",
        features: ["Up to 50 students", "Basic records", "Attendance"],
      },
      {
        name: "School",
        monthlyPrice: "৳1,499",
        annualPrice: "৳14,390/yr",
        description: "K-12 schools",
        features: [
          "Up to 500 students",
          "Fee management",
          "Parent portal",
          "Email support",
        ],
      },
      {
        name: "College",
        monthlyPrice: "৳2,999",
        annualPrice: "৳28,790/yr",
        highlight: true,
        description: "Colleges & universities",
        features: [
          "Unlimited students",
          "Online exams",
          "Advanced reports",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        monthlyPrice: "৳5,999",
        annualPrice: "৳57,590/yr",
        description: "Multi-campus",
        features: [
          "Multi-campus",
          "API access",
          "Custom modules",
          "Dedicated manager",
        ],
      },
    ],
  },
  {
    name: "XiomTickets",
    tagline: "Customer Support Ticketing",
    slug: "xiomtickets",
    plans: [
      {
        name: "Free",
        monthlyPrice: "৳0",
        annualPrice: "৳0",
        description: "Solo support",
        features: ["1 agent", "Email ticketing", "Basic reports"],
      },
      {
        name: "Team",
        monthlyPrice: "৳499/agent",
        annualPrice: "৳4,790/agent/yr",
        description: "Small teams",
        features: [
          "Up to 5 agents",
          "Live chat",
          "SLA tracking",
          "Email support",
        ],
      },
      {
        name: "Pro",
        monthlyPrice: "৳999/agent",
        annualPrice: "৳9,590/agent/yr",
        highlight: true,
        description: "Growing teams",
        features: [
          "Up to 20 agents",
          "Knowledge base",
          "Custom workflows",
          "Priority support",
        ],
      },
      {
        name: "Business",
        monthlyPrice: "৳1,999/agent",
        annualPrice: "৳19,190/agent/yr",
        description: "Enterprise support",
        features: [
          "Advanced automations",
          "Priority routing",
          "Dedicated manager",
          "Phone support",
        ],
      },
    ],
  },
  {
    name: "XiomCare",
    tagline: "Healthcare Management",
    slug: "xiomcare",
    plans: [
      {
        name: "Free",
        monthlyPrice: "৳0",
        annualPrice: "৳0",
        description: "Solo practitioner",
        features: ["Up to 50 patients", "Basic records", "Appointments"],
      },
      {
        name: "Clinic",
        monthlyPrice: "৳1,999",
        annualPrice: "৳19,190/yr",
        description: "Small clinics",
        features: ["Up to 5 doctors", "Full EMR", "Billing", "Email support"],
      },
      {
        name: "Hospital",
        monthlyPrice: "৳4,999",
        annualPrice: "৳47,990/yr",
        highlight: true,
        description: "Multi-department",
        features: [
          "Up to 50 beds",
          "Multi-department",
          "Advanced reports",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        monthlyPrice: "৳9,999",
        annualPrice: "৳95,990/yr",
        description: "Large hospitals",
        features: [
          "Unlimited",
          "API access",
          "Custom reports",
          "Dedicated manager",
        ],
      },
    ],
  },
];

const allPaidFeatures = [
  "SSL-encrypted data storage",
  "Automatic software updates and security patches",
  "Bangla language support (where available)",
  "bKash, Nagad, and card payment processing",
  "Access to documentation and video tutorials",
  "Email support (response time varies by plan)",
  "14-day money-back guarantee on first subscription",
];

const pricingFaqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every paid tier includes a 14-day free trial with full access to all paid features. No credit card required.",
  },
  {
    q: "What happens at the end of my trial?",
    a: "If you do not subscribe, you automatically return to the free tier. Your data is preserved.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, anytime. Upgrades are instant. Downgrades take effect at the next billing cycle.",
  },
  {
    q: "Are there discounts for nonprofits and schools?",
    a: "Yes — 30% off all annual plans for verified NGOs, registered schools, and nonprofits.",
  },
  {
    q: "What payment methods do you accept?",
    a: "bKash, Nagad, Rocket, bank transfer, and Visa/Mastercard via SSL Commerz.",
  },
];

/* ── Main Page ── */
export default function PricingClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number>(-1);

  const faqContentRef = useRef<(HTMLDivElement | null)[]>([]);
  const faqInnerRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  }, []);

  useEffect(() => {
    pricingFaqs.forEach((_, i) => {
      const content = faqContentRef.current[i];
      const inner = faqInnerRef.current[i];
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
        "[data-pricing-product]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-pricing-product]",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef}>
      {products.map((product) => (
        <ProductSchema
          key={product.name}
          name={product.name}
          description={product.tagline}
          image="https://xiomtech.vercel.app/logo.webp"
          offers={product.plans.map((plan) => ({
            price: plan.monthlyPrice.replace(/[^0-9.]/g, ""),
            priceCurrency: "BDT",
            url: `https://xiomtech.vercel.app/products/${product.slug}`,
          }))}
        />
      ))}
      <PageHeader title="Pricing" breadcrumbs={[{ label: "Pricing" }]} />

      <div className="pb-20 px-5 md:px-8 lg:px-16 pt-14">
        {/* ── Toggle & Intro ── */}
        <div className=" max-w-7xl mx-auto mb-12">
          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mb-2">
            Every XiomTech product comes with a free tier and transparent paid
            plans. No hidden fees. No per-module charges. Cancel anytime.
          </p>
          <p className="text-xs text-gray-400 mb-8">
            All prices in BDT (Bangladeshi Taka) and exclude 15% VAT. Annual
            plans save 20%.
          </p>

          {/* ── Toggle ── */}
          <div className="flex items-center gap-3">
            <span
              className={`text-sm font-semibold transition-colors duration-200 ${
                !isAnnual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 size-5 bg-white rounded-full shadow transition-transform duration-300 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold transition-colors duration-200 ${
                isAnnual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* ── Product Pricing Sections ── */}
        <div className=" max-w-7xl mx-auto space-y-16">
          {products.map((product) => (
            <div key={product.name} data-pricing-product>
              {/* Product header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-syne)]">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{product.tagline}</p>
              </div>

              {/* Plans grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative p-5 rounded-xl border transition-all duration-200 ${
                      plan.highlight
                        ? "border-blue-500 bg-blue-50/50 shadow-sm shadow-blue-500/10"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    {plan.highlight && (
                      <span className="absolute -top-2.5 left-4 text-[10px] font-bold text-white bg-blue-600 rounded-full px-2.5 py-0.5">
                        Popular
                      </span>
                    )}
                    <h3 className="text-base font-bold text-gray-900 font-[family-name:var(--font-syne)]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 mb-3">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-syne)]">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice !== "৳0" && (
                        <span className="text-xs text-gray-400 ml-1">
                          {isAnnual ? "" : "/mo"}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 mb-5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <IconCheck
                            size={14}
                            stroke={2}
                            className="text-blue-600 mt-0.5 shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/products/${product.slug}`}>
                      <ShimmerButton
                        variant={plan.highlight ? "primary" : "outline"}
                        className="w-full justify-center text-[11px]"
                      >
                        {plan.monthlyPrice === "৳0"
                          ? "Start Free"
                          : "Get Started"}
                        <ArrowRight size={13} />
                      </ShimmerButton>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Setup note */}
              {product.setupNote && (
                <p className="text-xs text-gray-400 mt-3">
                  {product.setupNote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── International Pricing ── */}
        <div className=" max-w-7xl mx-auto mt-16 p-6 bg-gray-50 rounded-xl border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-2">
            Looking for international (USD) pricing?
          </h3>
          <p className="text-sm text-gray-500 mb-4 max-w-2xl">
            XiomTech products are available to businesses in the UAE, Saudi
            Arabia, UK, and beyond. Contact us for Gulf and international
            pricing in USD or SAR.
          </p>
          <Link href="/contact">
            <ShimmerButton variant="outline">
              Contact for Pricing
              <ArrowRight size={14} />
            </ShimmerButton>
          </Link>
        </div>

        {/* ── All Paid Plans Include ── */}
        <div className=" max-w-7xl mx-auto mt-16">
          <div className="mb-8">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              Included in All Paid Plans
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-syne)]">
              Everything You Need
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allPaidFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-3">
                <IconCheck
                  size={16}
                  stroke={2}
                  className="text-blue-600 mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pricing FAQ ── */}
        <div className=" max-w-7xl mx-auto mt-16">
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold text-blue-600 border border-blue-500/30 rounded-full px-4 py-1.5 tracking-wide mb-5">
              Common Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-syne)]">
              Pricing FAQ
            </h2>
          </div>
          <div className=" max-w-6xl mx-auto">
            {pricingFaqs.map((item, i) => (
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
                    className={`shrink-0 size-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
                      openFaq === i
                        ? "bg-blue-600 border-blue-600 text-white rotate-0"
                        : "bg-transparent border-gray-300 text-gray-400 rotate-180"
                    }`}
                  >
                    <IconChevronUp size={16} stroke={2} />
                  </span>
                </button>
                <div
                  ref={(el) => {
                    faqContentRef.current[i] = el;
                  }}
                  className="overflow-hidden h-0"
                >
                  <div
                    ref={(el) => {
                      faqInnerRef.current[i] = el;
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

        {/* ── Bottom CTA ── */}
        <div className=" max-w-7xl mx-auto mt-16 pt-10 border-t border-gray-100">
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/faq">
              <ShimmerButton variant="outline">
                View Full FAQ
                <ArrowRight size={14} />
              </ShimmerButton>
            </Link>
            <Link href="/contact">
              <ShimmerButton variant="primary">
                Contact Us
                <ArrowRight size={14} />
              </ShimmerButton>
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Prices exclude 15% VAT applicable for Bangladesh customers. All
            prices subject to change with 30 days&apos; notice to existing
            subscribers.
          </p>
        </div>
      </div>
    </main>
  );
}
