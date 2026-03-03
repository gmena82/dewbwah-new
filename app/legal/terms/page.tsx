import type { Metadata } from "next"

import { buildMetadata } from "@/app/_lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Dewbwah Marketing terms of service. Terms and conditions for using our website and services.",
  path: "/legal/terms",
})

export default function TermsOfServicePage() {
  return (
    <div className="section-padding bg-zinc-950">
      <div className="container-padding mx-auto max-w-4xl">
        <h1 className="heading-display text-slate-100">Terms of Service</h1>
        <p className="mt-4 text-slate-400">Last updated: January 2026</p>

        <div className="prose prose-slate mt-12 max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the Dewbwah Marketing website and services, you agree to be 
            bound by these Terms of Service. If you do not agree to these terms, please do not 
            use our services.
          </p>

          <h2>Services</h2>
          <p>
            Dewbwah Marketing provides digital marketing services including but not limited to 
            paid advertising management, search engine optimization, web design, and reputation 
            management for contractor and home services businesses.
          </p>

          <h2>Client Responsibilities</h2>
          <p>As a client, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Respond to requests for information in a timely manner</li>
            <li>Pay for services according to agreed terms</li>
            <li>Not use our services for any unlawful purpose</li>
          </ul>

          <h2>Payment Terms</h2>
          <p>
            Payment terms are established in individual service agreements. Generally, services 
            are billed monthly in advance. Late payments may result in service suspension.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, designs, and materials created by Dewbwah Marketing remain our property 
            until full payment is received. Upon payment, clients receive a license to use the 
            materials for their business purposes.
          </p>

          <h2>Results Disclaimer</h2>
          <p>
            While we strive to deliver excellent results, we cannot guarantee specific outcomes 
            from marketing campaigns. Results vary based on industry, competition, budget, and 
            other factors outside our control.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Dewbwah Marketing shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages arising from your use of our services. Our total 
            liability shall not exceed the amount paid by you for services in the preceding 
            twelve months.
          </p>

          <h2>Termination</h2>
          <p>
            Either party may terminate services with 30 days written notice. Upon termination, 
            you remain responsible for payment of services rendered through the termination date.
          </p>

          <h2>Confidentiality</h2>
          <p>
            We maintain strict confidentiality regarding your business information and will not 
            disclose it to third parties without your consent, except as required by law.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our 
            services after modifications constitutes acceptance of the new terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by the laws of the State of Missouri, without regard 
            to conflict of law principles.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, please contact us at:
          </p>
          <ul>
            <li>Email: wellhello@dewbwah.com</li>
            <li>Phone: 816-382-6900</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

