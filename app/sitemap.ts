import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tanzimkshanto.dev",
      lastModified: new Date(),
    },
  ];
}
