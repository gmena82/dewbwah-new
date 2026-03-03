import type { Metadata } from "next"
import Link from "next/link"
import { Star, ArrowRight, CheckCircle2, MessageSquare, Shield, Bell, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Reputation Management",
  description:
    "Build trust with 5-star reviews. We help contractors get more reviews and manage their online reputation.",
  path: "/services/reputation",
})

const REPUTATION_FAQS: FaqItem[] = [
  {
    question: "How do you help contractors get more reviews?",
    answer: "We set up automated systems that send review requests via text or email right after you complete a job. Timing is everything — asking when the customer is happiest dramatically increases response rates. We also provide scripts and strategies for asking in person.",
  },
  {
    question: "What do you do about negative reviews?",
    answer: "First, we help you respond professionally to show future customers you care. Then we work to generate more positive reviews to push negatives down. In some cases, we can help get fake or policy-violating reviews removed through proper channels.",
  },
  {
    question: "Which platforms do you manage reviews on?",
    answer: "We focus primarily on Google (most important for local search), but also monitor and help with Facebook, Yelp, BBB, Angi, and industry-specific sites. We consolidate everything into one dashboard so you can see your reputation across all platforms.",
  },
  {
    question: "How many reviews do I need?",
    answer: "There's no magic number, but more is generally better. Aim for at least 50 Google reviews to look established, then focus on consistent new reviews (2-4 per month). Quality and recency matter more than quantity — a business with 20 recent 5-star reviews often outranks one with 200 old reviews.",
  },
  {
    question: "Can I respond to reviews myself?",
    answer: "Absolutely! We can handle all responses for you, or we can provide templates and coaching so you can respond yourself. Some clients prefer to respond personally for the authentic touch, and we support that.",
  },
]

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Automated Review Requests",
    description: "Send review requests via text or email right after job completion. Strike while the iron is hot.",
  },
  {
    icon: Shield,
    title: "Review Response",
    description: "Professional responses to every review — positive or negative. We handle the PR.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Get notified instantly when new reviews come in so you can respond quickly.",
  },
  {
    icon: TrendingUp,
    title: "Reputation Tracking",
    description: "Monitor your rating across Google, Facebook, Yelp, and more from one dashboard.",
  },
]

export default function ReputationPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/services/reputation"),
    faqs: REPUTATION_FAQS,
    name: "Reputation Management for Contractors FAQ",
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
                <Star className="size-4" />
                Reputation Management
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                5-Star Reviews <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  On Autopilot
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                90% of customers read reviews before calling. We help you get more 5-star 
                reviews and build trust before customers even pick up the phone.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-6 text-lg shadow-lg"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-teal-400 via-cyan-500 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Star className="size-10 text-white/80" />
                  </div>
                  <p className="text-lg font-bold text-white/90">5-Star Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="heading-section text-slate-900">How We Build Your Reputation</h2>
            <p className="body-large mx-auto mt-4 max-w-2xl">
              Reviews don&apos;t happen by accident. We build systems that generate them consistently.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-6 rounded-3xl border border-slate-100 bg-slate-50 p-8"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg">
                  <feature.icon className="size-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-teal-600 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Bell className="size-10 text-white/80" />
                  </div>
                  <p className="text-lg font-bold text-white/90">Review Dashboard</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="heading-section text-slate-900">What&apos;s Included</h2>
              <p className="body-large mt-4">
                Everything you need to build and maintain a stellar reputation.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Automated review request system",
                  "Text & email review campaigns",
                  "Review response management",
                  "Multi-platform monitoring",
                  "Real-time review alerts",
                  "Monthly reputation reports",
                  "Negative review mitigation",
                  "Review widget for your website",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="size-5 text-teal-600" />
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
        faqs={REPUTATION_FAQS} 
        title="Reputation Management FAQ"
        subtitle="Common questions about online reviews and reputation."
      />

    </div>
  )
}

