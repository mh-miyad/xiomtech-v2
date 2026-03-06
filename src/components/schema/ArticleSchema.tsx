const BASE_URL = "https://xiomtech.net";

type ArticleSchemaProps = {
  headline: string;
  description: string;
  image?: string;
  datePublished: string; // ISO 8601
  dateModified?: string; // ISO 8601
  url: string; // e.g. "/blog/my-post"
  author: {
    name: string;
    url?: string;
  };
  category?: string;
  keywords?: string[];
  wordCount?: number;
  publisher?: {
    name: string;
    logo: string;
  };
};

export default function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  url,
  author,
  category,
  keywords,
  wordCount,
  publisher = {
    name: "XiomTech",
    logo: `${BASE_URL}/logo.webp`,
  },
}: ArticleSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    headline,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    url: fullUrl,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      logo: {
        "@type": "ImageObject",
        url: publisher.logo,
      },
    },
    isPartOf: {
      "@type": "Blog",
      name: "XiomTech Blog",
      url: `${BASE_URL}/blog`,
    },
  };

  // Conditionally add optional fields
  if (image) schema.image = image;
  if (category) schema.articleSection = category;
  if (keywords?.length) schema.keywords = keywords.join(", ");
  if (wordCount) schema.wordCount = wordCount;

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structure requires this
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

