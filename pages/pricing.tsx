import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Sections/Hero";
import Features from "./components/Features";
import RootLayout from "./components/Layouts/RootLayout";
import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>
          Pricing - CycoServe | Full-Service Digital Marketing Agency
        </title>
        {/* Add any meta tags, stylesheets, or scripts here */}
      </Head>
      <RootLayout>
        <Hero
          background=""
          title={""}
          description={""}
          bptext={""}
          bpurl={""}
          bstext={""}
          bsurl={""}
        />
        <Features />
      </RootLayout>
    </>
  );
}
