import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getServiceCombinedGraphJsonLd,
} from "@/lib/seo";
import { SERVICES_DATA, type ServiceDetail } from "@/lib/servicesData";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

function findService(id: string): ServiceDetail {
  return (
    SERVICES_DATA.find((s) => s.id === id || s.slug === id || s.aliases?.includes(id)) || SERVICES_DATA[0]
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = findService(id);

  return constructMetadata({
    title: service.metaTitle || `${service.title} | MBSA Digital`,
    description: service.metaDescription || service.longDescription || service.desc,
    path: `/services/${service.id}`,
    image: service.image,
    keywords: [
      service.primaryKeyword || service.shortTitle,
      service.title,
      ...service.deliverables.slice(0, 4),
    ],
  });
}

export default async function ServiceDetailLayout({
  params,
  children,
}: Props) {
  const { id } = await params;
  const service = findService(id);
  const serviceGraphJsonLd = getServiceCombinedGraphJsonLd(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceGraphJsonLd) }}
      />
      {children}
    </>
  );
}
