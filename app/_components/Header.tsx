"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Mail, Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useScrollShadow } from "@/app/_hooks/useScrollShadow"
import { contactInfo, primaryNav, serviceNav } from "@/app/_lib/navigation"

export function Header() {
  const hasShadow = useScrollShadow()
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    setServicesOpen(false)
    setMobileServicesOpen(false)
    setMobileOpen(false)
  }, [pathname])

  const isLinkActive = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const servicesActive =
    isLinkActive("/services") ||
    serviceNav.some((service) => pathname?.startsWith(service.href))

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hasShadow
          ? "border-b border-teal-300/20 bg-black/80 shadow-2xl backdrop-blur-xl"
          : "border-b border-white/10 bg-black/65 backdrop-blur-lg"
      }`}
    >
      <div className="hidden border-b border-white/10 bg-zinc-950/85 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
          <p className="text-slate-400">
            Dewbwah Marketing: Contractor Growth Systems, No-Fluff Execution.
          </p>
          <div className="flex items-center gap-5 text-slate-400">
            <a href={contactInfo.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-teal-300">
              <Phone className="size-3.5" />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={contactInfo.emailHref} className="inline-flex items-center gap-2 transition-colors hover:text-teal-300">
              <Mail className="size-3.5" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/new-logo-png.png" alt="Dewbwah Marketing" width={40} height={40} className="size-10 rounded-xl border border-teal-300/20 bg-black/60 p-1 shadow-lg shadow-teal-900/20" priority />
          <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">Dewbwah</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            if (item.label === "Services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      servicesActive
                        ? "bg-teal-500/15 text-teal-200"
                        : "text-slate-300 hover:bg-white/8 hover:text-teal-200"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 top-full z-50 min-w-[300px] -translate-x-1/2 pt-2"
                      >
                        <div className="rounded-2xl border border-teal-300/20 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl">
                          <div className="space-y-1">
                            {serviceNav.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`block rounded-xl px-4 py-3 transition-colors ${
                                  isLinkActive(service.href)
                                    ? "bg-teal-500/14 text-teal-200"
                                    : "text-slate-300 hover:bg-white/5"
                                }`}
                              >
                                <span className="font-medium">{service.label}</span>
                                {service.description && (
                                  <p className="mt-0.5 text-xs text-slate-400">{service.description}</p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isLinkActive(item.href)
                    ? "bg-teal-500/15 text-teal-200"
                    : "text-slate-300 hover:bg-white/8 hover:text-teal-200"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Book Strategy Call</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-200 hover:bg-white/10 lg:hidden">
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-l border-white/10 bg-zinc-950 p-0 text-slate-200">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/10 p-4">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                    <Image src="/new-logo-png.png" alt="Dewbwah Marketing" width={40} height={40} className="size-10 rounded-xl border border-teal-300/20 bg-black/60 p-1" priority />
                    <span className="text-xl font-bold text-white">Dewbwah</span>
                  </Link>
                </div>

                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {primaryNav.map((item) => {
                      if (item.label === "Services") {
                        return (
                          <div key={item.href}>
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-medium transition-colors ${
                                servicesActive
                                  ? "bg-teal-500/15 text-teal-200"
                                  : "text-slate-300 hover:bg-white/6"
                              }`}
                            >
                              {item.label}
                              <ChevronDown className={`size-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                              {mobileServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="space-y-1 py-2 pl-4">
                                    {serviceNav.map((service) => (
                                      <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                                          isLinkActive(service.href)
                                            ? "bg-teal-500/14 text-teal-200"
                                            : "text-slate-400 hover:bg-white/6"
                                        }`}
                                      >
                                        {service.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      }

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                            isLinkActive(item.href)
                              ? "bg-teal-500/15 text-teal-200"
                              : "text-slate-300 hover:bg-white/6"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                </nav>

                <div className="border-t border-white/10 p-4">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Book Strategy Call
                    </Link>
                  </Button>
                  <div className="mt-4 space-y-2 text-sm text-slate-400">
                    <a href={contactInfo.phoneHref} className="flex items-center gap-2 hover:text-teal-200">
                      <Phone className="size-4" />
                      {contactInfo.phone}
                    </a>
                    <a href={contactInfo.emailHref} className="flex items-center gap-2 hover:text-teal-200">
                      <Mail className="size-4" />
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
