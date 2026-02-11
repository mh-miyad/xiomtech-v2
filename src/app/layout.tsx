import Footer from "@/components/common/Footer";
import JsonLd from "@/components/common/JsonLd";
import Navbar from "@/components/common/Navbar";
import SmoothScroll from "@/components/common/SmoothScroll";
import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://xiomtech.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "XiomTech — Premier Digital Agency | Web Development, SaaS & AI Solutions",
    template: "%s | XiomTech",
  },
  description:
    "XiomTech is a top-tier digital agency and algorithmic revenue engineering firm. We build enterprise-grade web applications, SaaS platforms, mobile apps, AI-powered solutions, and custom software. Trusted by businesses in Bangladesh, UAE, Saudi Arabia, Qatar & beyond.",
  keywords: [
    // Core brand + misspelling variations
    "XiomTech",
    "Xiom Tech",
    "xiomtech digital agency",
    "xiom",
    "xiom tech",
    "axiom tech",
    "axiomtech",
    "giom tech",
    "giomtech",
    "ziom tech",
    "ziomtech",
    "jiom tech",
    "jiomtech",
    "xiotech",
    "ximtech",
    "xiomtec",
    "xiom technology",
    "xiom digital",
    "xiom agency",
    "xiom software",
    "xiom it company",
    "xiom web development",
    "xiomtech bd",
    "xiomtech bangladesh",
    // Primary services
    "web development agency",
    "custom web application development",
    "SaaS development company",
    "SaaS platform development",
    "mobile app development company",
    "cross-platform mobile apps",
    "AI solutions provider",
    "machine learning development",
    "enterprise software development",
    "e-commerce development",
    "UI/UX design agency",
    "cloud architecture services",
    // Technology keywords
    "Next.js development",
    "React development company",
    "Node.js development",
    "TypeScript experts",
    "full-stack development",
    "React Native app development",
    "Flutter app development",
    // Industry keywords
    "digital transformation agency",
    "ERP system development",
    "POS system development",
    "custom CRM development",
    "fintech development",
    "edtech solutions",
    // Geographic keywords
    "digital agency Bangladesh",
    "software company Dhaka",
    "web development Dubai",
    "IT company UAE",
    "software development Saudi Arabia",
    "tech company Qatar",
    "best digital agency South Asia",
    // Authority keywords
    "algorithmic revenue engineering",
    "entity SEO agency",
    "top software development firm",
    "award-winning digital agency",
    "enterprise B2B development",
    "startup MVP development",
  ],
  authors: [
    { name: "XiomTech", url: BASE_URL },
    { name: "Mahamudul Hasan Miyad" },
  ],
  creator: "XiomTech",
  publisher: "XiomTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "XiomTech",
    title:
      "XiomTech — Premier Digital Agency | Web Development, SaaS & AI Solutions",
    description:
      "Enterprise-grade web applications, SaaS platforms, mobile apps, and AI-powered solutions. Trusted by 50+ global firms across Bangladesh, UAE, Saudi Arabia & Qatar.",
    images: [
      {
        url: `${BASE_URL}/logo.webp`,
        width: 512,
        height: 512,
        alt: "XiomTech - Premier Digital Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "XiomTech — Premier Digital Agency | Web Development, SaaS & AI Solutions",
    description:
      "Enterprise-grade web apps, SaaS platforms & AI solutions. Top digital agency serving Bangladesh, UAE, Saudi Arabia & Qatar.",
    images: [`${BASE_URL}/logo.webp`],
    creator: "@xiomtech",
  },
  category: "technology",
  verification: {
    google: "i2xDaeI_WGRld9xi5E2so4E057YAqAmky_Hj_pPF_IM",
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch & Preconnect for faster external resource loading */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <link
          rel="preconnect"
          href="https://flagcdn.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data (JSON-LD) */}
        <JsonLd />
      </head>
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
