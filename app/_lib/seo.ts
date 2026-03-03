import type { Metadata } from "next"

export const BASE_URL = "https://www.dewbwah.com"
export const SITE_NAME = "Dewbwah Marketing"
const DEFAULT_OG_IMAGE = "/web-design-hp.jpeg"

export function absoluteUrl(path = "/") {
  return new URL(path, BASE_URL).toString()
}

interface BuildMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const resolvedImage = image.startsWith("http") ? image : absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  }
}

export interface FaqItem {
  question: string
  answer: string
}

interface FaqJsonLdOptions {
  url: string
  faqs: FaqItem[]
  name?: string
}

export function createFaqJsonLd({ url, faqs, name }: FaqJsonLdOptions) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name,
      url,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    null,
    2,
  )
}

interface LocalBusinessJsonLdOptions {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  logo?: string
  address: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  sameAs?: string[]
  serviceArea?: string[]
}

export function createLocalBusinessJsonLd({
  name,
  description,
  url,
  telephone,
  email,
  logo = "/new-logo-png.png",
  address,
  sameAs = [],
  serviceArea = [],
}: LocalBusinessJsonLdOptions) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}#professional-service`,
    name,
    description,
    url,
    image: absoluteUrl(logo),
    logo: absoluteUrl(logo),
    telephone,
    email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...address,
    },
  }

  if (sameAs.length > 0) {
    base.sameAs = sameAs
  }

  if (serviceArea.length > 0) {
    base.areaServed = serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    }))
  }

  return JSON.stringify(base, null, 2)
}

interface WebsiteJsonLdOptions {
  url: string
  name: string
}

export function createWebsiteJsonLd({ url, name }: WebsiteJsonLdOptions) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url,
      name,
    },
    null,
    2,
  )
}

interface ServiceJsonLdOptions {
  url: string
  name: string
  description: string
  serviceType: string
  areaServed?: string[]
  providerName?: string
  providerUrl?: string
}

export function createServiceJsonLd({
  url,
  name,
  description,
  serviceType,
  areaServed = [],
  providerName = SITE_NAME,
  providerUrl = BASE_URL,
}: ServiceJsonLdOptions) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      serviceType,
      url,
      provider: {
        "@type": "ProfessionalService",
        name: providerName,
        url: providerUrl,
      },
      areaServed: areaServed.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
    },
    null,
    2,
  )
}

