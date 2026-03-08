import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle2, Clock, XCircle } from "lucide-react"

import { absoluteUrl, buildMetadata } from "@/app/_lib/seo"
import { CTASection } from "@/app/_components/CTASection"

const POST_PATH = "/blog/local-seo-checklist-rank-1-service-area"

export const metadata: Metadata = buildMetadata({
  title: "Local SEO Checklist: Rank #1 in Your Service Area (A Step-by-Step Guide)",
  description:
    "A practical 2026 local SEO checklist for contractors to rank higher in Google Maps and local search, including GBP, reviews, citations, and what to skip.",
  path: POST_PATH,
  image: "/blogs/local-seo-checklist-feature.webp",
  type: "article",
})

const LINK_CLASS =
  "font-semibold text-teal-300 underline decoration-teal-400/60 underline-offset-4 transition-colors hover:text-teal-200"

export default function LocalSEOChecklistPostPage() {
  const articleJsonLd = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Local SEO Checklist: Rank #1 in Your Service Area (A Step-by-Step Guide)",
      description:
        "A step-by-step local SEO checklist for contractors covering Google Business Profile, reviews, on-page optimization, citations, and mistakes to avoid.",
      image: [absoluteUrl("/blogs/local-seo-checklist-feature.webp")],
      datePublished: "2026-03-08",
      dateModified: "2026-03-08",
      mainEntityOfPage: absoluteUrl(POST_PATH),
      author: {
        "@type": "Organization",
        name: "Dewbwah Marketing",
      },
      publisher: {
        "@type": "Organization",
        name: "Dewbwah Marketing",
      },
    },
    null,
    2,
  )

  return (
    <div className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />

      <section className="relative border-b border-white/10 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container-padding relative mx-auto max-w-4xl">
          <div className="flex items-start justify-between gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>

            <div className="ml-auto flex flex-col items-end gap-4 text-right">
              <div className="inline-flex items-center rounded-full border border-teal-300/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-200">
                SEO
              </div>
              <div className="flex flex-wrap items-center justify-end gap-5 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4 text-teal-300" />
                  March 8, 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-teal-300" />
                  11 min read
                </span>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Local SEO Checklist: Rank #1 in Your Service Area
            <span className="mt-2 block bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              (A Step-by-Step Guide)
            </span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-zinc-950">
        <article className="container-padding mx-auto max-w-4xl text-slate-300">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 md:p-10">
            <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/blogs/local-seo-checklist-feature.webp"
                alt="Glowing map and local search coverage visualization"
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                It is incredibly frustrating to know you provide the best service in town, only to
                watch a competitor with terrible customer service and a shoddy reputation rank above
                you on Google Maps.
              </p>
              <p>
                You are out there doing the actual work, and they are winning the jobs simply
                because they know how to play the search engine game.
              </p>
              <p>
                Here is the candid truth: Google does not automatically know you are the best. You
                have to prove it with the exact signals the algorithm looks for.
              </p>
              <p>
                In 2026, dominating Google Maps and local search is about building a verified,
                trusted, and highly relevant digital entity.
              </p>
              <p>
                If your business is not showing up in the Local Pack (top three map results on page
                one), you are functionally invisible to the majority of local customers.
              </p>
              <p>
                Here is the step-by-step Local SEO checklist to dominate your service area, covering
                what you must do and what you should skip. If you want a team to execute this for
                you, check out Dewbwah&apos;s specialized local marketing solutions{" "}
                <Link href="/" className={LINK_CLASS}>
                  here
                </Link>
                .
              </p>
            </div>

            <section className="mt-10 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Phase 1: Master Your Google Business Profile (GBP)
              </h2>
              <p className="leading-relaxed">
                Your Google Business Profile is one of the strongest local ranking factors. Treat it
                with the same care as your storefront or work truck.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">1. Claim, Verify, and Perfect the Basics</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Claim your listing in Google Business Profile Manager and request ownership if needed.",
                    "Nail your NAP: Name, Address, and Phone must be exact everywhere.",
                    "Set accurate hours, including holidays, to avoid trust-killing customer friction.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">2. Categorize Ruthlessly</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Pick the most precise primary category (for example, Plumber, not generic Contractor).",
                    "Add relevant secondary categories tied to real services you actually provide.",
                    "Do not add categories that are only partially relevant.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">3. Build a Geotagged Visual Proof Engine</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Upload fresh photos weekly: branded trucks, local jobs, before-and-after work, and team shots.",
                    "Use real jobsite images, not generic stock photos.",
                    "Post regular GBP updates, offers, and Q&As to stay active in the AI-driven local results landscape.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-10 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Phase 2: The Trust Signals (Reviews &amp; Reputation)
              </h2>
              <p className="leading-relaxed">
                Review velocity and sentiment are now non-negotiable. It is not just your star
                rating. It is how consistently new reviews arrive and how you respond.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">1. Prioritize Velocity Over Volume</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Steady new reviews often beat stale total review count.",
                    "Automate review asks by SMS or email right after each completed job.",
                    "Use direct review links so customers can submit in one click.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">2. Guide Sentiment and Context</h3>
                <p className="mt-3 leading-relaxed">
                  Ask customers to mention what service you completed and where. Service + location
                  detail in reviews helps local relevance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">3. Respond to Everything (Fast)</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Reply to all reviews within 24-48 hours.",
                    "For positive reviews, thank them and naturally include service/location context.",
                    "For negative reviews, acknowledge the issue, stay professional, and move resolution offline quickly.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-slate-400">
                  Alt text: Close-up of a smartphone showing five gold stars and a positive local
                  business review.
                </p>
              </div>
            </section>

            <section className="mt-10 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Phase 3: On-Page Website Optimization
              </h2>
              <p className="leading-relaxed">
                Your website validates your GBP. If your site is slow, generic, or not location
                aligned, rankings will stall.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">1. Build Hyper-Local Service Pages</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Create dedicated pages for each core service (for example, /ac-repair, /furnace-installation).",
                    "Create city pages if you serve multiple suburbs or regions.",
                    "Do not dump all services into one generic homepage.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">2. Implement LocalBusiness Schema Markup</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Add LocalBusiness schema on the homepage.",
                    "Include area served, geocoordinates, and operating hours.",
                    "Use JSON-LD so Google can parse your business entity cleanly.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">
                  3. Optimize for Mobile Speed and Frictionless Booking
                </h3>
                <p className="mt-3 leading-relaxed">
                  Google&apos;s mobile-first indexing is standard. Review Google guidance{" "}
                  <a
                    href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    here
                  </a>
                  . If your site takes more than about 3 seconds on a 4G connection, users bounce.
                </p>
                <p className="mt-3 leading-relaxed">
                  Keep click-to-call visible and make booking frictionless on mobile.
                </p>
              </div>
            </section>

            <section className="mt-10 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Phase 4: Citations &amp; Local Authority
              </h2>
              <p className="leading-relaxed">
                In 2026, citation quality and consistency beat citation volume.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">1. Clean Up Big Data Aggregators</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Apple Business Connect (Apple Maps)",
                    "Bing Places",
                    "Yelp",
                    "Better Business Bureau (BBB)",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">2. Audit NAP Consistency</h3>
                <p className="mt-3 leading-relaxed">
                  Run regular audits with tools like BrightLocal or Whitespark and fix mismatched
                  addresses, phones, or business names quickly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-300">3. Earn Real Local Backlinks</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Sponsor local organizations and request sponsor-page links.",
                    "Join your Chamber of Commerce.",
                    "Partner with complementary local businesses for genuine mentions.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-slate-400">
                  Alt text: A digital dashboard highlighting local SEO mistakes to avoid.
                </p>
              </div>
            </section>

            <section className="mt-10 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Phase 5: What to Skip (Mistakes Costing You Rankings)
              </h2>
              <p className="leading-relaxed">
                Bad local SEO tactics can get your listing suppressed or suspended. Avoid these.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Skip Keyword Stuffing in Your Business Name",
                    text:
                      "Your GBP name should match your real-world legal name. Artificial keyword stuffing can trigger suspension.",
                  },
                  {
                    title: "Skip Fake Reviews or Incentivized Reviews",
                    text:
                      "Do not buy reviews or trade cash/gift cards for 5 stars. Spam patterns are easier than ever for Google to detect.",
                  },
                  {
                    title: "Skip Low-Quality Directory Spam",
                    text:
                      "Mass cheap directory submissions are mostly ignored. Focus on authoritative and locally relevant properties.",
                  },
                  {
                    title: "Skip Ranking Too Far Outside Your Proximity",
                    text:
                      "Dominate your immediate radius first. Proximity remains a major local map ranking factor.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-red-400/20 bg-red-500/5 p-5">
                    <h3 className="flex items-start gap-2 text-lg font-semibold text-red-300">
                      <XCircle className="mt-0.5 size-5 shrink-0" />
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Conclusion
              </h2>
              <p className="mt-4 leading-relaxed">
                Ranking #1 in your service area is a compounding process. A flawless GBP, steady
                authentic reviews, localized website content, and strict NAP consistency prove to
                Google that you are the most trusted local answer.
              </p>
              <p className="mt-4 leading-relaxed">
                It takes consistency, but owning top map visibility can transform lead flow and
                revenue for a local service business.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Further Reading
              </h2>
              <p className="mt-4 leading-relaxed">
                If you want to go deeper on local rankings, reviews, and technical setup, start
                here:
              </p>
              <ol className="mt-6 space-y-6">
                <li className="leading-relaxed">
                  <p className="font-semibold text-slate-100">
                    1. Google Business Profile Help Center
                  </p>
                  <p className="mt-1 text-slate-300">
                    Official guidelines for profile setup, verification, categories, posts, and
                    policy compliance.
                  </p>
                  <a
                    href="https://support.google.com/business/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    https://support.google.com/business/
                  </a>
                </li>
                <li className="leading-relaxed">
                  <p className="font-semibold text-slate-100">
                    2. Google Search Central: SEO Starter Guide
                  </p>
                  <p className="mt-1 text-slate-300">
                    Google&apos;s own fundamentals for making your site understandable and rankable in
                    search.
                  </p>
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    https://developers.google.com/search/docs/fundamentals/seo-starter-guide
                  </a>
                </li>
                <li className="leading-relaxed">
                  <p className="font-semibold text-slate-100">
                    3. Google Search Central: LocalBusiness Structured Data
                  </p>
                  <p className="mt-1 text-slate-300">
                    Technical documentation for implementing LocalBusiness schema markup the right
                    way.
                  </p>
                  <a
                    href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    https://developers.google.com/search/docs/appearance/structured-data/local-business
                  </a>
                </li>
              </ol>
            </section>
          </div>
        </article>
      </section>

      <CTASection />
    </div>
  )
}
