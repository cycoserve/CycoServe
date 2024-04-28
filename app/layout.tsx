import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CycoServe | Full-Service Digital Marketing Agency",
  description: "Experience unparalleled digital marketing solutions with CycoServe - where SEO, explainer video creation, web design, and more meet AI-driven strategies for your business success.",
  generator: "Next js",
  applicationName: "CycoServe",
  referrer: "origin-when-cross-origin",
  keywords: [
    "CycoServe",
    "Web Hosting",
    "Web Design",
    "Hosting",
    "App Deployment",
  ],
  authors: [{ name: "Merle Richardson", url: "https://ahzudirecttech.com" }],
  creator: "Merle Richardson",
  publisher: "Merle Richardson",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  other: {
    rapper: "Ahzu Direct",
    city: "Las Vegas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
