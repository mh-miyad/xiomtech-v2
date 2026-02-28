type WebPageSchemaProps = {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
};

export default function WebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      "@type": "Organization",
      name: "XiomTech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.xiomtech.net/logo.webp",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structure requires this
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
