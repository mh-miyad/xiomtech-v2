import SmoothScroll from "@/components/common/SmoothScroll";
import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XiomTech - Digital Agency | Web Development & SaaS Solutions",
  description:
    "Award-winning digital agency specializing in web development, SaaS platforms, UI/UX design, and custom digital experiences that drive real business results.",
  keywords: [
    "web development",
    "digital agency",
    "SaaS",
    "UI/UX design",
    "React",
    "Next.js",
    "XiomTech",
  ],
  openGraph: {
    title: "XiomTech - Digital Agency | Web Development & SaaS Solutions",
    description:
      "Award-winning digital agency specializing in web development, SaaS platforms, and custom digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
