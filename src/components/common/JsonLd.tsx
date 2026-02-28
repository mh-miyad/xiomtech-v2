/* ── Structured Data (JSON-LD) for SEO ── */

const BASE_URL = "https://www.xiomtech.net/";

/* ── Organization Schema ── */
const organizationSchema = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "XiomTech",
  alternateName: [
    "Xiom Tech",
    "Xiom",
    "XIOMTECH",
    "XiomTechnology",
    "Xiom Technology",
    "Axiom Tech",
    "AxiomTech",
    "Giom Tech",
    "GiomTech",
    "Ziom Tech",
    "ZiomTech",
    "Jiom Tech",
    "JiomTech",
    "XioTech",
    "XimTech",
    "Xiom Digital",

    "Xiom Software",
    "XiomTech BD",
    "XiomTech Bangladesh",
  ],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.webp`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/logo.webp`,
  description:
    "XiomTech — the #1 Software Development Company  and algorithmic revenue engineering firm. We engineer enterprise-grade web applications, SaaS platforms, AI-powered solutions, mobile apps, and custom software. Home of XiomPOS, XiomHRM, XiomAccounts, XiomEdu, XiomCare & XiomTickets — a complete product ecosystem built on XiomOS. Trusted by 50+ global firms across Saudi Arabia, Dubai, Qatar, Asia & beyond.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/#founder`,
    name: "Mahamudul Hasan Miyad",
    jobTitle: "Founder & CTO",
    url: BASE_URL,
    worksFor: { "@id": `${BASE_URL}/#organization` },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+880-1822-830775",
      contactType: "customer service",
      email: "info.xiomtech@gmail.com",
      availableLanguage: ["English", "Bengali", "Arabic"],
      areaServed: [
        "BD",
        "AE",
        "SA",
        "QA",
        "US",
        "GB",
        "ID",
        "TR",
        "EG",
        "NG",
        "OM",
      ],
    },
  ],
  sameAs: [
    "https://www.facebook.com/xiomtech",
    "https://www.instagram.com/xiomtech",
    "https://www.linkedin.com/company/xiomtech",
    "https://x.com/xiomtech",
    "https://dribbble.com/xiomtech",
    "https://github.com/mh-miyad",
  ],
  areaServed: [
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "Turkey" },
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Country", name: "Oman" },
  ],
  knowsAbout: [
    "Web Development",
    "SaaS Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "UI/UX Design",
    "Cloud Architecture",
    "E-Commerce Development",
    "Enterprise Software",
    "Digital Transformation",
    "Entity SEO",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "POS Systems",
    "HRM Software",
    "Accounting Software",
    "Education Technology",
    "Customer Support Software",
    "Ticketing Systems",
  ],
};

/* ── WebSite Schema ── */
const websiteSchema = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "XiomTech",
  description:
    "Global  Software Development Company  delivering enterprise-grade web development, SaaS platforms, AI solutions, and custom software.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ── ProfessionalService Schema ── */
const serviceSchema = {
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#service`,
  name: "XiomTech Software Development Company ",
  image: `${BASE_URL}/logo.webp`,
  url: BASE_URL,
  telephone: "+880-1822-830775",
  email: "info.xiomtech@gmail.com",
  priceRange: "$$$",
  description:
    "Full-stack Software Development Company  offering web development, SaaS platforms, mobile apps, AI integrations, and UI/UX design. Trusted by businesses in Bangladesh, UAE, Saudi Arabia, Qatar, and beyond.",
  areaServed: [
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "Turkey" },
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "Nigeria" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Web Development",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Application Development",
              description:
                "Enterprise-grade web applications built with Next.js, React, and TypeScript for maximum performance and scalability.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Platform Development",
              description:
                "End-to-end SaaS product development from MVP to enterprise scale with modern cloud architecture.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Development",
              description:
                "High-performance e-commerce solutions with AI-powered product recommendations, payment gateway integration, and conversion optimization.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Mobile & AI",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description:
                "Cross-platform and native mobile applications using React Native, Flutter, Swift, and Kotlin.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Machine Learning Solutions",
              description:
                "AI transformation services including predictive analytics, machine learning models, and personalized customer experiences.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Design & Cloud",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description:
                "Enterprise-grade UI/UX design systems for scalable SaaS products, backed by data-driven usability research and conversion optimization.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Architecture & DevOps",
              description:
                "Scalable cloud infrastructure on AWS, Google Cloud, and Vercel with CI/CD pipelines, containerized deployments, and 99.9% uptime SLA.",
            },
          },
        ],
      },
    ],
  },
};

/* ── FAQ Schema ── */
const faqSchema = {
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I start a project with XiomTech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starting a project with us is simple. Just reach out through our contact form or email, and share a brief about your needs. We'll schedule a call to understand your goals, discuss the scope, and recommend the right approach tailored to your product or brand.",
      },
    },
    {
      "@type": "Question",
      name: "What services does XiomTech offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in custom web development, ERP systems, POS solutions, KMS (Knowledge Management Systems), SaaS platforms, mobile applications, and UI/UX design. From MVPs to enterprise-grade solutions, we deliver end-to-end digital products.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary based on project complexity. A standard website takes 2–4 weeks, while ERP or POS systems may take 6–12 weeks. We always provide a clear roadmap and milestones before starting so you know exactly what to expect.",
      },
    },
    {
      "@type": "Question",
      name: "Is XiomTech suitable for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We work with startups, SMEs, and enterprises alike. For startups, we offer flexible engagement models and can help you build an MVP quickly to validate your idea before scaling further.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our core stack includes Next.js, React, Node.js, TypeScript, and Tailwind CSS for frontend and full-stack work. For backend and infrastructure, we leverage PostgreSQL, MongoDB, AWS, Docker, and AI/ML integrations where needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing maintenance, performance monitoring, and feature updates post-launch. Our support plans are flexible—whether you need dedicated hours or on-demand assistance, we've got you covered.",
      },
    },
  ],
};

/* ── BreadcrumbList Schema ── */
const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

/* ── XiomPOS Product Schema (for star ratings in Google) ── */
const posProductSchema = {
  "@type": "Product",
  name: "XiomPOS - Best POS Software in Bangladesh",
  image: `${BASE_URL}/xiom/xiompos.png`,
  description:
    "The most advanced cloud-based Point of Sale (POS) system for retail and restaurants in Bangladesh. Features include Inventory, VAT, and Offline mode.",
  brand: {
    "@type": "Brand",
    name: "XiomTech",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "125",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/products/xiompos`,
    priceCurrency: "BDT",
    price: "15000",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  },
};

/* ── Combined Graph ── */
const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    serviceSchema,
    faqSchema,
    breadcrumbSchema,
    posProductSchema,
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
