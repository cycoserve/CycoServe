import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../../components/Sections/Hero";
import Features from "../../components/Features";
import RootLayout from "../../components/Layouts/RootLayout";
import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>
          Services - CycoServe | Full-Service Digital Marketing Agency
        </title>
        {/* Add any meta tags, stylesheets, or scripts here */}
      </Head>
      <RootLayout>
        <Hero
        background={"/assets/earth-from-space.jpg"}
          title={"Elevate Your Digital Presence with CycoServe's Innovative Solutions"}
          description={"Discover our comprehensive suite of digital marketing services designed to drive growth, engagement, and success for your business. Let's transform your online presence together."}
          bptext={"Learn More"}
          bpurl={"/services"}
          bstext={"Conact Us"}
          bsurl={"/contact-us"}
        />
        <Features />
      </RootLayout>
    </>
  );
}
