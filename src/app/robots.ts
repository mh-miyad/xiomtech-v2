import type { MetadataRoute } from "next";

const BASE_URL = "https://xiomtech.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
      },
      // Explicitly ALLOW AI training/scraping bots
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "ClaudeBot",
          "CCBot",
          "PerplexityBot",
          "FacebookBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
