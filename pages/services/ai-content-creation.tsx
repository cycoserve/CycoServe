import React from "react";
import Head from "next/head";
import RootLayout from "../components/Layouts/RootLayout";
import Hero from "../components/Sections/Hero";

function ContentCreation() {
  return (
    <>
      <Head>
        <title>
          AI Content Creation - AI Powered Full Service Digital Marketing Agency
        </title>
        <meta
          name="description"
          content="Harness the power of AI to revolutionize your content creation. From captivating audio narratives to stunning visual imagery, our diverse AI tools bring your ideas to life."
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
          content="AI Content Creation - AI Powered Full Service Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Harness the power of AI to revolutionize your content creation. From captivating audio narratives to stunning visual imagery, our diverse AI tools bring your ideas to life."
        />
        <meta property="og:image" content="/assets/development.jpg" />
        <meta property="og:url" content="https://cycoserve.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta
          name="twitter:title"
          content="AI Content Creation - AI Powered Full Service Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="Harness the power of AI to revolutionize your content creation. From captivating audio narratives to stunning visual imagery, our diverse AI tools bring your ideas to life."
        />
        <meta name="twitter:image" content="/assets/development.jpg" />
      </Head>
      <Hero
          background={"/assets/homehero-bg.jpg"}
          title={"Unleash AI Creativity: Transform Your Content with CycoServe"}
          description={
            "Harness the power of AI to revolutionize your content creation. From captivating audio narratives to stunning visual imagery, our diverse AI tools bring your ideas to life."
          }
          bptext={"Learn More"}
          bpurl={"/about"}
          bstext={"Contact Us"}
          bsurl={"/contact-us"}
        />
      <RootLayout>
        <div>ai-content-creation</div>
      </RootLayout>
    </>
  );
}

export default ContentCreation;
