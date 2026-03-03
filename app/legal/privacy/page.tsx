import type { Metadata } from "next"

import { buildMetadata } from "@/app/_lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Dewbwah Marketing privacy policy. How we collect, use, and protect your information.",
  path: "/legal/privacy",
})

export default function PrivacyPolicyPage() {
  return (
    <div className="section-padding bg-zinc-950">
      <div className="container-padding mx-auto max-w-4xl">
        <h1 className="heading-display text-slate-100">Privacy Policy</h1>
        <p className="mt-4 text-slate-400">Last updated: January 2026</p>

        <div className="prose prose-slate mt-12 max-w-none">
          <h2>Introduction</h2>
          <p>
            Dewbwah Marketing (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed 
            to protecting your personal data. This privacy policy explains how we collect, use, 
            and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name, email address, phone number, and 
              company name when you fill out our contact forms.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, 
              including pages visited, time spent, and referring sources.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating system, and device 
              identifiers.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer service</li>
            <li>Send you information about our services (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our 
            website. You can control cookie preferences through your browser settings.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your data with trusted 
            service providers who assist us in operating our website and conducting our business, 
            subject to confidentiality agreements.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or your personal data, please 
            contact us at:
          </p>
          <ul>
            <li>Email: wellhello@dewbwah.com</li>
            <li>Phone: 816-382-6900</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </div>
      </div>
    </div>
  )
}

