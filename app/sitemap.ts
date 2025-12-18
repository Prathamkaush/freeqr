import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://YOUR_DOMAIN";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.4,
    },

    // Blog posts
    {
      url: `${baseUrl}/blog/how-to-create-a-qr-code-for-free`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-is-a-wifi-qr-code`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/qr-codes-for-business`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/static-vs-dynamic-qr-codes`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
