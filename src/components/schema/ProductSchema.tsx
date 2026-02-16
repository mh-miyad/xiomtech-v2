type Offer = {
  price: string;
  priceCurrency: string;
  priceValidUntil?: string;
  url?: string;
  availability?: string;
};

type ProductSchemaProps = {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  rating?: {
    ratingValue: string;
    reviewCount: string;
    bestRating?: string;
    worstRating?: string;
  };
  offers?: Offer | Offer[];
};

export default function ProductSchema({
  name,
  description,
  image,
  brand = "XiomTech",
  rating,
  offers,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    image: image,
    description: description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount,
        bestRating: rating.bestRating || "5",
        worstRating: rating.worstRating || "1",
      },
    }),
    ...(offers && {
      offers: Array.isArray(offers)
        ? offers.map((offer) => ({
            "@type": "Offer",
            url: offer.url,
            priceCurrency: offer.priceCurrency,
            price: offer.price,
            priceValidUntil: offer.priceValidUntil || "2026-12-31",
            availability: offer.availability || "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
          }))
        : {
            "@type": "Offer",
            url: offers.url,
            priceCurrency: offers.priceCurrency,
            price: offers.price,
            priceValidUntil: offers.priceValidUntil || "2026-12-31",
            availability: offers.availability || "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
          },
    }),
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structure requires this
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
