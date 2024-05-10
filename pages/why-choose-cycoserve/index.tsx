import React from "react";
import Head from "next/head";
import RootLayout from "../../components/Layouts/RootLayout";
import Hero from "../../components/Sections/Hero";


function WhyChooseCycoServe() {
  return (
    <>
      <Head>
        <title>
          Why Choose Us? - AI Powered Full Service Digital Marketing Agency
        </title>
        <meta
          name="description"
          content="Discover the CycoServe advantage: industry-leading customer support, unbeatable pricing, and a free tier web hosting offer. Choose excellence, choose CycoServe"
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
          content="Why Choose Us? - AI Powered Full Service Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Discover the CycoServe advantage: industry-leading customer support, unbeatable pricing, and a free tier web hosting offer. Choose excellence, choose CycoServe"
        />
        <meta property="og:image" content="/assets/development.jpg" />
        <meta property="og:url" content="https://cycoserve.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta
          name="twitter:title"
          content="Why Choose Us? - AI Powered Full Service Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="Discover the CycoServe advantage: industry-leading customer support, unbeatable pricing, and a free tier web hosting offer. Choose excellence, choose CycoServe"
        />
        <meta name="twitter:image" content="/assets/development.jpg" />
      </Head>
      <RootLayout>
      <Hero
          background={"/assets/homehero-bg.jpg"}
          title={"The CycoServe advantage: industry-leading customer support"}
          description={
            "Discover the CycoServe advantage: industry-leading customer support, unbeatable pricing, and a free tier web hosting offer. Choose excellence, choose CycoServe"
          }
          bptext={"Learn More"}
          bpurl={"/about"}
          bstext={"Contact Us"}
          bsurl={"/contact-us"}
        />
        <div>WhyChooseCycoServe</div>
      </RootLayout>
    </>
  );
}

export default WhyChooseCycoServe;
