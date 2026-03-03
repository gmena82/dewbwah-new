import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Case studies and results from contractors we've helped grow. See real numbers from real clients.",
  path: "/work",
})

const WORK_FAQS: FaqItem[] = [
  {
    question: "Are these results typical?",
    answer: "These are real results from real clients, but every business is different. Results vary based on your market, competition, budget, and how long you've been working with us. We're always transparent about what's realistic for your specific situation.",
  },
  {
    question: "Can I talk to your past clients?",
    answer: "Absolutely. We're happy to connect you with current clients who can share their experience. Just ask during your strategy call and we'll arrange a reference call.",
  },
  {
    question: "How long did it take to achieve these results?",
    answer: "Most paid ad results happen within 2-3 months. SEO results typically take 4-6 months. The timelines in our case studies reflect the full journey from start to the results shown.",
  },
  {
    question: "Do you work with my type of contractor business?",
    answer: "We work with all types of home service contractors: HVAC, plumbing, electrical, roofing, painting, landscaping, concrete, remodeling, and more. If you serve homeowners in a local area, we can likely help.",
  },
  {
    question: "What if I don't see results?",
    answer: "We work month-to-month specifically because we believe in earning your business. If after 90 days you're not seeing meaningful progress, you can walk away. We also provide clear monthly reporting so you always know what's working and what we're doing about it.",
  },
]

const CASE_STUDIES = [
  {
    client: "Kansas City Plumber",
    industry: "Plumbing",
    services: ["Paid Ads", "SEO"],
    results: [
      { metric: "300%", label: "More Leads" },
      { metric: "$85", label: "Cost Per Lead" },
      { metric: "6mo", label: "Payback Time" },
    ],
    testimonial: "Dewbwah took us from 10 leads a month to 40+. Our phone won't stop ringing.",
  },
  {
    client: "Midwest HVAC Pro",
    industry: "HVAC",
    services: ["Web Design", "Local SEO"],
    results: [
      { metric: "45%", label: "More Traffic" },
      { metric: "#1", label: "Google Maps Rank" },
      { metric: "2x", label: "Website Leads" },
    ],
    testimonial: "Best investment we've made in marketing. Period.",
  },
  {
    client: "Elite Roofing KC",
    industry: "Roofing",
    services: ["Paid Ads", "Reputation"],
    results: [
      { metric: "200%", label: "ROI" },
      { metric: "4.9★", label: "Google Rating" },
      { metric: "50+", label: "New Reviews" },
    ],
    testimonial: "They actually answer the phone and explain what they're doing. Refreshing.",
  },
  {
    client: "Premier Electric",
    industry: "Electrical",
    services: ["Full Service"],
    results: [
      { metric: "$250K", label: "Revenue Generated" },
      { metric: "180%", label: "Lead Increase" },
      { metric: "3x", label: "Website Traffic" },
    ],
    testimonial: "Wish we found Dewbwah years ago. These guys are the real deal.",
  },
  {
    client: "Foundation Experts",
    industry: "Foundation Repair",
    services: ["SEO", "Paid Ads"],
    results: [
      { metric: "400%", label: "Organic Growth" },
      { metric: "$120", label: "Cost Per Lead" },
      { metric: "15", label: "Keywords Ranking #1" },
    ],
    testimonial: "Our competition doesn't know what hit them.",
  },
  {
    client: "Custom Concrete Co",
    industry: "Concrete",
    services: ["Web Design", "SEO"],
    results: [
      { metric: "5x", label: "Lead Volume" },
      { metric: "2.5s", label: "Page Load Time" },
      { metric: "80%", label: "Mobile Traffic" },
    ],
    testimonial: "The new website paid for itself in the first month.",
  },
]

export default function WorkPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/work"),
    faqs: WORK_FAQS,
    name: "Dewbwah Marketing Case Studies FAQ",
  })

  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container-padding relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300">
            Our Work
          </span>
          <h1 className="heading-display mt-6 text-white">
            Real Results for <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Real Contractors
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Don&apos;t take our word for it. Here&apos;s what we&apos;ve done for contractors 
            just like you.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2">
                <Users className="size-6 text-teal-600" />
                <span className="text-3xl font-bold text-slate-900">60+</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">Contractors Served</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="size-6 text-teal-600" />
                <span className="text-3xl font-bold text-slate-900">300%</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">Avg. Lead Increase</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="size-6 text-teal-600" />
                <span className="text-3xl font-bold text-slate-900">$5M+</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.client}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-lg font-bold text-white/80">{study.industry}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">{study.client}</h3>
                  <p className="text-sm text-slate-500">{study.industry}</p>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="text-lg font-bold text-teal-600">{result.metric}</div>
                        <div className="text-xs text-slate-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="mt-4 border-l-2 border-teal-200 pl-4 text-sm italic text-slate-600">
                    &quot;{study.testimonial}&quot;
                  </blockquote>
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
        faqs={WORK_FAQS} 
        title="Questions About Our Results"
        subtitle="What you need to know about our case studies."
      />

    </div>
  )
}

