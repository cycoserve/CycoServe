// Footer.tsx
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "./data/footerLinks"; // Import the static file
import StayUpdated from "./StayUpdated";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* About Section */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 pr-0">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We are a forward-thinking company dedicated to innovation and excellence. Our mission is to provide cutting-edge solutions that empower businesses and individuals alike.
            </p>
            <StayUpdated />
          </div>

          {/* Link Sections */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                  <div className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex}>
                        <Link href={link.href} className="hover:text-orange-500 transition-colors">
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm mb-4 sm:mb-0">&copy; 2024 Your Company Name. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/CycoServe/" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/CycoServe" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/cycoserve_labs/" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://github.com/cycoserve" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
