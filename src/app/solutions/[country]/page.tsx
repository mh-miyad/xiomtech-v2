import type { Metadata } from "next";
import Link from "next/link";

/* ── Country data for dynamic pages ── */
const countryData: Record<
  string,
  {
    displayName: string;
    adjective: string;
    flag: string;
    currency: string;
    highlights: string[];
  }
> = {
  bangladesh: {
    displayName: "Bangladesh",
    adjective: "Bangladeshi",
    flag: "🇧🇩",
    currency: "BDT",
    highlights: [
      "NBR VAT-compliant POS & invoicing",
      "Full Bengali language interface",
      "Offline mode for low-connectivity areas",
    ],
  },
  uae: {
    displayName: "United Arab Emirates",
    adjective: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    highlights: [
      "VAT-ready billing & compliance",
      "Arabic & English bilingual support",
      "Cloud-first infrastructure on AWS Middle East",
    ],
  },
  "saudi-arabia": {
    displayName: "Saudi Arabia",
    adjective: "Saudi",
    flag: "🇸🇦",
    currency: "SAR",
    highlights: [
      "ZATCA e-invoicing compliant",
      "Arabic RTL interface support",
      "Enterprise-grade ERP & POS solutions",
    ],
  },
  qatar: {
    displayName: "Qatar",
    adjective: "Qatari",
    flag: "🇶🇦",
    currency: "QAR",
    highlights: [
      "Custom ERP for hospitality & retail",
      "Multilingual support (Arabic/English)",
      "Cloud solutions with regional compliance",
    ],
  },
  indonesia: {
    displayName: "Indonesia",
    adjective: "Indonesian",
    flag: "🇮🇩",
    currency: "IDR",
    highlights: [
      "Aplikasi Kasir (POS) for retail & F&B",
      "Bahasa Indonesia interface",
      "Scalable cloud solutions for growing businesses",
    ],
  },
  turkey: {
    displayName: "Turkey",
    adjective: "Turkish",
    flag: "🇹🇷",
    currency: "TRY",
    highlights: [
      "E-commerce integration for export businesses",
      "Turkish language interface (Yazılım Çözümleri)",
      "Manufacturing & B2B software solutions",
    ],
  },
  egypt: {
    displayName: "Egypt",
    adjective: "Egyptian",
    flag: "🇪🇬",
    currency: "EGP",
    highlights: [
      "Arabic-first software solutions",
      "Hospital management (XiomCare) for healthcare",
      "Affordable pricing for SMEs",
    ],
  },
  nigeria: {
    displayName: "Nigeria",
    adjective: "Nigerian",
    flag: "🇳🇬",
    currency: "NGN",
    highlights: [
      "Hospital management software (XiomCare)",
      "School management (XiomEdu) for education sector",
      "Reliable offline-capable POS system",
    ],
  },
  oman: {
    displayName: "Oman",
    adjective: "Omani",
    flag: "🇴🇲",
    currency: "OMR",
    highlights: [
      "VAT-compliant business solutions",
      "Arabic & English bilingual software",
      "Enterprise ERP & custom development",
    ],
  },
};

const countrySlugs = Object.keys(countryData);

type Props = { params: Promise<{ country: string }> };

export async function generateStaticParams() {
  return countrySlugs.map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = countryData[country];
  if (!data) {
    return {
      title: "Software Solutions | XiomTech",
    };
  }

  return {
    title: `Top Software & POS Provider in ${data.displayName} | XiomTech`,
    description: `Looking for digital transformation in ${data.displayName}? XiomTech offers XiomPOS, XiomCare, XiomEdu, and custom enterprise software tailored for the ${data.adjective} market.`,
    openGraph: {
      title: `Enterprise Software Solutions in ${data.displayName} | XiomTech`,
      description: `XiomTech helps ${data.adjective} companies scale with XiomPOS, custom ERP, and digital solutions.`,
      type: "website",
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    return (
      <main className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Country not found
        </h1>
        <p className="mt-4 text-gray-600">
          Please check the URL and try again.
        </p>
        <Link href="/" className="text-blue-600 mt-6 inline-block hover:underline">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20 px-6">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-5xl mb-4 block">{data.flag}</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight font-[family-name:var(--font-syne)]">
          Enterprise Software Solutions in{" "}
          <span className="text-blue-600">{data.displayName}</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          XiomTech helps {data.adjective} companies scale with XiomPOS,
          XiomCare, XiomEdu, and custom enterprise software built for the{" "}
          {data.displayName} market.
        </p>
      </div>

      {/* Highlights */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-syne)] text-center">
          Why businesses in {data.displayName} choose XiomTech
        </h2>
        <div className="grid gap-4">
          {data.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-blue-200 transition-colors"
            >
              <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <span className="text-gray-800 font-medium">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-syne)] text-center">
          Our Products for {data.displayName}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              name: "XiomPOS",
              desc: "Cloud-based Point of Sale for retail & restaurants",
            },
            {
              name: "XiomCare",
              desc: "Hospital management system for healthcare providers",
            },
            {
              name: "XiomEdu",
              desc: "School & university management platform",
            },
            {
              name: "XiomHRM",
              desc: "Human resource management for growing teams",
            },
            {
              name: "XiomAccounts",
              desc: "Accounting & financial management software",
            },
            {
              name: "Custom Software",
              desc: "Tailored enterprise solutions for your business",
            },
          ].map((product) => (
            <div
              key={product.name}
              className="p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-syne)]">
          Ready to grow your business in {data.displayName}?
        </h2>
        <p className="text-gray-600 mb-8">
          Contact us today and let&apos;s discuss how XiomTech can help you
          scale.
        </p>
        <Link
          href={`https://wa.me/8801822830775?text=Hello%20XiomTech%2C%20I%20am%20interested%20in%20your%20software%20for%20my%20business%20in%20${data.displayName}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Chat on WhatsApp
        </Link>
      </div>
    </main>
  );
}
