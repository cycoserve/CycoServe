import React from "react";
import { Metadata } from "next";
import PageHero from "../components/PageHero";
import AboutSection from "../components/About";

export const metadata: Metadata = {
  title: "FAQS - CycoServe | Web Hosting and Development",
  description:
    "At CycoServe, explore our transparent and competitive pricing options for our top-notch services. Find the perfect plan to suit your business needs.",
  generator: "CycoServe CMS",
  applicationName: "CycoServe",
  referrer: "origin-when-cross-origin",
  keywords: [
    "CycoServe",
    "Web Hosting",
    "Web Design",
    "Hosting",
    "App Deployment",
    "Pricing",
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
    team: "CycoServe Team",
    city: "Las Vegas",
  },
};

function page() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" />
      <AboutSection />
    </>
  );
}

export default page;
