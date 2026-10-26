import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getServiceJsonLd,
  getFaqJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { SERVICES_DATA, type ServiceDetail } from "@/lib/servicesData";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

function findService(id: string): ServiceDetail {
  return (
    SERVICES_DATA.find((s) => s.id === id || s.slug === id) || SERVICES_DATA[0]
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
    title: `${service.title} | Digital Marketing Services`,
    description: service.longDescription || service.desc,
    path: `/services/${service.id}`,
    image: service.image,
    keywords: [
      service.shortTitle,
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

  const serviceJsonLd = getServiceJsonLd(service);
  const faqJsonLd = service.faqs?.length ? getFaqJsonLd(service.faqs) : null;
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortTitle || service.title, path: `/services/${service.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
