import JsonLd from "@/components/common/JsonLd";
import { DirectionProvider } from "@/components/ui/direction";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic, Syne } from "next/font/google";
import { Toaster } from "sonner";
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
const fontSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans",
});
const BASE_URL = "https://www.xiomtech.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "XiomTech — Global Software Development Company  | Enterprise IT , SaaS & AI Solutions",
    template: "%s | XiomTech",
  },
  description:
    "XiomTech is a global software development company that engineers enterprise-grade web applications, SaaS platforms, AI-powered solutions, and custom software to help businesses scale. From POS and ERP systems to mobile apps and cloud architecture — we deliver measurable results for companies across Saudi Arabia, UAE, Qatar, Bangladesh, and beyond.",
  keywords: [
    // Core brand
    "XiomTech",
    "Xiom Tech",
    "xiomtech",
    "axiom tech",
    "axiomtech",
    "xiom software",
    "xiomtech bangladesh",
    // Primary services
    "custom web application development",
    "SaaS development company",
    "SaaS platform development",
    "mobile app development company",
    "AI solutions provider",
    "enterprise software development",
    "e-commerce development",
    "cloud architecture services",
    // Technology
    "Next.js development",
    "React development company",
    "Node.js development",
    "TypeScript experts",
    "full-stack development",
    // Industry
    "ERP system development",
    "POS system development",
    "custom CRM development",
    "fintech development",
    "edtech solutions",
    // Geographic
    "software company Bangladesh",
    "software company Dhaka",
    "software development Saudi Arabia",
    "IT company UAE",
    "tech company Qatar",
    // Products
    "XiomPOS",
    "XiomHRM",
    "XiomAccounts",
    "XiomEdu",
    "XiomCare",
    "XiomTickets",
    "XiomOS",
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
    <html lang="en" dir="ltr" className={fontSans.variable}>
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
        <DirectionProvider dir="ltr">
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
