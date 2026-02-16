type ServiceSchemaProps = {
  name: string;
  description: string;
  areaServed: {
    "@type": "Country";
    name: string;
  }[];
  url: string;
  provider?: {
    name: string;
    image: string;
  };
};

export default function ServiceSchema({
  name,
  description,
  areaServed,
  url,
  provider = {
    name: "XiomTech",
    image: "https://xiomtech.vercel.app/logo.webp",
  },
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "Organization",
      name: provider.name,
      image: provider.image,
    },
    areaServed: areaServed,
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structure requires this
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
