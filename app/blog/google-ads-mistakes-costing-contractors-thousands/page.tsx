import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle2, Clock } from "lucide-react"

import {
  absoluteUrl,
  buildMetadata,
  createFaqJsonLd,
  type FaqItem,
} from "@/app/_lib/seo"
import { CTASection } from "@/app/_components/CTASection"
import { FAQ } from "@/app/_components/FAQ"

const POST_PATH = "/blog/google-ads-mistakes-costing-contractors-thousands"

export const metadata: Metadata = buildMetadata({
  title: "The 5 Google Ads Mistakes Costing Contractors Thousands (And How to Fix Them)",
  description:
    "Most contractors lose money in Google Ads from broad match waste, weak landing pages, and broken tracking. Learn the 5 biggest mistakes and how to fix them fast.",
  path: POST_PATH,
  image: "/paid-ads.webp",
  type: "article",
})

const POST_FAQS: FaqItem[] = [
  {
    question: "How much should a contractor spend on Google Ads?",
    answer:
      "A common starting range is $1,500 to $3,000 per month for local home services, then scale based on qualified cost per lead and close rate. In highly competitive metros, higher budgets are often required to collect enough optimization data.",
  },
  {
    question: "Is SEO or Google Ads better for contractors?",
    answer:
      "Both. Ads create immediate demand capture while SEO compounds over time. The strongest performance usually comes from integrating both so paid data informs organic priorities and vice versa.",
  },
  {
    question: "How long until Google Ads becomes profitable?",
    answer:
      "Many accounts need 60 to 90 days of focused optimization to stabilize: negative keyword expansion, match-type cleanup, ad testing, landing-page improvements, and conversion QA.",
  },
]

const MISTAKES = [
  {
    title: "Broad-Match Mayhem",
    problem:
      "Broad match can help with keyword discovery, but unmanaged broad match burns budget on low-intent searches.",
    example:
      "Bidding on \"roofing contractor\" can pull clicks from searches like \"roofing jobs,\" \"DIY roof repair,\" and \"roofing supplies near me.\"",
    fixes: [
      "Use phrase and exact match for core high-intent terms.",
      "Review Search Terms weekly and add negatives aggressively.",
      "If broad match stays on, isolate it in a capped discovery campaign.",
      "Use Smart Bidding only after conversion tracking is proven accurate.",
    ],
  },
  {
    title: "Neglecting Negative Keywords",
    problem:
      "If keywords tell Google when to show your ad, negatives tell Google when not to. Skip negatives and budget gets eaten by job seekers, DIY traffic, and price shoppers.",
    fixes: [
      "Build a master negative list before launch: jobs, hiring, salary, resume, diy, free, cheap, parts, supplies.",
      "Review Search Terms weekly and sort by cost first.",
      "Use both account-level negatives and campaign-specific negatives.",
      "Add service-mismatch negatives quickly, like auto or car for non-auto contractors.",
    ],
  },
  {
    title: "Sending Paid Traffic to a Generic Homepage",
    problem:
      "If your ad promises emergency water heater repair, the click should not land on a general homepage. This mismatch tanks conversion rate.",
    fixes: [
      "Build dedicated landing pages per service and ad group.",
      "Put the primary CTA above the fold: click-to-call plus a short form.",
      "Add trust signals early: reviews, licenses, guarantees, and service-area proof.",
      "Prioritize mobile speed so urgent buyers do not bounce before converting.",
    ],
  },
  {
    title: "Flawed or Missing Conversion Tracking",
    problem:
      "If optimization is based on clicks instead of qualified leads and booked jobs, Google learns the wrong behavior and buys low-value traffic.",
    fixes: [
      "Track real contractor outcomes: qualified phone calls, form leads, and booked estimates.",
      "Implement dynamic call tracking with tools like CallRail or Google forwarding numbers.",
      "Use GTM to track form success correctly and test tracking monthly.",
      "Capture gclid, wbraid, gbraid, and UTM values inside your CRM.",
      "Then move to conversion or value-based bidding strategy.",
    ],
  },
  {
    title: "Skipping Ad Assets (Formerly Extensions)",
    problem:
      "Assets increase ad real estate, click-through rate, and often Quality Score. If competitors use them and you do not, visibility and efficiency drop.",
    fixes: [
      "Enable call assets for direct click-to-call from search.",
      "Connect location assets through Google Business Profile.",
      "Add sitelinks for About, Financing, Gallery, Contact, and service pages.",
      "Use strong callouts like Licensed & Insured, Same-Day Service, and Family-Owned.",
      "Upload real team, truck, and project photos as image assets.",
    ],
  },
]

