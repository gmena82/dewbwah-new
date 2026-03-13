import type { Metadata } from "next"
import Image from "next/image"
import { Target, Zap, Shield, Users } from "lucide-react"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Meet Shelby and Angie — the duo behind Dewbwah Marketing. We help contractors get predictable leads without the BS.",
  path: "/about",
})

const ABOUT_FAQS: FaqItem[] = [
  {
    question: "Why do you only work with contractors?",
    answer: "Specialization makes us better. By focusing exclusively on contractors and home service businesses, we understand your customers, your competition, and what actually works in your industry. We're not learning on your dime — we already know what drives results for trades businesses.",
  },
  {
    question: "Where is Dewbwah located?",
    answer: "We're headquartered in Kansas City, MO. However, we work with contractors across the United States. Our digital marketing strategies work in any local market — we just customize them for your specific service area and competition.",
  },
  {
    question: "What does 'Dewbwah' mean?",
    answer: "It's a playful phonetic spelling of 'debut' — representing the fresh start we help contractors make with their marketing. Plus, it's memorable and different, just like our approach.",
  },
  {
    question: "How big is your team?",
    answer: "We're a lean, focused team led by Shelby and Angie. We intentionally stay small so every client gets personal attention from senior-level marketers, not junior staff learning on your account. When you call, you talk to people who know your business.",
  },
  {
    question: "Do you offer in-person meetings?",
    answer: "Yes, for Kansas City area clients we're happy to meet in person. For clients outside KC, we conduct everything via video calls and phone. Either way, you get the same level of service and attention.",
  },
]

const VALUES = [
  {
    icon: Target,
    title: "Transparency",
    description:
      "No hidden fees, no smoke and mirrors. You'll always know exactly where your money goes and what results it's generating.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "We move fast because your time is money. 24-hour response times and quick turnarounds are standard, not exceptions.",
  },
  {
    icon: Shield,
    title: "ROI Focused",
    description:
      "Every strategy we build is designed to generate more revenue than it costs. Period. If it doesn't work, we fix it.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We're not just a vendor — we're an extension of your team. Your wins are our wins, and we celebrate them together.",
  },
]

const TIMELINE = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started helping local contractors with Facebook ads from a home office.",
  },
  {
    year: "2020",
    title: "Going Full-Time",
    description: "Left corporate jobs to focus 100% on contractor marketing.",
  },
  {
    year: "2022",
    title: "60+ Clients",
    description: "Hit the milestone of serving over 60 contractors across the Midwest.",
  },
  {
    year: "2024",
    title: "Kansas City HQ",
    description: "Opened our official headquarters in Kansas City, MO.",
  },
]

export default function AboutPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/about"),
    faqs: ABOUT_FAQS,
    name: "About Dewbwah Marketing FAQ",
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
            About Dewbwah
          </span>
          <h1 className="heading-display mt-6 text-white">
            About Our Amazing Team <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              The People That Get It Done
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We&apos;re Shelby and Angie — the marketing duo that helps contractors dominate their
            local market. Real people, real strategies, real results.
          </p>
        </div>
      </section>

      {/* The Duo Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-300">
                Meet The Team
              </span>
              <h2 className="heading-section mt-4 text-slate-100">
                The Duo That Gets Sh*t Done
              </h2>

              <div className="mt-8 space-y-8">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                  <h3 className="text-xl font-bold text-slate-100">
                    Shelby DuBois — Founder
                  </h3>
                  <p className="mt-3 text-slate-400">
                    Shelby started DewBwah after years of watching contractors get sold marketing that sounded great and did nothing for the business.
                    She&apos;s been in sales since she was 16, and she quickly cuts through buzzwords to identify what a company actually needs to grow.
                  </p>
                  <p className="mt-3 text-slate-400">
                    Today she leads relationships and strategy, working directly with owners to map how jobs are sold, where leads break down, and what profitable growth should look like.
                    Then she aligns execution across the team: Kyle on paid ads, Tony on SEO/strategy, Davis on websites, and Angie on finance/ops.
                  </p>
                  <p className="mt-3 text-slate-400">
                    Outside of DewBwah, Shelby is raising Bryson and Nash while building a company that rejects generic agency playbooks.
                    Her standard is simple: understand the business first, then build marketing that works.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                  <h3 className="text-xl font-bold text-slate-100">
                    Angie — Operations & Finance
                  </h3>
                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src="/about-angie-placeholder-2026-03-13.png"
                      alt="Angie placeholder portrait"
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-slate-400">
                    Angie runs the financial and operational backbone of DewBwah: contracts, proposals, invoices, expenses, vendor payments, approvals, and internal systems.
                    If something gets signed, billed, paid, or approved, Angie is usually involved.
                  </p>
                  <p className="mt-3 text-slate-400">
                    She is also CEO of a foundation repair company in another state, giving her direct experience with how contractor businesses actually operate — crews, margins, scheduling, and real-world chaos.
                    That perspective keeps DewBwah grounded in what owners need, not what agencies pitch.
                  </p>
                  <p className="mt-3 text-slate-400">
                    Her favorite title is Nana. Angie has three kids and three grandkids, and that family-first clarity shows up in how she protects the business from waste and keeps the wheels on the bus.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/60 p-2">
                <Image
                  src="/about.webp"
                  alt="Shelby and Angie, founders of Dewbwah Marketing"
                  width={1200}
                  height={1200}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-zinc-900/60">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-500/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-300">
              Our Values
            </span>
            <h2 className="heading-section mt-4 text-slate-100">
              What We Stand For
            </h2>
            <p className="body-large mx-auto mt-4 max-w-2xl">
              These aren&apos;t just words on a wall. They&apos;re how we run every project,
              handle every client, and make every decision.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex gap-6 rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                  <value.icon className="size-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{value.title}</h3>
                  <p className="mt-2 text-slate-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-padding mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-300">
              Our Journey
            </span>
            <h2 className="heading-section mt-4 text-slate-100">
              From Side Hustle to Full Agency
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-teal-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="absolute left-6 top-0 z-10 flex size-5 items-center justify-center rounded-full border-4 border-white bg-teal-500/100 md:left-1/2 md:-translate-x-1/2" />
                  <div
                    className={`ml-16 flex-1 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:bg-teal-500/12 hover:shadow-md md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""
                      }`}
                  >
                    <span className="inline-block rounded-full bg-teal-500/15 px-3 py-1 text-sm font-bold text-teal-300">
                      {item.year}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-slate-100">{item.title}</h3>
                    <p className="mt-2 text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ
        faqs={ABOUT_FAQS}
        title="Questions About Dewbwah"
        subtitle="Learn more about who we are and how we work."
      />

    </div>
  )
}

