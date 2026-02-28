import ServiceSchema from "@/components/schema/ServiceSchema";
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
    localContext: string;
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
    localContext:
      "Our solutions are built for the Bangladeshi market from the ground up. XiomPOS supports Mushak 6.3 VAT challan generation required by the National Board of Revenue (NBR), and integrates directly with bKash, Nagad, and Rocket mobile payment gateways — the dominant payment channels for retail and restaurant businesses in Dhaka, Chittagong, and across the country. We also support NBR e-filing and automated VAT return preparation to keep your business fully compliant.",
  },
  uae: {
    displayName: "United Arab Emirates",
    adjective: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    highlights: [
      "FTA VAT-compliant billing & invoicing",
      "Arabic & English bilingual support",
      "Cloud-first infrastructure on AWS Middle East (Bahrain)",
    ],
    localContext:
      "XiomTech solutions are purpose-built for the UAE market. We ensure full compliance with the Federal Tax Authority (FTA) 5% VAT regulations, including Tax Registration Number (TRN) validation on every invoice. Our POS and ERP systems integrate with popular Dubai payment gateways like Network International and Telr, and support Arabic/English bilingual interfaces critical for businesses operating in Dubai, Abu Dhabi, Sharjah, and across the Emirates. Infrastructure runs on AWS Middle East (Bahrain) for ultra-low latency and DIFC/ADGM data residency compliance.",
  },
  "saudi-arabia": {
    displayName: "Saudi Arabia",
    adjective: "Saudi",
    flag: "🇸🇦",
    currency: "SAR",
    highlights: [
      "ZATCA Phase 2 e-invoicing compliant",
      "Arabic RTL interface support",
      "Saudi Vision 2030 digital transformation alignment",
    ],
    localContext:
      "XiomTech is fully aligned with Saudi Arabia's digital transformation agenda under Vision 2030. Our POS and ERP systems are ZATCA Phase 2 (Fatoorah) e-invoicing compliant, generating QR-coded tax invoices with UUID, cryptographic stamps, and XML reporting as mandated by the Zakat, Tax and Customs Authority. We integrate with SADAD for bill payments and support Mada debit card processing. All systems feature full Arabic RTL interfaces and are hosted on regional cloud infrastructure for compliance with Saudi data localization requirements.",
  },
  qatar: {
    displayName: "Qatar",
    adjective: "Qatari",
    flag: "🇶🇦",
    currency: "QAR",
    highlights: [
      "Custom ERP for hospitality & retail",
      "Multilingual support (Arabic/English)",
      "QCB regulatory compliance",
    ],
    localContext:
      "Our enterprise solutions support Qatar's National Vision 2030 digital economy goals. XiomTech systems comply with Qatar Central Bank (QCB) payment regulations and integrate with NAPS (National Payment System) for seamless domestic transactions. We deliver tailored hospitality and retail ERP solutions for businesses in Doha and across Qatar, with Arabic/English bilingual interfaces and cloud hosting that meets Qatar Financial Centre (QFC) data compliance standards.",
  },
  indonesia: {
    displayName: "Indonesia",
    adjective: "Indonesian",
    flag: "🇮🇩",
    currency: "IDR",
    highlights: [
      "Aplikasi Kasir (POS) for retail & F&B",
      "Bahasa Indonesia interface",
      "DJP e-Faktur tax integration",
    ],
    localContext:
      "XiomTech delivers solutions tailored for Indonesia's rapidly growing digital economy. Our POS systems (Aplikasi Kasir) integrate with DJP e-Faktur for automated tax invoice generation as required by the Direktorat Jenderal Pajak. We support popular Indonesian digital wallets including GoPay, OVO, DANA, and ShopeePay, and comply with OJK (Otoritas Jasa Keuangan) fintech regulations. Our systems feature full Bahasa Indonesia interfaces and are optimized for businesses across Jakarta, Surabaya, Bandung, and the wider Indonesian archipelago.",
  },
  turkey: {
    displayName: "Turkey",
    adjective: "Turkish",
    flag: "🇹🇷",
    currency: "TRY",
    highlights: [
      "e-Fatura / e-Arşiv electronic invoicing",
      "Turkish language interface (Yazılım Çözümleri)",
      "Manufacturing & B2B software solutions",
    ],
    localContext:
      "XiomTech solutions are built to comply with Turkey's strict electronic invoicing requirements. Our ERP and POS systems support e-Fatura and e-Arşiv Fatura as mandated by the Turkish Revenue Administration (GİB — Gelir İdaresi Başkanlığı), including automated XML generation and GİB portal submission. We integrate with popular Turkish payment processors including iyzico and Papara, and provide full Turkish language interfaces. Our solutions serve manufacturing, export, and B2B businesses across Istanbul, Ankara, and İzmir.",
  },
  egypt: {
    displayName: "Egypt",
    adjective: "Egyptian",
    flag: "🇪🇬",
    currency: "EGP",
    highlights: [
      "ETA e-invoicing compliant",
      "Hospital management (XiomCare) for healthcare",
      "Fawry & Vodafone Cash integration",
    ],
    localContext:
      "XiomTech delivers digital solutions purpose-built for the Egyptian market. Our systems comply with the Egyptian Tax Authority (ETA) mandatory e-invoicing requirements, generating signed electronic invoices with the required QR codes and digital stamps. We integrate with Fawry — Egypt's leading electronic payment network — and Vodafone Cash for mobile payments, critical for reaching customers across Cairo, Alexandria, and rural Egypt. XiomCare, our hospital management platform, is especially tailored for Egyptian healthcare providers navigating ITIDA (Information Technology Industry Development Agency) digital compliance.",
  },
  nigeria: {
    displayName: "Nigeria",
    adjective: "Nigerian",
    flag: "🇳🇬",
    currency: "NGN",
    highlights: [
      "FIRS tax compliance ready",
      "Paystack & Flutterwave payment integration",
      "Reliable offline-capable POS system",
    ],
    localContext:
      "XiomTech solutions are designed to thrive in Nigeria's dynamic business environment. Our POS and accounting systems support FIRS (Federal Inland Revenue Service) tax compliance, including automated VAT calculations and withholding tax reports. We integrate natively with Paystack and Flutterwave — Nigeria's leading payment processors — and support offline-first architecture critical for businesses in Lagos, Abuja, and across Nigeria where internet connectivity can be intermittent. XiomEdu serves the growing Nigerian edtech sector, and XiomCare powers hospital management within the CBN (Central Bank of Nigeria) fintech regulatory framework.",
  },
  oman: {
    displayName: "Oman",
    adjective: "Omani",
    flag: "🇴🇲",
    currency: "OMR",
    highlights: [
      "Oman Tax Authority VAT compliance",
      "thawani & OmanNet payment integration",
      "Enterprise ERP & custom development",
    ],
    localContext:
      "XiomTech delivers enterprise solutions tailored for the Omani market. Our POS and ERP systems are fully compliant with the Oman Tax Authority's VAT regulations, including automated 5% VAT calculation and tax return preparation. We integrate with thawani and OmanNet payment gateways for seamless domestic transactions, and provide Arabic/English bilingual interfaces. Our solutions serve businesses across Muscat and throughout Oman, with cloud hosting that meets Information Technology Authority (ITA) Oman data compliance and digital governance requirements.",
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
    alternates: {
      canonical: `/solutions/${country}`,
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    return (
      <main className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Country not found</h1>
        <p className="mt-4 text-gray-600">
          Please check the URL and try again.
        </p>
        <Link
          href="/"
          className="text-blue-600 mt-6 inline-block hover:underline"
        >
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20 px-6">
      <ServiceSchema
        name={`XiomTech Software Solutions - ${data.displayName}`}
        description={`Enterprise software development, POS, and SaaS solutions tailored for the ${data.displayName} market. ${data.localContext}`}
        url={`https://www.xiomtech.net/solutions/${country}`}
        areaServed={[{ "@type": "Country", name: data.displayName }]}
      />
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
      <div className=" max-w-6xl mx-auto mx-auto mb-16">
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

      {/* Local Market Expertise */}
      <div className=" max-w-6xl mx-auto mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-syne)] text-center">
          Our Expertise in the {data.displayName} Market
        </h2>
        <p className="text-gray-600 leading-relaxed text-base">
          {data.localContext}
        </p>
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
