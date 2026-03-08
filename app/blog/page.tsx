import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"

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
    question: "Do you publish practical or theory-heavy posts?",
    answer: "Practical. Every article is built around strategies contractors can apply quickly, with clear actions and examples.",
  },
  {
    question: "What topics do you cover?",
    answer: "We focus on contractor growth channels: Google Ads, local SEO, web conversion, reputation management, and lead-generation systems.",
  },
  {
    question: "Can I suggest blog topics?",
    answer: "Yes. Send us your questions and we will prioritize topics that solve real lead and revenue problems for contractors.",
  },
  {
    question: "Will you publish case studies?",
    answer: "Yes. We publish real strategy breakdowns with context, decisions made, and outcomes so you can replicate what works.",
  },
  {
    question: "How often do new posts go live?",
    answer: "We target 2-3 high-quality posts per month and prioritize quality over quantity.",
  },
]

const BLOG_POSTS = [
  {
    title: "The 5 Google Ads Mistakes Costing Contractors Thousands (And How to Fix Them)",
    category: "Paid Ads",
    excerpt:
      "In high-cost home service markets, a few account mistakes can drain thousands. This guide breaks down the top five issues and exactly how to fix them.",
    readTime: "9 min read",
    color: "from-cyan-500 to-teal-600",
    href: "/blog/google-ads-mistakes-costing-contractors-thousands",
    image: "/blogs/google-ads-mistakes-feature.webp",
    imageAlt: "Google Ads dashboard for contractor leads",
    isLive: true,
  },
  {
    title: "Local SEO Checklist: Rank #1 in Your Service Area",
    category: "SEO",
    excerpt:
      "A step-by-step guide to dominating Google Maps and local search results. Everything you need to do and what to skip.",
    readTime: "11 min read",
    color: "from-teal-500 to-emerald-600",
    href: "/blog/local-seo-checklist-rank-1-service-area",
    image: "/blogs/local-seo-checklist-feature.webp",
    imageAlt: "Local SEO map visibility and ranking coverage",
    isLive: true,
  },
  {
    title: "Why Your Contractor Website Is Not Generating Leads",
    category: "Web Design",
    excerpt:
      "Your site may look great but still underperform. Learn the conversion blockers we see most often and how to remove them.",
    readTime: "5 min read",
    color: "from-emerald-500 to-teal-600",
    isLive: false,
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
            No fluff, just actionable advice from the team that gets results.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-zinc-950 py-6">
        <div className="container-padding mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-teal-300/25 bg-teal-500/12 px-6 py-3">
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-teal-400" />
            </span>
            <span className="text-sm font-semibold text-teal-200">
              New posts are live. More contractor marketing guides are on the way.
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-zinc-950">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-300">
              Latest &amp; Upcoming
            </span>
            <h2 className="heading-section mt-4 text-slate-100">
              Contractor Marketing Articles
            </h2>
            <p className="body-large mx-auto mt-4 max-w-2xl">
              In-depth guides built for real contractor growth. Start with the newest
              article below, then check back for upcoming releases.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`relative flex aspect-[16/10] items-center justify-center ${post.isLive ? "" : `bg-gradient-to-br ${post.color}`}`}>
                  {post.isLive && post.image ? (
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px]" />
                      <div className="relative text-center">
                        <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                          <Calendar className="size-8 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-white/90">Future blog posts here.</p>
                      </div>
                    </>
                  )}
                  {post.isLive ? (
                    <span className="absolute left-4 top-4 rounded-full border border-teal-300/30 bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-teal-200">
                      Live
                    </span>
                  ) : (
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold text-slate-200">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-300">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-100 transition-colors group-hover:text-teal-300">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {post.excerpt}
                  </p>

                  {post.href ? (
                    <Link
                      href={post.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
                    >
                      Read Article
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-300">
                      Coming Soon
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <FAQ
        faqs={BLOG_FAQS}
        title="Blog FAQs"
        subtitle="Questions about our contractor marketing content."
      />
    </div>
  )
}
