type FaqItem = {
  question: string;
  answer: string;
};

type FaqSchemaProps = {
  items: FaqItem[];
};

export default function FaqSchema({ items }: FaqSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structure requires this
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
