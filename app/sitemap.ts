import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";

const baseUrl = "https://www.freeqr.live";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* -------- CORE & STATIC PAGES -------- */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/url`,
      lastModified: now,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/wifi`,
      lastModified: now,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/whatsapp`,
      lastModified: now,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/email`,
      lastModified: now,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/text`,
      lastModified: now,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/upi`,
      lastModified: now,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/vcard`,
      lastModified: now,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      priority: 0.4,
    },
  ];

  /* -------- BLOG POSTS -------- */
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
