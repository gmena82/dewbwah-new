"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/app/_lib/seo"

interface FAQProps {
  faqs: FaqItem[]
  title?: string
  subtitle?: string
  className?: string
}

export function FAQ({ 
  faqs, 
  title = "Frequently Asked Questions",
  subtitle,
  className = "" 
}: FAQProps) {
  return (
    <section className={`section-padding bg-black/40 ${className}`}>
      <div className="container-padding mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-violet-300/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-violet-200">
            FAQ
          </span>
          <h2 className="heading-section mt-4 text-white">{title}</h2>
          {subtitle && (
            <p className="body-large mx-auto mt-4 max-w-2xl">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-2xl border border-violet-300/15 bg-zinc-900/70 px-6 shadow-lg"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-slate-100 hover:text-violet-200 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

interface FAQSchemaProps {
  faqs: FaqItem[]
  url: string
  name?: string
}

export function FAQSchema({ faqs, url, name }: FAQSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name,
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  )
}
