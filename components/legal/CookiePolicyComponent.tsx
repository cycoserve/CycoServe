import Link from "next/link"

export default function CookiePolicyComponent() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">Cookie Policy</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Introduction</h2>
          <p className="text-zinc-800 mb-4">
            This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. What are cookies?</h2>
          <p className="text-zinc-800 mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. Why do we use cookies?</h2>
          <p className="text-zinc-800 mb-4">
            We use cookies for several reasons:
          </p>
          <ul className="list-disc list-inside text-zinc-800 mb-4">
            <li>To enable certain functions of the service</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable ad delivery and behavioral advertising</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Types of cookies we use</h2>
          <p className="text-zinc-800 mb-4">
            The types of cookies we use include:
          </p>
          <ul className="list-disc list-inside text-zinc-800 mb-4">
            <li>Essential cookies: Necessary for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Preference cookies: Enable the website to remember information that changes the way it behaves or looks</li>
            <li>Marketing cookies: Used to track visitors across websites to allow targeted advertising</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. How can you control cookies?</h2>
          <p className="text-zinc-800 mb-4">
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. How often will we update this Cookie Policy?</h2>
          <p className="text-zinc-800 mb-4">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Where can you get further information?</h2>
          <p className="text-zinc-800 mb-4">
            If you have any questions about our use of cookies or other technologies, please email us at:
          </p>
          <address className="text-zinc-800 not-italic">
            <p>Email: privacy@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 789 Cookie Street, Dataville, DT 54321, Country</p>
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