import type { Metadata } from "next"
import Link from "next/link"
import { Target, Search, Palette, Star, ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Contractor marketing services: Paid Ads, Local SEO, Web Design, and Reputation Management. No BS, just results.",
  path: "/services",
})

const SERVICES_FAQS: FaqItem[] = [
  {
    question: "Which service should I start with?",
    answer: "If you need leads fast, start with Paid Ads — you can see results in 2-4 weeks. If you want long-term growth, Local SEO builds sustainable traffic over 3-6 months. Most contractors do best with a combination, but we'll recommend what makes sense for your budget and goals.",
  },
  {
    question: "Can I bundle multiple services together?",
    answer: "Yes! We offer bundled packages that include multiple services at a discounted rate. Most clients get the best results from combining Paid Ads with SEO, or a full-service package that includes all four services.",
  },
  {
    question: "How do you measure success?",
    answer: "We track what matters: leads generated, cost per lead, and ultimately jobs booked. You'll get weekly reports with clear metrics — no vanity numbers like 'impressions' that don't translate to revenue.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work exclusively with contractors and home service businesses: HVAC, plumbing, electrical, roofing, painting, landscaping, remodeling, and more. This specialization means we understand your customers, competition, and what works in your industry.",
  },
  {
    question: "Do you work with contractors outside Kansas City?",
    answer: "Yes! While we're based in Kansas City, we work with contractors across the United States. Our digital marketing strategies work in any local market — we just customize them for your specific service area.",
  },
]

const SERVICES = [
  {
    title: "Paid Ads",
    description:
      "Google & Meta ads that convert clicks into booked jobs. We build campaigns that target customers who are ready to buy, not just browse.",
    icon: Target,
    href: "/services/paid-ads",
    features: [
      "Google Ads management",
      "Facebook & Instagram ads",
      "Retargeting campaigns",
      "Lead tracking & reporting",
    ],
    color: "from-cyan-500 to-teal-600",
  },
  {
    title: "Local SEO",
    description:
      "Dominate Google Maps and organic search in your service area. When someone searches 'plumber near me', you want to be first.",
    icon: Search,
    href: "/services/seo",
    features: [
      "Google Business Profile optimization",
      "Local keyword targeting",
      "Citation building",
      "Review generation",
    ],
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Web Design",
    description:
      "Conversion-focused websites that turn visitors into paying customers. Fast, mobile-first, and built to generate leads.",
    icon: Palette,
    href: "/services/web-design",
    features: [
      "Custom WordPress or Next.js sites",
      "Mobile-responsive design",
      "Fast loading speeds",
      "Built-in lead forms",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Reputation Management",
    description:
      "5-star review systems that build trust before customers even call. We help you get more reviews and respond to every one.",
    icon: Star,
    href: "/services/reputation",
    features: [
      "Automated review requests",
      "Review response management",
      "Reputation monitoring",
      "Negative review mitigation",
    ],
    color: "from-teal-400 to-cyan-500",
  },
]

export default function ServicesPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/services"),
    faqs: SERVICES_FAQS,
    name: "Contractor Marketing Services FAQ",
  })

  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container-padding relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300">
            Our Services
          </span>
          <h1 className="heading-display mt-6 text-white">
            Marketing That <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Actually Works
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            No fluff, no jargon, no empty promises. Just proven systems that bring 
            contractors more qualified jobs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                  >
                    <service.icon className="size-8 text-white" />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-4 text-lg text-slate-600">{service.description}</p>

                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="size-5 text-teal-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="gap-2 bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg"
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${service.color} to-slate-900`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                          <service.icon className="size-10 text-white/80" />
                        </div>
                        <p className="text-lg font-bold text-white/90">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ 
        faqs={SERVICES_FAQS} 
        title="Questions About Our Services"
        subtitle="Everything you need to know before getting started."
      />

    </div>
  )
}

