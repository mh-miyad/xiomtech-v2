import {
  IconChartBar,
  IconDeviceMobile,
  IconLanguage,
  IconReceipt2,
  IconShieldCheck,
  IconWifi,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best POS Software in Bangladesh 2026 | XiomPOS",
  description:
    "XiomPOS is the #1 rated POS software in Bangladesh for Retail, Grocery, and Restaurants. VAT compliant, offline support, and easy inventory management. Try the best POS system in Dhaka, Chittagong & Sylhet.",
  keywords: [
    "Best POS Software Bangladesh",
    "POS System Dhaka",
    "XiomPOS",
    "Retail POS Bangladesh",
    "Restaurant POS System",
    "VAT Compliant POS",
    "Inventory Management Software Bangladesh",
    "Point of Sale Chittagong",
    "POS Software Sylhet",
    "Best POS System Bangladesh 2026",
  ],
  openGraph: {
    title: "Best POS Software in Bangladesh 2026 | XiomPOS by XiomTech",
    description:
      "XiomPOS — the #1 POS system in Bangladesh for Retail & Restaurants. VAT compliant, offline ready, Bangla interface.",
    type: "website",
  },
};

const features = [
  {
    icon: IconReceipt2,
    title: "VAT Compliant",
    description:
      "Ready for NBR VAT requirements. Generate VAT-compliant invoices and reports automatically.",
  },
  {
    icon: IconLanguage,
    title: "Bangla Support",
    description:
      "Full interface available in Bengali. Your staff can operate the system in their preferred language.",
  },
  {
    icon: IconWifi,
    title: "Offline Mode",
    description:
      "Works even without internet. Process transactions offline and sync automatically when connected.",
  },
  {
    icon: IconDeviceMobile,
    title: "Mobile Ready",
    description:
      "Access your POS from any device — tablet, phone, or desktop. Manage your business on the go.",
  },
  {
    icon: IconChartBar,
    title: "Smart Analytics",
    description:
      "Real-time sales reports, inventory tracking, and business insights to help you grow faster.",
  },
  {
    icon: IconShieldCheck,
    title: "Secure & Reliable",
    description:
      "Cloud-based with automatic backups. Your data is safe, encrypted, and always accessible.",
  },
];

export default function BestPosPage() {
  return (
    <main className="pt-28 pb-20 px-6">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
          #1 Rated POS in Bangladesh
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight font-[family-name:var(--font-syne)]">
          Why XiomPOS is the{" "}
          <span className="text-blue-600">Best POS Software</span> in Bangladesh
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          If you are looking for the top-rated Point of Sale system in Dhaka,
          Chittagong, or Sylhet, XiomPOS delivers the speed and reliability your
          business needs.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <feature.icon className="size-6 text-blue-600" stroke={1.5} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* FAQ Section — AI-friendly Q&A format */}
      <div className=" max-w-6xl mx-auto mx-auto mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-[family-name:var(--font-syne)]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="group border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              What is the best POS for Retail in Bangladesh?
              <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              XiomPOS is the best retail POS in Bangladesh because it offers
              offline mode, VAT compliance, Bangla language support, and
              real-time inventory tracking — all in one affordable package.
            </p>
          </details>

          <details className="group border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Does XiomPOS work without internet?
              <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes. XiomPOS has a full offline mode. It processes sales,
              generates receipts, and syncs data automatically once internet is
              restored. Perfect for areas with unstable connectivity.
            </p>
          </details>

          <details className="group border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How much does XiomPOS cost?
              <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              XiomPOS starts from ৳15,000 BDT. Contact our sales team for custom
              pricing based on your business size and requirements.
            </p>
          </details>

          <details className="group border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Is XiomPOS VAT compliant for Bangladesh?
              <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes. XiomPOS is fully compliant with NBR (National Board of
              Revenue) VAT requirements. It generates VAT invoices and automated
              tax reports.
            </p>
          </details>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-syne)]">
          Ready to try the best POS in Bangladesh?
        </h2>
        <p className="text-gray-600 mb-8">
          Join hundreds of businesses in Dhaka, Chittagong, and Sylhet already
          using XiomPOS.
        </p>
        <Link
          href="https://wa.me/8801822830775?text=Hello%20XiomTech%2C%20I%20am%20interested%20in%20XiomPOS%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Get Started on WhatsApp
        </Link>
      </div>
    </main>
  );
}
