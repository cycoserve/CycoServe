import React from "react";
import PageHero from "../components/PageHero";
import { Metadata } from "next";
import AboutSection from "../components/About";

export const metadata: Metadata = {
  title: "Services - CycoServe | Web Hosting and Development",
  description:
    "Discover our comprehensive range of services at CycoServe. From web development to AI-driven content creation, we offer innovative solutions tailored to your needs.",
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

function ServicesPage() {
  return (
    <>
      <PageHero title="Services Page" />
      <AboutSection />
    </>
  );
}

export default ServicesPage;
