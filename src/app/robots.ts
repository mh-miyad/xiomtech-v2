import type { MetadataRoute } from "next";

const BASE_URL = "https://xiomtech.net";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog/", "/solutions/", "/pricing", "/about", "/contact"],
        disallow: ["/api/", "/_next/", "/admin/", "/login/", "/private/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

