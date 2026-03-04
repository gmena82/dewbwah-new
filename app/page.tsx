"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Target,
  Search,
  Palette,
  Star,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { FAQ, FAQSchema } from "./_components/FAQ"
import { CTASection } from "./_components/CTASection"
import { BASE_URL } from "./_lib/seo"

const STATS = [
  { value: "60+", label: "Contractors Served" },
  { value: "300%", label: "Avg. Lead Increase" },
  { value: "24hr", label: "Response Time" },
  { value: "5★", label: "Client Rating" },
]

const SERVICES = [
  {
    title: "Paid Ads",
    description: "Google & Meta ads that convert clicks into booked jobs, not just leads.",
    icon: Target,
    href: "/services/paid-ads",
    color: "from-cyan-500 to-teal-600",
    featured: true,
  },
  {
    title: "Local SEO",
    description: "Dominate Google Maps and organic search in your service area.",
    icon: Search,
    href: "/services/seo",
    color: "from-teal-500 to-emerald-600",
    featured: false,
  },
  {
    title: "Web Design",
    description: "Conversion-focused sites that turn visitors into paying customers.",
    icon: Palette,
    href: "/services/web-design",
    color: "from-emerald-500 to-teal-600",
    featured: false,
  },
  {
    title: "Reputation",
    description: "5-star review systems that build trust before you even answer the phone.",
    icon: Star,
    href: "/services/reputation",
    color: "from-teal-400 to-cyan-500",
    featured: false,
  },
]

const PROBLEMS = [
  "Agencies that ghost after they get paid",
  "Marketing 'gurus' who've never run a business",
  "Cookie-cutter strategies that don't fit contractors",
  "Leads that waste your time and never convert",
]

