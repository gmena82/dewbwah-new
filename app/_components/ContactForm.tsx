"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContactFormValues {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}

interface ContactFormProps {
  subject?: string
  className?: string
  variant?: "default" | "dark"
}

export function ContactForm({
  subject = "Dewbwah — New Website Inquiry",
  className,
  variant = "default",
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const onSubmit = handleSubmit(async (data) => {
    try {
      setStatus("idle")

      const payload = {
        ...data,
        _subject: subject,
      }

      // For now, just simulate form submission
      // Replace with your actual form endpoint (Formspree, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form data:", payload)

      reset()
      setStatus("success")
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  })

  const isDark = variant === "dark"

  const inputStyles = cn(
    "w-full rounded-xl border px-4 py-3 text-sm shadow-sm transition focus:outline-none focus:ring-2",
    isDark
      ? "border-teal-300/20 bg-black/55 text-white placeholder:text-slate-400 focus:border-teal-300 focus:ring-teal-300/30"
      : "border-white/15 bg-zinc-950/35 text-slate-100 placeholder:text-slate-400 focus:border-teal-300 focus:ring-teal-300/30"
  )

  const labelStyles = cn(
    "text-sm font-medium",
    isDark ? "text-slate-200" : "text-slate-300"
  )

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "space-y-5 rounded-2xl p-6 shadow-xl",
        isDark
          ? "border border-teal-300/20 bg-zinc-950/65 backdrop-blur-sm shadow-[0_0_30px_rgba(27,190,211,0.26),0_0_60px_rgba(27,190,211,0.14)]"
          : "border border-teal-300/20 bg-zinc-900/75",
        className
      )}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className={labelStyles}>
            Name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name", { 
              required: "Name is required",
              minLength: { value: 2, message: "Please enter at least 2 characters" }
            })}
            className={inputStyles}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className={labelStyles}>
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone", {
              required: "Phone is required",
              minLength: { value: 10, message: "Enter a valid phone number" },
              pattern: {
                value: /^[0-9()+\-\s]*$/,
                message: "Only numbers and basic phone characters allowed"
              }
            })}
            className={inputStyles}
            placeholder="(555) 555-5555"
          />
          {errors.phone && (
            <p className="text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="email" className={labelStyles}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email address"
              }
            })}
            className={inputStyles}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="company" className={labelStyles}>
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            {...register("company")}
            className={inputStyles}
            placeholder="Your company name"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className={labelStyles}>
          How can we help? *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", {
            required: "Please tell us how we can help",
            minLength: { value: 10, message: "Tell us a little more about your needs" }
          })}
          className={inputStyles}
          placeholder="Tell us about your business and what you're looking for..."
        />
        {errors.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        name="_gotcha"
        aria-hidden="true"
      />

      <div className="space-y-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gap-2 py-6 text-base"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="size-5" />
              Book a Strategy Call
            </>
          )}
        </Button>

        {status === "success" && (
          <p className="text-center text-sm font-medium text-teal-300">
            Thanks! We&apos;ll be in touch within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-500">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  )
}
