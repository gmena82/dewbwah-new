import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { contactInfo, serviceNav, socialLinks } from "@/app/_lib/navigation"

const serviceAreas = [
  "Kansas City, MO",
  "Overland Park, KS",
  "Lee's Summit, MO",
  "Independence, MO",
  "Surrounding Areas",
]

const socialIconMap: Record<string, React.ReactNode> = {
  Facebook: <Facebook className="size-5" />,
  Instagram: <Instagram className="size-5" />,
  LinkedIn: <Linkedin className="size-5" />,
}

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/new-logo-png.png" alt="Dewbwah Marketing" width={40} height={40} className="size-10 rounded-xl border border-teal-300/20 bg-black/60 p-1" />
              <span className="text-xl font-bold text-white">Dewbwah</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Marketing for contractors that do not cut corners. We build systems that generate predictable local jobs.
            </p>
            <p className="text-sm font-medium text-teal-300">
              Strategy-first execution. No fluff. No disappearing act.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {serviceNav.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="transition-colors hover:text-teal-300">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Service Areas</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <a href={contactInfo.phoneHref} className="flex items-center gap-3 transition-colors hover:text-teal-300">
                <Phone className="size-5 text-teal-300" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={contactInfo.emailHref} className="flex items-center gap-3 transition-colors hover:text-teal-300">
                <Mail className="size-5 text-teal-300" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-teal-300" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/12 text-slate-400 transition-all hover:border-teal-300/40 hover:bg-teal-500/10 hover:text-teal-300"
                  aria-label={link.label}
                >
                  {socialIconMap[link.label]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/35">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {currentYear} Dewbwah Marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="transition-colors hover:text-teal-300">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-teal-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
