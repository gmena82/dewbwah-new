import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Palette, ArrowRight, CheckCircle2, Smartphone, Zap, Layout, MousePointer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Web Design Services",
  description:
    "Conversion-focused websites for contractors. Fast, mobile-first, and built to generate leads — not just look pretty.",
  path: "/services/web-design",
})

const WEB_DESIGN_FAQS: FaqItem[] = [
  {
    question: "How much does a contractor website cost?",
    answer: "Our websites range from $3,500-$10,000+ depending on complexity. A standard 5-7 page contractor site with lead forms, SEO optimization, and custom design typically runs $4,500-$6,000. We'll give you an exact quote after understanding your needs.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most contractor websites take 4-6 weeks from kickoff to launch. This includes discovery, design, development, and revisions. Rush projects are possible for an additional fee if you need something faster.",
  },
  {
    question: "Do I own my website?",
    answer: "Yes, you own everything we create for you — the design, code, content, and domain. We don't do proprietary systems that lock you in. If you ever want to leave, we'll transfer everything to you or your new provider.",
  },
  {
    question: "Will my website work on phones?",
    answer: "Absolutely. Over 70% of contractor website traffic comes from mobile devices, so we design mobile-first. Your site will look great and work perfectly on phones, tablets, and desktops.",
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes. We build on user-friendly platforms with simple content management. You can update text, images, and basic info without any coding knowledge. For bigger changes, we offer ongoing support packages.",
  },
]

const FEATURES = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Most contractor traffic is on phones. We design and test for mobile before anything else.",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Speed matters for both Google rankings and lead conversion. Your pages load quickly and cleanly.",
  },
  {
    icon: Layout,
    title: "Built to Convert",
    description: "Pretty design is easy. Real conversion structure is harder — we build pages to guide visitors toward calls, forms, and booked estimates.",
  },
  {
    icon: MousePointer,
    title: "Easy to Manage",
    description: "You get a clean backend so your team can update text, photos, and offers without bottlenecks.",
  },
]

export default function WebDesignPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/services/web-design"),
    faqs: WEB_DESIGN_FAQS,
    name: "Contractor Web Design FAQ",
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
                <Palette className="size-4" />
                Web Design
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Websites That Actually <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Bring You Jobs
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                A good-looking website alone won&apos;t make your phone ring. We build fast,
                mobile-first websites engineered to turn visitors into real leads and booked jobs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 px-8 py-6 text-lg"
                >
                  <Link href="/contact">
                    Start Your Website
                    <ArrowRight className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-3xl">
              <Image
                src="/web.webp"
                alt="Custom web design showcase"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-zinc-950">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="heading-section text-slate-100">A Website Should Sell For You</h2>
            <p className="body-large mx-auto mt-4 max-w-3xl">
              Your site should clearly explain your work, build trust fast, and make the next step obvious.
              Weak websites are decoration. Strong websites move people from browsing to contacting your team.
              If you want traffic too, pair this with our <Link href="/services/seo" className="text-teal-300 underline underline-offset-4 hover:text-teal-200">SEO service</Link>.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-6 rounded-3xl border border-white/10 bg-zinc-900/60 p-8"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
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
            <div>
              <h2 className="heading-section text-slate-100">Everything Needed To Launch A Website That Works</h2>
              <p className="body-large mt-4">
                You get the full foundation required to launch confidently and convert traffic into leads.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Custom design built for your company",
                  "Mobile-first development",
                  "SEO-friendly page structure",
                  "Service pages designed to rank in Google",
                  "Fast, modern hosting",
                  "Lead capture forms that actually convert",
                  "Google-friendly performance and speed",
                  "Clean backend so you can update things yourself",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="size-5 text-teal-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-slate-300">
                Bottom line: this website is built to help you win more jobs, not just look good online.
              </p>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-3xl">
              <Image
                src="/web-design-conversion-package-2026-03-13.png"
                alt="Contractor website shown on desktop and mobile with clear conversion-focused layout"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ 
        faqs={WEB_DESIGN_FAQS} 
        title="Web Design FAQ"
        subtitle="Common questions about contractor website design."
      />

    </div>
  )
}

