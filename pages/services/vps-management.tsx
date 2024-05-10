import React from "react";
import Head from "next/head";
import RootLayout from "../components/Layouts/RootLayout";
import Hero from "../components/Sections/Hero";

function VpsManagement() {
  return (
    <>
      <Head>
        <title>
          VPS Management - AI Powered Full Service Digital Marketing Agency
        </title>
        <meta
          name="description"
          content="Experience unparalleled efficiency and reliability with our VPS management services. From seamless server configurations to optimized performance, we've got you covered."
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
          content="Experience unparalleled efficiency and reliability with our VPS management services. From seamless server configurations to optimized performance, we've got you covered."
        />
        <meta property="og:image" content="/assets/development.jpg" />
        <meta property="og:url" content="https://cycoserve.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta
          name="twitter:title"
          content="VPS Management - AI Powered Full Service Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="Experience unparalleled efficiency and reliability with our VPS management services. From seamless server configurations to optimized performance, we've got you covered."
        />
        <meta name="twitter:image" content="/assets/development.jpg" />
      </Head>
      <Hero
        background={"/assets/homehero-bg.jpg"}
        title={"Streamline Your Operations, Elevate Your Performance"}
        description={
          "Experience unparalleled efficiency and reliability with our VPS management services. From seamless server configurations to optimized performance, we've got you covered."
        }
        bptext={"Learn More"}
        bpurl={"/about"}
        bstext={"Contact Us"}
        bsurl={"/contact-us"}
      />
      <RootLayout>
        <div>VpsManagement</div>
      </RootLayout>
    </>
  );
}

export default VpsManagement;
