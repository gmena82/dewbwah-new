import type { Metadata } from "next"
import Link from "next/link"
import { Search, ArrowRight, CheckCircle2, MapPin, Star, FileText, Link2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Local SEO Services",
  description:
    "Dominate Google Maps and local search results. Get more calls from customers who are actively looking for your services.",
  path: "/services/seo",
})

const SEO_FAQS: FaqItem[] = [
  {
    question: "How long does SEO take to work?",
    answer: "Local SEO typically takes 3-6 months to see significant results. You'll start seeing improvements in your Google Business Profile within 4-6 weeks, but ranking on page 1 for competitive keywords takes time. The good news: once you rank, leads keep coming without ongoing ad spend.",
  },
  {
    question: "What's the difference between local SEO and regular SEO?",
    answer: "Local SEO focuses on getting you found for location-based searches ('plumber in Kansas City') and appearing in the Google Maps 3-pack. Regular SEO targets broader keywords. For contractors who serve a specific area, local SEO delivers much better ROI.",
  },
  {
    question: "Do I need a website for local SEO?",
    answer: "You need at least a basic website to rank well. Google uses your site to understand what you do and where you serve. We can build you a conversion-focused site or optimize your existing one — either way, your website and Google Business Profile work together.",
  },
  {
    question: "How many reviews do I need to rank well?",
    answer: "There's no magic number, but more quality reviews help. Focus on getting consistent reviews (2-4 per month) rather than a big burst. We set up automated review request systems that make this easy for you and your customers.",
  },
  {
    question: "Can you guarantee first page rankings?",
    answer: "No ethical SEO company can guarantee specific rankings because Google controls the algorithm. What we can guarantee is that we'll follow best practices, work on the right things, and give you transparent reporting. Most of our clients see first-page rankings within 6 months.",
  },
]

const FEATURES = [
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Fully optimized GBP that shows up in the local 3-pack for your target keywords.",
  },
  {
    icon: Star,
    title: "Review Generation",
    description: "Automated systems that help you get more 5-star reviews from happy customers.",
  },
  {
    icon: FileText,
    title: "Local Content",
    description: "Service area pages and content that rank for 'near me' searches in your market.",
  },
  {
    icon: Link2,
    title: "Citation Building",
    description: "Consistent NAP across 50+ directories to boost your local authority.",
  },
]

export default function SEOPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/services/seo"),
    faqs: SEO_FAQS,
    name: "Local SEO for Contractors FAQ",
  })

  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container-padding relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300">
                <Search className="size-4" />
                Local SEO
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Show Up First <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  When It Matters
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                When someone searches &quot;contractor near me&quot;, you need to be at the top. 
                We&apos;ll get you there and keep you there.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 px-8 py-6 text-lg"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-emerald-600 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Search className="size-10 text-white/80" />
                  </div>
                  <p className="text-lg font-bold text-white/90">Local SEO Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-zinc-950">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="heading-section text-slate-100">What We Focus On</h2>
            <p className="body-large mx-auto mt-4 max-w-2xl">
              Local SEO is different from regular SEO. We focus on what actually moves 
              the needle for contractors.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-6 rounded-3xl border border-white/10 bg-zinc-900/60 p-8"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg">
                  <feature.icon className="size-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{feature.title}</h3>
                  <p className="mt-2 text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-zinc-900/60">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-600 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <MapPin className="size-10 text-white/80" />
                  </div>
                  <p className="text-lg font-bold text-white/90">SEO Strategy</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="heading-section text-slate-100">What&apos;s Included</h2>
              <p className="body-large mt-4">
                Everything you need to dominate local search, done for you.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Google Business Profile optimization",
                  "Local keyword research & targeting",
                  "On-page SEO for your website",
                  "Service area page creation",
                  "Citation building (50+ directories)",
                  "Review generation system setup",
                  "Monthly ranking reports",
                  "Competitor analysis",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="size-5 text-teal-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ 
        faqs={SEO_FAQS} 
        title="Local SEO FAQ"
        subtitle="Common questions about search engine optimization for contractors."
      />

    </div>
  )
}

