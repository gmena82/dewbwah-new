import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

import { ContactForm } from "@/app/_components/ContactForm"
import { buildMetadata, createFaqJsonLd, absoluteUrl, type FaqItem } from "@/app/_lib/seo"
import { contactInfo } from "@/app/_lib/navigation"
import { FAQ } from "@/app/_components/FAQ"
import { CTASection } from "@/app/_components/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Book a free strategy call with Dewbwah Marketing. Let's talk about growing your contractor business.",
  path: "/contact",
})

const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How much does it cost?",
    answer: "Pricing depends on your needs and goals. Our services typically range from $1,500-$5,000/month. We'll give you a clear quote after learning about your business.",
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see initial results within 30-60 days. Significant improvements typically happen within 90 days. We track everything so you know exactly what's working.",
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No. We work month-to-month. We earn your business every month. If we're not delivering results, you can leave.",
  },
  {
    question: "What makes you different from other agencies?",
    answer: "We only work with contractors. We understand your business, your customers, and what actually works in your industry. Plus, we actually answer the phone.",
  },
  {
    question: "What happens after I submit the form?",
    answer: "We'll reach out within 24 hours (usually much faster) to schedule a free 30-minute strategy call. On the call, we'll learn about your business and give you honest advice on what would work best for you.",
  },
]

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: contactInfo.emailHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
    href: "https://maps.google.com/?q=Kansas+City+MO",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri 9am-5pm CST",
    href: null,
  },
]

export default function ContactPage() {
  const faqJsonLd = createFaqJsonLd({
    url: absoluteUrl("/contact"),
    faqs: CONTACT_FAQS,
    name: "Contact Dewbwah Marketing FAQ",
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
            Let&apos;s Talk
          </span>
          <h1 className="heading-display mt-6 text-white">
            Book a{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Strategy Call
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            No pressure, no obligation. Let&apos;s talk about your business and see if 
            we can help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="heading-section text-slate-100">Get in Touch</h2>
              <p className="body-large mt-4">
                We respond to every inquiry within 24 hours. Actually. Not like those 
                other agencies that ghost you.
              </p>

              <div className="mt-8 space-y-6">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-teal-100 hover:bg-teal-500/12">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 shadow-sm">
                      <item.icon className="size-6 text-teal-300" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-400">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          className="text-lg font-semibold text-slate-100 transition-colors hover:text-teal-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-slate-100">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <div className="aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/75">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198729.54063941!2d-94.78315!3d39.0997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f1b52ae2c7e7%3A0xf3e2f7e1d6f7d2e8!2sKansas%20City%2C%20MO!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dewbwah Marketing Location"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-slate-400">
                  Serving contractors throughout Kansas City and the Midwest
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
                <h3 className="text-2xl font-bold text-slate-100">
                  Book Your Free Strategy Call
                </h3>
                <p className="mt-2 text-slate-400">
                  Fill out the form below and we&apos;ll reach out within 24 hours to schedule 
                  a call.
                </p>

                <div className="mt-6">
                  <ContactForm subject="Dewbwah — Contact Page Inquiry" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ 
        faqs={CONTACT_FAQS} 
        title="Common Questions"
        subtitle="Everything you need to know before reaching out."
      />
    </div>
  )
}

