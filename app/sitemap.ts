import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES_DATA } from "@/lib/servicesData";
import { PROJECTS_DATA_FULL } from "@/lib/projectsData";
import { FALLBACK_BLOGS } from "@/lib/fallbackBlogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic service detail pages
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic project case study pages
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA_FULL.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic blog post pages
  const blogRoutes: MetadataRoute.Sitemap = FALLBACK_BLOGS.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug || blog._id}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
