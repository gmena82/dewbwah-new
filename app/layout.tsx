import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.css"

import { Header } from "./_components/Header"
import { Footer } from "./_components/Footer"
import { socialLinks, contactInfo } from "./_lib/navigation"
import {
  BASE_URL,
  createLocalBusinessJsonLd,
  createWebsiteJsonLd,
} from "./_lib/seo"

export const metadata: Metadata = {
  title: {
    default: "Dewbwah Marketing | Contractor Marketing That Gets Results",
    template: "%s | Dewbwah Marketing",
  },
  description:
    "Marketing for contractors that don't cut corners. Predictable local jobs without chasing the next one. Paid Ads, SEO, Web Design & Reputation Management.",
  keywords: [
    "contractor marketing",
    "contractor advertising",
    "home services marketing",
    "local SEO for contractors",
    "contractor website design",
    "Google Ads for contractors",
    "Kansas City marketing agency",
  ],
  authors: [{ name: "Dewbwah Marketing" }],
  manifest: "/site.webmanifest",
  metadataBase: new URL(BASE_URL),
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const sameAsLinks = socialLinks.map((link) => link.href)
  
  const localBusinessJsonLd = createLocalBusinessJsonLd({
    name: "Dewbwah Marketing",
    description:
      "Marketing agency specializing in contractor and home services businesses. We deliver predictable leads through paid ads, SEO, web design, and reputation management.",
    url: BASE_URL,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      addressLocality: "Kansas City",
      addressRegion: "MO",
      addressCountry: "US",
    },
    sameAs: sameAsLinks,
    serviceArea: ["Kansas City, MO", "Overland Park, KS", "Lee's Summit, MO"],
  })

  const websiteJsonLd = createWebsiteJsonLd({
    url: BASE_URL,
    name: "Dewbwah Marketing",
  })

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <Script id="trusted-types-policy" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined' && window.trustedTypes && !window.trustedTypes.defaultPolicy) {
              window.trustedTypes.createPolicy('default', {
                createHTML: (input) => input,
                createScript: (input) => input,
                createScriptURL: (input) => input,
              });
            }
          `}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteJsonLd }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
