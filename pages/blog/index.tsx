import React from "react";
import Head from "next/head";
import RootLayout from "../../components/Layouts/RootLayout";
import BlogSection from "../../components/Sections/BlogSection";
import Hero from "../../components/Sections/Hero";

function BlogPage() {
  return (
    <>
      <Head>
        <title>
          CycoServe - AI Powered Full Service Digital Marketing Agency
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
        <Hero
          background={"/assets/Default_Radio_station_mixing_board_futuristically_powered_by_A_3.jpg"}
          title={"Insights, Strategies, and Trends on the CycoServe Blog"}
          description={
            "Stay ahead of the curve with our expertly curated blog, packed with actionable insights, innovative strategies, and the latest trends in digital marketing."
          }
          bptext={"Explore"}
          bpurl={"/about"}
          bstext={"Subscribe"}
          bsurl={"/contact-us"}
        />

        <BlogSection />
        
      </RootLayout>
    </>
  );
}

export default BlogPage;
