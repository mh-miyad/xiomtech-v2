import type { MetadataRoute } from "next";

const BASE_URL = "https://www.xiomtech.net";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers — including AI bots, search engines, social scrapers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