const GEO_ALIGNMENT_ITEMS = [
  "Match page intent to search intent (service + location + urgency).",
  "Create genuinely useful local pages, not spun city duplicates.",
  "Use clear trust signals: real team, credentials, service area, and reviews.",
  "Use schema where relevant, including LocalBusiness, Service, and FAQ.",
  "Keep NAP and Google Business Profile details consistent across web properties.",
  "Prioritize mobile UX and speed on revenue-driving pages.",
]

const EXTERNAL_LINK_CLASS =
  "font-semibold text-teal-300 underline decoration-teal-400/60 underline-offset-4 transition-colors hover:text-teal-200"

export default function GoogleAdsMistakesPostPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl(POST_PATH),
    faqs: POST_FAQS,
    name: "Google Ads for Contractors FAQ",
  })

  const articleJsonLd = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "The 5 Google Ads Mistakes Costing Contractors Thousands (And How to Fix Them)",
      description:
        "A practical breakdown of the most expensive Google Ads mistakes for contractors and how to fix each one quickly.",
      image: [absoluteUrl("/paid-ads.webp")],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <section className="relative border-b border-white/10 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container-padding relative mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>

          <div className="mt-6 inline-flex items-center rounded-full border border-teal-300/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-200">
            Paid Ads
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            The 5 Google Ads Mistakes Costing Contractors Thousands
            <span className="mt-2 block bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              (And How to Fix Them)
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Calendar className="size-4 text-teal-300" />
              March 8, 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-teal-300" />
              9 min read
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-zinc-950">
        <article className="container-padding mx-auto max-w-4xl text-slate-300">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 md:p-10">
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                When a homeowner has a pipe burst, an AC failure in July, or a leaking roof, they
                do not browse. They search and call. That urgency is why Google Ads can be one of
                the highest-ROI channels for contractors.
              </p>
              <p>
                It is also why mistakes get expensive fast. In many home-service markets, clicks
                routinely cost $30 to $100+ for high-intent terms. If account structure, landing
                pages, and tracking are not tight, you are paying premium prices for low-quality
                outcomes.
              </p>
              <p>
                Below are the five mistakes we see most often, how they hurt revenue, and what to do
                this week{" "}
                <a
                  href="https://www.wordstream.com/blog/ws/google-ads-industry-benchmarks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={EXTERNAL_LINK_CLASS}
                >
                  to fix them
                </a>
                .
              </p>
            </div>

            <div className="mt-10 space-y-10">
              {MISTAKES.map((mistake, index) => (
                <section key={mistake.title}>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                    Mistake #{index + 1}: {mistake.title}
                  </h2>
                  {mistake.title === "Neglecting Negative Keywords" ? (
                    <p className="mt-4 leading-relaxed">
                      If keywords tell Google when to show your ad,{" "}
                      <a
                        href="https://support.google.com/google-ads/answer/2453972"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={EXTERNAL_LINK_CLASS}
                      >
                        negatives tell Google
                      </a>{" "}
                      when not to. Skip negatives and budget gets eaten by job seekers, DIY traffic,
                      and price shoppers.
                    </p>
                  ) : mistake.title === "Sending Paid Traffic to a Generic Homepage" ? (
                    <p className="mt-4 leading-relaxed">
                      If your ad promises emergency water heater repair, the click{" "}
                      <a
                        href="https://support.google.com/google-ads/answer/2404197"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={EXTERNAL_LINK_CLASS}
                      >
                        should not land on a general homepage
                      </a>
                      . This mismatch tanks conversion rate.
                    </p>
                  ) : mistake.title === "Flawed or Missing Conversion Tracking" ? (
                    <p className="mt-4 leading-relaxed">
                      If optimization is based on clicks instead of qualified leads and booked jobs,{" "}
                      <a
                        href="https://support.google.com/google-ads/answer/6095821"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={EXTERNAL_LINK_CLASS}
                      >
                        Google learns the wrong behavior
                      </a>{" "}
                      and buys low-value traffic.
                    </p>
                  ) : (
                    <p className="mt-4 leading-relaxed">{mistake.problem}</p>
                  )}
                  {mistake.example ? (
                    <p className="mt-4 leading-relaxed text-slate-400">{mistake.example}</p>
                  ) : null}

                  <h3 className="mt-6 text-lg font-semibold text-teal-300">How to fix it</h3>
                  <ul className="mt-4 space-y-3">
                    {mistake.fixes.map((fix) => (
                      <li key={fix} className="flex gap-3 leading-relaxed">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                        <span>{fix}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Bonus: Not Running LSAs Alongside Search Ads
              </h2>
              <p className="mt-4 leading-relaxed">
                For eligible categories, Local Services Ads can place you above standard search ads
                with a Google Guaranteed trust signal. A blended strategy of LSA + Search + strong
                landing pages usually gives better SERP control than either channel alone.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Modern Google SEO / GEO Alignment (for contractor pages)
              </h2>
              <ul className="mt-6 space-y-3">
                {GEO_ALIGNMENT_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-300" />
                    <span>
                      {item.startsWith("Use clear trust signals") ? (
                        <>
                          <a
                            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={EXTERNAL_LINK_CLASS}
                          >
                            Use clear trust signals
                          </a>
                          {item.slice("Use clear trust signals".length)}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Conclusion
              </h2>
              <p className="mt-4 leading-relaxed">
                Google Ads for contractors is not set-and-forget. The accounts that win are the ones
                with disciplined keyword control, tight landing-page relevance, accurate tracking, and
                consistent weekly optimization.
              </p>
              <p className="mt-4 leading-relaxed">
                Fix these five mistakes and paid search can move from unpredictable spend to a
                repeatable lead engine that drives booked jobs, not just clicks.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                Further Reading
              </h2>
              <ol className="mt-6 space-y-4">
                <li className="leading-relaxed">
                  <span className="font-semibold text-slate-100">
                    1. Google Search Central (SEO fundamentals):{" "}
                  </span>
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={EXTERNAL_LINK_CLASS}
                  >
                    https://developers.google.com/search/docs/fundamentals/seo-starter-guide
                  </a>
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-slate-100">
                    2. Google Ads Optimization Score + best-practice recommendations:{" "}
                  </span>
                  <a
                    href="https://support.google.com/google-ads/answer/9061546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={EXTERNAL_LINK_CLASS}
                  >
                    https://support.google.com/google-ads/answer/9061546
                  </a>
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-slate-100">
                    3. GA4 + Google Ads conversion import (for better optimization):{" "}
                  </span>
                  <a
                    href="https://support.google.com/google-ads/answer/10632359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={EXTERNAL_LINK_CLASS}
                  >
                    https://support.google.com/google-ads/answer/10632359
                  </a>
                </li>
              </ol>
            </section>
          </div>
        </article>
      </section>

      <CTASection />

      <FAQ
        faqs={POST_FAQS}
        title="Google Ads for Contractors FAQ"
        subtitle="Common questions about budget, channel strategy, and optimization timelines."
      />
    </div>
  )
}
