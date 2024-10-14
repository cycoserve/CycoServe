import Link from "next/link"

export default function PrivacyPolicyComponent() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Introduction</h2>
          <p className="text-zinc-800 mb-4">
            Welcome to our Privacy Policy. This document explains how we collect, use, and protect your personal information when you use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Information We Collect</h2>
          <p className="text-zinc-800 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-zinc-800 mb-4">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data (How you interact with our services)</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-zinc-800 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc list-inside text-zinc-800 mb-4">
            <li>Provide and maintain our services</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Data Security</h2>
          <p className="text-zinc-800 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction or damage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Your Rights</h2>
          <p className="text-zinc-800 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-zinc-800 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict the processing of your information</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Changes to This Policy</h2>
          <p className="text-zinc-800 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Contact Us</h2>
          <p className="text-zinc-800 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address className="text-zinc-800 not-italic">
            <p>Email: privacy@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Privacy Street, Securetown, ST 12345, Country</p>
          </address>
        </section>

        <footer className="text-zinc-800 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}