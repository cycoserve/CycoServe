import Link from "next/link"

export default function TOSComponent() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">Terms of Service</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-zinc-800 mb-4">
            By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Use of Our Services</h2>
          <p className="text-zinc-800 mb-4">
            You agree to use our services only for purposes that are permitted by:
          </p>
          <ul className="list-disc list-inside text-zinc-800 mb-4">
            <li>These Terms of Service</li>
            <li>Any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. User Accounts</h2>
          <p className="text-zinc-800 mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Intellectual Property</h2>
          <p className="text-zinc-800 mb-4">
            The service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Termination</h2>
          <p className="text-zinc-800 mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-zinc-800 mb-4">
            In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Governing Law</h2>
          <p className="text-zinc-800 mb-4">
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Changes to Terms</h2>
          <p className="text-zinc-800 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. Contact Us</h2>
          <p className="text-zinc-800 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="text-zinc-800 not-italic">
            <p>Email: legal@example.com</p>
            <p>Phone: +1 (555) 987-6543</p>
            <p>Address: 456 Legal Avenue, Termstown, TS 67890, Country</p>
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