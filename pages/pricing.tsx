import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Sections/Hero";
import Features from "../components/Features";
import RootLayout from "../components/Layouts/RootLayout";
import Head from "next/head";
import PricingSection from "@/components/Sections/PricingSection";
import PricingTable from "@/components/elements/PricingTable";
import HeaderSpace from "@/components/elements/HeaderSpace";
import Spacer from "@/components/Spacer";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>
          Pricing - AI Powered Full Service Digital Marketing Agency
        </title>
        <meta
          name="description"
          content="CycoServe is a dynamic and innovative full-service digital marketing agency committed to providing transformative solutions for businesses seeking to thrive in the digital landscape."
        />
        <meta
          name="keywords"
          content="digital marketing, AI, full service, agency, technology, SEO, web design, content creation, marketing strategies"
        />
        <meta name="author" content="CycoServe Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="CycoServe - AI Assisted Full Service Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="CycoServe is a dynamic and innovative full-service digital marketing agency committed to providing transformative solutions for businesses seeking to thrive in the digital landscape."
        />
        <meta property="og:image" content="/assets/development.jpg" />
        <meta property="og:url" content="https://cycoserve.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta
          name="twitter:title"
          content="CycoServe - AI Assisted Full Service Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="CycoServe is a dynamic and innovative full-service digital marketing agency committed to providing transformative solutions for businesses seeking to thrive in the digital landscape."
        />
        <meta name="twitter:image" content="/assets/development.jpg" />
      </Head>

      <RootLayout>
        <Spacer />
        <PricingTable />
        <Spacer />
      </RootLayout>
    </>
  );
}
