"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { ContactForm } from "./ContactForm"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/CTA-BG.jpeg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-zinc-950/45 to-teal-950/50" />

      <div className="container-padding relative mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-3xl border border-white/12 bg-black/35 p-6 backdrop-blur-md lg:grid-cols-2 lg:items-center lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-200">
              Secure Intake
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Stop Chasing Leads?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Let&apos;s build a system that brings qualified jobs to you. No nonsense, no inflated promises, just strategic execution.
            </p>
            <div className="mt-8 space-y-4 text-left">
              {[
                "Free 30-minute strategy call",
                "Custom growth roadmap",
                "No pressure, no obligation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="size-5 text-teal-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm variant="dark" subject="Dewbwah - Website CTA" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
