"use client";
import PageHeader from "@/components/common/PageHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Policy Sections ── */
type content = {
  subtitle?: string;
  text: string;
  list?: string[];
};

const sections: { title: string; content: content[] }[] = [
  {
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information you provide to us directly:",
        text: "When you register for an account, purchase a product, contact us, or sign up for a demo, we may collect:",
        list: [
          "Full name",
          "Email address",
          "Phone number",
          "Business name and address",
          "Payment information (processed through secure third-party gateways — we do not store card details)",
          "Any information you include in messages, forms, or support tickets",
        ],
      },
      {
        subtitle: "Information collected automatically:",
        text: "When you visit our website or use our products, we automatically collect:",
        list: [
          "IP address and approximate geographic location",
          "Browser type and version",
          "Operating system",
          "Pages visited and time spent on each page",
          "Referring URL (where you came from before reaching our site)",
          "Device identifiers for mobile applications",
        ],
      },
      {
        subtitle: "Information from third parties:",
        text: "We may receive information about you from third-party services if you connect those services to your XiomTech account (for example, Google login or payment gateway confirmations).",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        text: "We use the information we collect to:",
        list: [
          "Create and manage your account",
          "Process payments and send billing receipts",
          "Provide, maintain, and improve our products and services",
          "Send you service-related communications (onboarding guides, product updates, maintenance notices)",
          "Respond to your inquiries and provide customer support",
          "Send marketing communications you have opted into (you may unsubscribe at any time)",
          "Monitor usage patterns to improve product performance",
          "Comply with legal obligations",
          "Detect and prevent fraud or unauthorized access",
        ],
      },
    ],
  },
  {
    title: "3. Sharing Your Information",
    content: [
      {
        text: "We do not sell your personal information. We may share your information only in the following circumstances:",
      },
      {
        subtitle: "Service providers:",
        text: "We share information with trusted third-party vendors who help us operate our business (cloud hosting, email delivery, analytics, payment processing). These providers are contractually bound to protect your data.",
      },
      {
        subtitle: "Business transfers:",
        text: "If XiomTech is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different Privacy Policy.",
      },
      {
        subtitle: "Legal requirements:",
        text: "We may disclose your information when required to do so by law or in response to valid legal requests by government authorities.",
      },
      {
        subtitle: "With your consent:",
        text: "We may share your information for other purposes with your explicit consent.",
      },
    ],
  },
  {
    title: "4. Data Storage and Security",
    content: [
      {
        text: "Your data is stored on servers located in secure data centers. We use industry-standard security measures including:",
        list: [
          "SSL/TLS encryption for all data in transit",
          "Encryption at rest for sensitive data",
          "Access controls limiting who within our organization can view your data",
          "Regular security reviews and vulnerability assessments",
        ],
      },
      {
        text: "No method of transmission over the internet or electronic storage is 100% secure. While we use commercially reasonable measures to protect your information, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      {
        text: "We retain your personal information for as long as your account is active or as needed to provide you services. If you request deletion of your account, we will delete or anonymize your personal data within 30 days, except where we are legally required to retain certain records (such as billing records for tax purposes, which are retained for 7 years).",
      },
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      {
        text: "Depending on your location, you may have the following rights regarding your personal information:",
        list: [
          "Access — Request a copy of the personal information we hold about you",
          "Correction — Request that we correct inaccurate or incomplete information",
          "Deletion — Request that we delete your personal information",
          "Objection — Object to certain types of processing",
          "Portability — Request a portable copy of your data in a machine-readable format",
          "Withdrawal of consent — Withdraw consent for optional processing at any time",
        ],
      },
      {
        text: "To exercise any of these rights, contact us at: privacy@xiomtech.net. We will respond to all requests within 30 days.",
      },
    ],
  },
  {
    title: "7. Cookies",
    content: [
      {
        text: "Our website uses cookies to improve your browsing experience, remember your preferences, and analyze site traffic. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.",
      },
      {
        text: "Types of cookies we use:",
        list: [
          "Essential cookies — Required for basic website functionality",
          "Analytics cookies — Help us understand how visitors use our site (e.g., Google Analytics)",
          "Preference cookies — Remember your settings and preferences",
        ],
      },
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      {
        text: "Our website and products may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.",
      },
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      {
        text: "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.",
      },
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      {
        text: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated "Last updated" date. For material changes, we will also notify you by email or through a notice within our products.',
      },
    ],
  },
  {
    title: "11. Contact Us About Privacy",
    content: [
      {
        text: "If you have questions, concerns, or requests regarding this Privacy Policy, contact us at:",
      },
      {
        text: "XiomTech — Email: privacy@xiomtech.net — Website: xiomtech.net/contact",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-privacy-section]",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-privacy-section]",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef}>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="pb-20 px-5 md:px-8 lg:px-16 pt-14">
        <div className="max-w-[1700px] mx-auto">
          <p className="text-sm text-gray-500 mb-2">
            <strong>Last updated:</strong> April 2026
          </p>
          <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed  max-w-6xl mx-auto mb-14">
            XiomTech (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
            committed to protecting your personal information and your right to
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website at
            xiomtech.net or use any of our products and services.
          </p>
        </div>

        {/* ── Content ── */}
        <div className="max-w-[1700px] mx-auto space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              data-privacy-section
              className=" max-w-6xl mx-auto"
            >
              <h2 className="text-lg md:text-xl font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-4 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((block, i) => (
                  <div key={i}>
                    {block.subtitle && (
                      <h3 className="text-sm font-bold text-gray-800 mb-1.5">
                        {block.subtitle}
                      </h3>
                    )}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {block.text}
                    </p>
                    {block.list && (
                      <ul className="mt-2.5 space-y-1.5">
                        {block.list.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-gray-500"
                          >
                            <span className="size-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Back link */}
          <div className="pt-8 border-t border-gray-100  max-w-6xl mx-auto">
            <Link
              href="/contact"
              className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
            >
              Have questions? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
