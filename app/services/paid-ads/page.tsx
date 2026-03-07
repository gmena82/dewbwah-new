import type { Metadata } from "next"
import Link from "next/link"
import { Target, ArrowRight, CheckCircle2, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Paid Ads Management",
  description:
    "Google & Meta ads for contractors that convert clicks into booked jobs. Stop wasting money on ads that don't work.",
  path: "/services/paid-ads",
})

const PAID_ADS_FAQS: FaqItem[] = [
  {
    question: "How much should I budget for paid ads?",
    answer: "Most contractors start with $1,500-$3,000/month in ad spend (plus management fees). This is enough to generate consistent leads and collect data for optimization. We'll recommend a budget based on your market's competition and your growth goals.",
  },
  {
    question: "What's the difference between Google Ads and Facebook Ads?",
    answer: "Google Ads capture people actively searching for your services ('HVAC repair near me'). Facebook/Meta Ads build awareness and reach people before they're searching. For contractors, Google Ads typically generate faster ROI, while Facebook Ads work great for retargeting and brand building.",
  },
  {
    question: "How quickly will I see results from paid ads?",
    answer: "You'll typically see your first leads within 1-2 weeks of launching. It takes about 4-6 weeks to fully optimize campaigns as we collect data on what's working. Most clients see their best ROI after 2-3 months of continuous optimization.",
  },
  {
    question: "Do I own my ad accounts?",
    answer: "Yes, 100%. We set up all accounts in your name, and you maintain full ownership. If you ever leave, you keep everything — the accounts, the data, the audiences we've built. No hostage situations.",
  },
  {
    question: "What if I've wasted money on ads before?",
    answer: "You're not alone — most contractors have. The problem is usually poor targeting, weak landing pages, or no conversion tracking. We audit what went wrong and build a strategy that actually works, with transparent reporting so you always know where your money goes.",
  },
]

const FEATURES = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "We target customers who are actively searching for your services, not just scrolling mindlessly.",
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description: "Every dollar goes toward clicks that convert. No wasted spend on irrelevant traffic.",
  },
  {
    icon: Users,
    title: "Retargeting Campaigns",
    description: "Stay top-of-mind with people who visited but didn't convert. Second chances matter.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Weekly reports showing exactly what's working, what's not, and what we're doing about it.",
  },
]

const RESULTS = [
  { metric: "300%", label: "Average Lead Increase" },
  { metric: "45%", label: "Lower Cost Per Lead" },
  { metric: "60+", label: "Contractors Served" },
  { metric: "2.5M+", label: "Ad Spend Managed" },
]

export default function PaidAdsPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/services/paid-ads"),
    faqs: PAID_ADS_FAQS,
    name: "Paid Ads for Contractors FAQ",
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
                <Target className="size-4" />
                Paid Advertising
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ads That Book Jobs, <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Not Just Clicks
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Stop burning money on ads that don&apos;t convert. We build Google & Meta 
                campaigns that target ready-to-buy customers and turn them into booked jobs.
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
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-teal-600 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Target className="size-10 text-white/80" />
                  </div>
                  <p className="text-lg font-bold text-white/90">Paid Ads Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-white/10 bg-zinc-950 py-12">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {RESULTS.map((result) => (
              <div key={result.label} className="text-center">
                <div className="text-4xl font-bold text-teal-300">{result.metric}</div>
                <div className="mt-1 text-sm text-slate-400">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-zinc-900/60">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="heading-section text-slate-100">How We Do It</h2>
            <p className="body-large mx-auto mt-4 max-w-2xl">
              No cookie-cutter campaigns. Every strategy is built specifically for contractors 
              and your local market.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-6 rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-sm"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
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
      <section className="section-padding bg-zinc-950">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="heading-section text-slate-100">What&apos;s Included</h2>
              <p className="body-large mt-4">
                Everything you need to run profitable ad campaigns, without the hassle.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Custom campaign strategy & setup",
                  "Google Ads & Meta Ads management",
                  "Ad creative design & copywriting",
                  "Landing page optimization",
                  "Conversion tracking setup",
                  "Weekly performance reports",
                  "Monthly strategy calls",
                  "Dedicated account manager",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="size-5 text-teal-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <BarChart3 className="size-10 text-white/80" />
                  </div>
                  <p className="text-lg font-bold text-white/90">Campaign Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ 
        faqs={PAID_ADS_FAQS} 
        title="Paid Ads FAQ"
        subtitle="Common questions about Google and Facebook advertising."
      />

    </div>
  )
}

