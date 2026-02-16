"use client";
import PageHeader from "@/components/common/PageHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/* ── Terms Sections ── */

type TermsContent = {
  text: string;
  subtitle?: string;
  list?: string[];
};

type TermsSection = {
  title: string;
  content: TermsContent[];
};

const sections: TermsSection[] = [
  {
    title: "1. Acceptance of Terms",
    content: [
      {
        text: "By creating an account, purchasing a subscription, or otherwise using our services, you confirm that:",
        list: [
          "You are at least 18 years of age",
          "You have the legal authority to enter into these Terms on behalf of yourself or your organization",
          "All information you provide is accurate and complete",
        ],
      },
    ],
  },
  {
    title: "2. Description of Services",
    content: [
      {
        text: "XiomTech provides cloud-based software products including XiomPOS, XiomHR, XiomAccounts, XiomEdu, XiomTickets, and XiomCare, as well as custom software development services. The specific features and capabilities of each product are described in the respective product documentation.",
      },
      {
        text: "We reserve the right to modify, suspend, or discontinue any service or feature at any time with reasonable notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.",
      },
    ],
  },
  {
    title: "3. Accounts and Registration",
    content: [
      {
        subtitle: "Account creation:",
        text: "You must register for an account to access most of our paid services. You are responsible for providing accurate, current, and complete registration information.",
      },
      {
        subtitle: "Account security:",
        text: "You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately at support@xiomtech.net of any unauthorized use of your account. We are not liable for losses resulting from unauthorized use of your account due to your failure to maintain security.",
      },
      {
        subtitle: "One account per user:",
        text: "Each account may only be used by one person unless you have a multi-user subscription plan that explicitly permits additional seats.",
      },
    ],
  },
  {
    title: "4. Subscriptions and Payments",
    content: [
      {
        subtitle: "Billing:",
        text: "XiomTech products are offered on a subscription basis, billed monthly or annually as selected at the time of purchase. By subscribing, you authorize us to charge your chosen payment method on a recurring basis.",
      },
      {
        subtitle: "Taxes:",
        text: "Prices displayed on our website do not include applicable taxes (including VAT at 15% for Bangladesh). Applicable taxes will be added to your invoice.",
      },
      {
        subtitle: "Free tiers:",
        text: "Some products offer permanent free tiers with limited functionality. Free tiers do not require payment information and may be used indefinitely subject to usage limits described in each product.",
      },
      {
        subtitle: "Free trials:",
        text: "Where offered, free trials provide access to paid features for a limited period. We may ask for payment information at the start of a trial; you will not be charged until the trial period ends.",
      },
      {
        subtitle: "Upgrades and downgrades:",
        text: "You may upgrade or downgrade your subscription tier at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of the next billing cycle.",
      },
      {
        subtitle: "Refunds:",
        text: "We offer a 14-day money-back guarantee for new subscriptions. After 14 days, payments are non-refundable except where required by applicable law. If you believe you were charged in error, contact billing@xiomtech.net within 30 days of the charge.",
      },
    ],
  },
  {
    title: "5. Acceptable Use",
    content: [
      {
        text: "You agree not to use XiomTech services to:",
        list: [
          "Violate any applicable law, regulation, or third-party rights",
          "Upload or transmit malicious code, viruses, or harmful content",
          "Attempt to gain unauthorized access to our systems or other users' accounts",
          "Use our services to send spam or unsolicited communications",
          "Reverse-engineer, decompile, or attempt to extract source code from our products",
          "Resell or sublicense our services without written authorization",
          "Use our services in any manner that could damage, disable, or impair our infrastructure",
        ],
      },
      {
        text: "We reserve the right to suspend or terminate accounts that violate these terms without refund.",
      },
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      {
        subtitle: "Our content:",
        text: "All content, features, and functionality of XiomTech's products and website — including but not limited to software, text, graphics, logos, and trademarks — are owned by XiomTech and protected by applicable intellectual property laws.",
      },
      {
        subtitle: "Your content:",
        text: "You retain ownership of all data and content you upload to or create within XiomTech products. By uploading content, you grant XiomTech a limited, non-exclusive license to store, process, and display that content solely for the purpose of providing the services to you.",
      },
      {
        subtitle: "Feedback:",
        text: "If you provide feedback or suggestions about our products, we may use that feedback without any obligation to you.",
      },
    ],
  },
  {
    title: "7. Data and Privacy",
    content: [
      {
        text: "Your use of XiomTech services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at xiomtech.net/privacy-policy.",
      },
      {
        text: "We process your data as described in the Privacy Policy and will not sell your data to third parties.",
      },
    ],
  },
  {
    title: "8. Availability and Uptime",
    content: [
      {
        text: "We target 99.9% uptime for all production XiomTech products. Scheduled maintenance windows will be communicated at least 24 hours in advance where possible. We are not liable for service interruptions caused by circumstances outside our reasonable control, including internet outages, third-party infrastructure failures, or force majeure events.",
      },
    ],
  },
  {
    title: "9. Disclaimers and Limitation of Liability",
    content: [
      {
        subtitle: "Disclaimer:",
        text: 'XiomTech services are provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the services will be error-free, uninterrupted, or free of harmful components.',
      },
      {
        subtitle: "Limitation of liability:",
        text: "To the maximum extent permitted by applicable law, XiomTech's total liability to you for any claims arising from these Terms or your use of our services shall not exceed the total amount you paid to us in the 3 months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages.",
      },
    ],
  },
  {
    title: "10. Termination",
    content: [
      {
        subtitle: "By you:",
        text: "You may cancel your account at any time through your account settings or by contacting support@xiomtech.net. Cancellation takes effect at the end of the current billing cycle.",
      },
      {
        subtitle: "By us:",
        text: "We may suspend or terminate your account immediately if you breach these Terms, fail to pay amounts owed, or engage in fraudulent activity. We may also terminate services with 30 days' notice for other reasons.",
      },
      {
        subtitle: "Effect of termination:",
        text: "Upon termination, your right to use the services ends. You may export your data within 30 days of termination, after which we may delete it.",
      },
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      {
        text: "These Terms are governed by the laws of the People's Republic of Bangladesh. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh, unless otherwise agreed in writing.",
      },
    ],
  },
  {
    title: "12. Changes to These Terms",
    content: [
      {
        text: "We may update these Terms from time to time. We will notify you of material changes by email or through an in-product notice at least 14 days before changes take effect. Continued use of our services after the effective date constitutes acceptance of the updated Terms.",
      },
    ],
  },
  {
    title: "13. Contact",
    content: [
      {
        text: "For questions about these Terms, contact: XiomTech — Email: legal@xiomtech.net — Website: xiomtech.net/contact",
      },
    ],
  },
];

