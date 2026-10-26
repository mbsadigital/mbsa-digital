import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getProjectJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { PROJECTS_DATA_FULL, type ProjectDetail } from "@/lib/projectsData";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

function findProject(id: string): ProjectDetail {
  return (
    PROJECTS_DATA_FULL.find((p) => p.id === id) || PROJECTS_DATA_FULL[0]
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);

  return constructMetadata({
    title: `${project.title} Case Study | ${project.heroMetric} ${project.heroMetricLabel}`,
    description: project.overview,
    path: `/projects/${project.id}`,
    image: project.image,
    keywords: [
      project.title,
      project.category,
      project.client,
      ...project.tools,
    ],
  });
}

export default async function ProjectDetailLayout({
  params,
  children,
}: Props) {
  const { id } = await params;
  const project = findProject(id);

  const projectJsonLd = getProjectJsonLd(project);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
