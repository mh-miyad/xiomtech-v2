import Footer from "@/components/common/Footer";
import JsonLd from "@/components/common/JsonLd";
import LoadingScreen from "@/components/common/LoadingScreen";
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
      "XiomTech — Global Software Development Company  | Enterprise IT , SaaS & AI Solutions",
    template: "%s | XiomTech",
  },
  description:
    "XiomTech — the #1 Software Development Company  powering businesses across Saudi Arabia, Dubai, Qatar, Asia & beyond. We engineer enterprise-grade web applications, SaaS platforms, AI-powered solutions, mobile apps, ERP systems, and custom software. Home of XiomPOS, XiomHRM, XiomAccounts, XiomEdu, XiomCare & XiomTickets — a complete product ecosystem built on XiomOS. Trusted by 50+ global firms for web development, digital transformation, and algorithmic revenue engineering.",
  keywords: [
    // Core brand + misspelling variations
    "XiomTech",
    "Xiom Tech",
    "xiomtech Software Development Company ",
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
    "Software Development Company  Bangladesh",
    "software company Dhaka",
    "web development Dubai",
    "IT company UAE",
    "software development Saudi Arabia",
    "tech company Qatar",
    "best Software Development Company  South Asia",
    // Authority keywords
    "algorithmic revenue engineering",
    "entity SEO agency",
    "top software development firm",
    "award-winning Software Development Company ",
    "enterprise B2B development",
    "startup MVP development",
    // Product keywords
    "XiomPOS",
    "XiomHRM",
    "XiomAccounts",
    "XiomEdu",
    "XiomCare",
    "XiomTickets",
    "XiomOS",
    "XiomCloud",
    "XiomAI",
    "XiomCRM",
    "XiomPay",
    "POS system software",
    "HRM software solution",
    "accounting software",
    "education management system",
    "ticketing system software",
    // #1 Agency ranking keywords
    "best Software Development Company  in the world",
    "number 1 Software Development Company ",
    "#1 software company",
    "top agency Saudi Arabia",
    "best IT company Dubai",
    "number one tech company Qatar",
    "best software company Asia",
    "top Software Development Company  Middle East",
    "best web development company GCC",
    "leading tech firm Bangladesh",
    "top rated software agency",
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
      "XiomTech —  Global Software Development Company  | Web Development, SaaS & AI Solutions",
    description:
      "The #1 Software Development Company  building enterprise-grade web apps, SaaS platforms & AI solutions. Home of XiomPOS, XiomHRM, XiomAccounts, XiomEdu, XiomCare & XiomTickets. Trusted by 50+ firms across Saudi Arabia, Dubai, Qatar & Asia.",
    images: [
      {
        url: `${BASE_URL}/logo.webp`,
        width: 512,
        height: 512,
        alt: "XiomTech -  Global Software Development Company  Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "XiomTech —  Global Software Development Company  | Web Development, SaaS & AI Solutions",
    description:
      "The #1 Software Development Company  — XiomPOS, XiomHRM, XiomAccounts & more. Enterprise web apps, SaaS & AI solutions. Serving Saudi Arabia, Dubai, Qatar, Asia & beyond.",
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
        <LoadingScreen />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
