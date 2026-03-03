import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { CTASection } from "@/app/_components/CTASection"
import { FAQ } from "@/app/_components/FAQ"

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Marketing tips, contractor growth strategies, and industry insights from the Dewbwah team. Learn what actually works for home service businesses.",
  path: "/blog",
})

const BLOG_FAQS: FaqItem[] = [
  {
    question: "When will the blog launch?",
    answer: "We're working on creating high-quality, actionable content for contractors. The blog will launch in the coming months with in-depth guides on paid ads, SEO, web design, and reputation management.",
  },
  {
    question: "What topics will you cover?",
    answer: "We'll focus on contractor marketing strategies that actually work: Google Ads optimization, local SEO tactics, website conversion tips, review generation, and real case studies from our clients. No fluff — just practical advice you can implement.",
  },
  {
    question: "Can I suggest blog topics?",
    answer: "Absolutely! We want to write about what matters to you. Send us an email with your questions or topics you'd like us to cover, and we'll add them to our content calendar.",
  },
  {
    question: "Will you share case studies?",
    answer: "Yes! We'll be publishing detailed case studies showing exactly what we did for contractor clients, what worked, what didn't, and the specific results. Real numbers, real strategies.",
  },
  {
    question: "How often will you post?",
    answer: "We plan to publish 2-3 high-quality articles per month. Quality over quantity — we'd rather write one great guide than five mediocre posts.",
  },
]

const UPCOMING_POSTS = [
  {
    title: "5 Google Ads Mistakes Costing Contractors Thousands",
    category: "Paid Ads",
    excerpt:
      "Most contractors waste 40% of their ad budget on common mistakes. Learn how to spot them and fix them before they drain your marketing dollars.",
    readTime: "6 min read",
    color: "from-cyan-500 to-teal-600",
  },
  {
    title: "Local SEO Checklist: Rank #1 in Your Service Area",
    category: "SEO",
    excerpt:
      "A step-by-step guide to dominating Google Maps and local search results. Everything you need to do — and what to skip.",
    readTime: "8 min read",
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Why Your Contractor Website Isn't Generating Leads",
    category: "Web Design",
    excerpt:
      "Your site looks fine — but it's not converting. Here are the 7 conversion killers we see on almost every contractor website.",
    readTime: "5 min read",
    color: "from-emerald-500 to-teal-600",
  },
]

export default function BlogPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/blog"),
    faqs: BLOG_FAQS,
    name: "Dewbwah Marketing Blog FAQ",
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
            Insights &amp; Resources
          </span>
          <h1 className="heading-display mt-6 text-white">
            The Dewbwah{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Marketing tips, contractor growth strategies, and industry insights. 
            No fluff — just actionable advice from the team that gets results.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="border-b border-teal-100 bg-gradient-to-r from-teal-50 via-white to-teal-50 py-6">
        <div className="container-padding mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-teal-100/60 px-6 py-3">
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-500 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-teal-500" />
            </span>
            <span className="text-sm font-semibold text-teal-800">
              Future blog posts here. Stay tuned for contractor marketing insights.
            </span>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="section-padding bg-white">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-700">
              Coming Soon
            </span>
            <h2 className="heading-section mt-4 text-slate-900">
              What We&apos;re Working On
            </h2>
            <p className="body-large mx-auto mt-4 max-w-2xl">
              We&apos;re putting together in-depth guides and insights for contractors. 
              Here&apos;s a preview of what&apos;s coming.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {UPCOMING_POSTS.map((post) => (
              <article
                key={post.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Placeholder Image Area */}
                <div className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${post.color}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative text-center">
                    <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <Calendar className="size-8 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-white/90">Future blog posts here.</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900 transition-colors group-hover:text-teal-700">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors group-hover:text-teal-700">
                    Coming Soon
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ 
        faqs={BLOG_FAQS} 
        title="Blog FAQs"
        subtitle="Questions about our upcoming content."
      />
    </div>
  )
}
