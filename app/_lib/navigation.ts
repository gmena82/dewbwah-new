import type { Route } from "next"

export type NavItem = {
  label: string
  href: Route
  description?: string
}

export type ExternalLink = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export const serviceNav: NavItem[] = [
  { 
    label: "Paid Ads", 
    href: "/services/paid-ads",
    description: "Google & Meta ads that actually convert"
  },
  { 
    label: "SEO", 
    href: "/services/seo",
    description: "Dominate local search results"
  },
  { 
    label: "Web Design", 
    href: "/services/web-design",
    description: "Conversion-focused websites"
  },
  { 
    label: "Reputation", 
    href: "/services/reputation",
    description: "Review management that builds trust"
  },
]

export const socialLinks: ExternalLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/dewbwah" },
  { label: "Instagram", href: "https://www.instagram.com/dewbwah" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dewbwah" },
]

export const contactInfo = {
  phone: "816-382-6900",
  phoneHref: "tel:+18163826900",
  email: "wellhello@dewbwah.com",
  emailHref: "mailto:wellhello@dewbwah.com",
  location: "Kansas City, MO",
}