export default function TermsOfServicePage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-terms-section]",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-terms-section]",
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
        title="Terms of Service"
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <div className="pb-20 px-5 md:px-8 lg:px-16 pt-14">
        <div className="max-w-[1700px] mx-auto">
          <p className="text-sm text-gray-500 mb-2">
            <strong>Last updated:</strong> April 2026
          </p>
          <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed  max-w-6xl mx-auto mb-4">
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of XiomTech&apos;s website, products, and services. By accessing
            or using any XiomTech service, you agree to be bound by these Terms.
            If you do not agree, do not use our services.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed  max-w-6xl mx-auto mx-auto mb-14">
            XiomTech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) refers to
            XiomTech, a software company registered in Bangladesh.
          </p>
        </div>

        {/* ── Content ── */}
        <div className="max-w-[1700px] mx-auto space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              data-terms-section
              className=" max-w-6xl mx-auto mx-auto"
            >
              <h2 className="text-lg md:text-xl font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-4 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((block, i) => (
                  <div key={Number(i)}>
                    {block?.subtitle && (
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
                            key={Number(i) + Number(j)}
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

          {/* Back links */}
          <div className="pt-8 border-t border-gray-100 flex items-center gap-5  max-w-6xl mx-auto">
            <Link
              href="/privacy-policy"
              className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
            >
              Privacy Policy →
            </Link>
            <Link
              href="/contact"
              className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