const SOLUTIONS = [
  "Real humans who pick up the phone",
  "Founders who've built businesses from scratch",
  "Custom systems built for the trades",
  "Qualified leads that become paying customers",
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const HOME_FAQS = [
  {
    question: "What types of contractors do you work with?",
    answer: "We specialize in home service contractors including HVAC, plumbing, electrical, roofing, landscaping, painting, remodeling, and general contractors. If you serve homeowners or businesses in a local area, we can help you grow.",
  },
  {
    question: "How long before I start seeing results?",
    answer: "Most clients see their first leads within 2-4 weeks of launching paid ads. SEO results typically take 3-6 months to gain traction. We set realistic expectations upfront and track everything so you know exactly what's working.",
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No. We work on a month-to-month basis because we believe in earning your business every single month. If we're not delivering results, you can leave anytime. No lock-ins, no games.",
  },
  {
    question: "How much does contractor marketing cost?",
    answer: "Our services start at $1,500/month for single-service packages. Most contractors invest $2,500-$5,000/month for comprehensive marketing. We'll give you a custom quote based on your goals, market, and competition during your free strategy call.",
  },
  {
    question: "What makes Dewbwah different from other marketing agencies?",
    answer: "We exclusively work with contractors, so we understand your business inside and out. We don't do cookie-cutter campaigns — every strategy is custom-built for your trade, your market, and your goals. Plus, we actually answer the phone when you call.",
  },
  {
    question: "Do you guarantee results?",
    answer: "We guarantee our process and commitment, but we're honest: no ethical marketer can guarantee specific results because many factors are outside our control. What we can promise is transparent reporting, continuous optimization, and a team that works as hard as you do.",
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <FAQSchema faqs={HOME_FAQS} url={BASE_URL} name="Dewbwah Marketing FAQ" />
      <HeroSection />
      <SocialProofTicker />
      <ProblemSolutionSection />
      <ServicesSection />
      <WhyUsSection />
      <CTASection />
      <FAQ
        faqs={HOME_FAQS}
        title="Got Questions? We've Got Answers."
        subtitle="Everything you need to know about working with Dewbwah."
      />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/Hero-Video-2-HB.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/20 to-teal-950/40" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-teal-400" />
            </span>
            Kansas City&apos;s #1 Contractor Marketing Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Marketing for Contractors{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            That Do Things Right
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
        >
          Predictable local jobs without chasing the next one. We build marketing
          systems that keep your phone ringing with{" "}
          <strong className="text-white">qualified leads</strong> — not tire kickers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="animate-cta-pulse gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-6 text-lg font-semibold text-white shadow-xl shadow-teal-500/30 transition-all hover:from-teal-400 hover:to-cyan-400 hover:shadow-2xl"
          >
            <Link href="/contact">
              <Phone className="size-5" />
              Book a Strategy Call
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-2 border-slate-500 bg-transparent px-8 py-6 text-lg font-semibold text-white hover:border-teal-400 hover:bg-teal-500/10"
          >
            <Link href="/work">
              See Our Work
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full fill-black">
          <path d="M0,60 C360,115 720,5 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  )
}

function SocialProofTicker() {
  const items = [
    "60+ Contractors Served",
    "Kansas City's Top Agency",
    "Results Guaranteed",
    "No BS Marketing",
    "Blue-Collar Approved",
    "Month-to-Month",
  ]

  return (
    <div className="overflow-hidden border-b border-white/10 bg-zinc-900/60 py-4">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400"
          >
            <span className="size-1.5 rounded-full bg-teal-500/100" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-300"
          >
            The Problem
          </motion.span>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-slate-100">
            Sick of Agencies That Ghost You?
          </motion.h2>
          <motion.p variants={fadeInUp} className="body-large mx-auto mt-4 max-w-2xl">
            You&apos;ve been burned before. The &quot;marketing experts&quot; who promised the moon,
            cashed your check, and disappeared faster than a subcontractor on payday.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border-2 border-red-200 bg-white p-8 shadow-lg shadow-black/20"
          >
            <h3 className="text-xl font-bold text-red-800">What You&apos;re Tired Of:</h3>
            <ul className="mt-6 space-y-4">
              {PROBLEMS.map((problem, index) => (
                <motion.li
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                    ✕
                  </span>
                  <span className="text-slate-700">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border-2 border-teal-100 bg-teal-500/12 p-8"
          >
            <h3 className="text-xl font-bold text-teal-300">What We Actually Do:</h3>
            <ul className="mt-6 space-y-4">
              {SOLUTIONS.map((solution, index) => (
                <motion.li
                  key={solution}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-teal-300" />
                  <span className="text-slate-300">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-lg font-semibold text-teal-300"
        >
          We don&apos;t use made-up words or fluffy reports as to why you don&apos;t have leads. We get
          sh*t done.
        </motion.p>

        {/* Website Offerings */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,118,110,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-teal-50/60" />
          </div>

          <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="relative inline-flex size-11 items-center justify-center rounded-full bg-white/70 shadow-lg shadow-teal-600/15 ring-1 ring-teal-200/60 backdrop-blur">
                  <svg viewBox="0 0 48 48" className="size-7 text-teal-300" fill="none" aria-hidden="true">
                    <path d="M24 6c7.732 0 14 4.768 14 10.65 0 4.34-3.403 8.07-8.278 9.74C25.75 27.93 23 31.23 23 36c0 3.88 1.58 6.47 4.73 7.77" stroke="url(#g)" strokeWidth="3.25" strokeLinecap="round" />
                    <path d="M22 42c-7.732 0-14-4.768-14-10.65 0-4.34 3.403-8.07 8.278-9.74C20.25 20.07 23 16.77 23 12c0-3.88-1.58-6.47-4.73-7.77" stroke="url(#g)" strokeWidth="3.25" strokeLinecap="round" opacity="0.9" />
                    <defs><linearGradient id="g" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#0F766E" /><stop offset="1" stopColor="#22D3EE" /></linearGradient></defs>
                  </svg>
                  <span className="pointer-events-none absolute -inset-3 rounded-full bg-teal-400/10 blur-2xl" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Website Products. Endless Possibilities.
                </span>
              </div>

              <h3 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
                Stunning Website Designs That{" "}
                <span className="text-teal-300">Close Clients</span>
              </h3>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Your website isn&apos;t a brochure — it&apos;s a lead machine. Fast, clean, and built
                to turn visitors into calls.
              </p>

              <div className="mt-8">
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-700">
                  <Link href="/services/web-design">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-zinc-950 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 to-cyan-500" />
                <h4 className="text-2xl font-extrabold tracking-tight text-slate-100">Custom</h4>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-teal-300">Designed Websites</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Your site is designed to convert, featuring clear CTAs and optimized lead forms that
                  transform traffic into revenue. We handle the heavy lifting by writing the copy and
                  structuring a seamless flow that makes the next step obvious.
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-slate-400 transition-colors group-hover:border-teal-200 group-hover:text-teal-300">
                    <ArrowRight className="size-5" />
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-zinc-950 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <h4 className="text-2xl font-extrabold tracking-tight text-slate-100">Frequent</h4>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-teal-300">Website Updates</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  We keep your digital pulse strong so Google and AI models recognize you as an active
                  leader. We continuously add fresh service pages, refine FAQs, and deploy strategic
                  content updates that signal relevance to search engines.
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-slate-400 transition-colors group-hover:border-teal-200 group-hover:text-teal-300">
                    <ArrowRight className="size-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/12 shadow-lg">
            <Image
              src="/web-design-hp.jpeg"
              alt="Stunning website design example by Dewbwah Marketing"
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const strategyItems = [
    { label: "Content Strategy", icon: "📋" },
    { label: "Blog Publishing", icon: "✍️" },
    { label: "Strategy Sessions", icon: "🎯" },
    { label: "Social Media", icon: "📱" },
    { label: "Paid Advertising", icon: "📈" },
    { label: "Email Campaigns", icon: "✉️" },
    { label: "Video Marketing", icon: "🎬" },
  ]

  return (
    <section className="relative overflow-hidden bg-zinc-900/60 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="container-padding relative mx-auto max-w-7xl">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="text-center">
          <motion.span variants={fadeInUp} className="inline-block rounded-full bg-teal-500/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-300">What We Do</motion.span>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-slate-100">Marketing That Actually Works</motion.h2>
          <motion.p variants={fadeInUp} className="body-large mx-auto mt-4 max-w-2xl">No fluff, no jargon. Just proven systems that bring contractors more jobs.</motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10">
          <div className="grid lg:grid-cols-2">
            <div className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:28px_28px]" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)]" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full border-2 border-teal-400/40 bg-teal-600/30 backdrop-blur-sm">
                    <TrendingUp className="size-5 text-teal-200" />
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                  Build Brand Dominance With a{" "}
                  <span className="text-cyan-300">Full-Stack Strategy</span>
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {strategyItems.map((item) => (
                    <span key={item.label} className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-sm">
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 md:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-cyan-500/10 to-transparent" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 sm:text-sm">Reach Every Homeowner With</p>
                <h3 className="mt-1 font-serif text-3xl font-light italic text-white sm:text-4xl">Digital Marketing</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Just like every contractor runs their business differently, our marketing
                  products and services are custom-tailored to meet the unique needs of your
                  trade, your market, and your growth goals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                <Link href={service.href} className="group flex h-full flex-col bg-zinc-950 p-6 transition-all hover:bg-teal-500/12">
                  <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-md transition-transform group-hover:scale-105`}>
                    <service.icon className="size-6 text-white" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-slate-100 group-hover:text-teal-300">{service.title}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{service.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 transition-colors group-hover:text-teal-300">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 px-6 py-5 md:px-10">
            <p className="text-sm font-medium text-slate-300 sm:text-base">
              Ready to see what we can do for <span className="text-white">your</span> business?
            </p>
            <Button asChild size="sm" className="gap-2 bg-cyan-500 px-5 font-semibold text-slate-100 shadow-lg shadow-cyan-500/25 hover:bg-cyan-400">
              <Link href="/services">
                View All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhyUsSection() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Results, Not Excuses",
      description: "We track everything and report on what matters — leads, jobs, and ROI.",
    },
    {
      icon: Users,
      title: "Built for Contractors",
      description: "We speak your language because we've worked with 60+ trade businesses.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "24-hour response time guaranteed. We're here when you need us.",
    },
    {
      icon: Zap,
      title: "Jaw-Dropping Modern Designs",
      description: "We create work that stops the scroll and makes people excited about working with you.",
    },
  ]

  return (
    <section className="section-padding bg-zinc-950">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-teal-300">Why Dewbwah</span>
            <h2 className="heading-section mt-4 text-slate-100">Meet the Team That Gets It Done</h2>
            <p className="body-large mt-6">
              <strong>Shelby Dewbwah</strong> is the face of Dewbwah Marketing and she has put together
              an incredible team of international talent that creates incredible work.
            </p>
            <p className="mt-4 text-lg font-medium text-teal-300">
              Meet our team on our{" "}
              <Link href="/about" className="underline decoration-teal-300 underline-offset-4 hover:text-teal-800">About</Link>{" "}
              page.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10">
                    <reason.icon className="size-6 text-teal-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100">{reason.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -right-4 -top-4 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/12 bg-zinc-950 shadow-sm">
              <Image
                src="/Dewbwah-Marketing-HS.jpeg"
                alt="Shelby and Angie, founders of Dewbwah Marketing"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
