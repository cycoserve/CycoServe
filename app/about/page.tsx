import Image from "next/image";
import { Metadata } from "next";
import { title } from "process";
import AboutSection from "../components/About";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "About Us - CycoServe | Web Hosting & Development",
  generator: "Next.js",
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
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
};

export default function About() {
  return (
    <>
      <PageHero title="About Us Page" />
      <AboutSection />
    </>
  );
}
