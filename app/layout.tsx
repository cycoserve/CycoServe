import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CycoServe | Web Hosting and Development",
  generator: "CycoServe CMS",
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
