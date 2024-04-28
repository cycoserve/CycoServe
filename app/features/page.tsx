import React from "react";
import Features from "../components/Features";
import PageHero from "../components/PageHero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Features - CycoServe | Web Hosting and Development",
  description: "",
  generator: "CycoServe CMS",
  applicationName: "CycoServe",
  referrer: "origin-when-cross-origin",
  keywords: [
    "CycoServe",
    "Management",
    "VPS Servers",
    "AI-Driven Content Creation",
    "App Deployment",
    "Features",
    "Podcasts",
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

function FeaturesPage() {
  return (
    <>
     <PageHero title="Innovative Solutions For You" />
      <Features />
    </>
  );
}

export default FeaturesPage;
