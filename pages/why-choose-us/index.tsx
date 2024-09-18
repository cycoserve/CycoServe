import React from "react";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import ParagraphTitle from "@/components/elements/ParagraphTitle";
import TitleSection from "@/components/Sections/TitleSection";
import TwoColSection from "@/components/Sections/TwoColSection";
import Spacer from "@/components/ui/Spacer";
// import PageEndHero from "@/components/elements/PageEndHero";
import RootLayout from "@/components/Layouts/RootLayout";
import { NewsletterSignupComponent } from "@/components/newsletter-signup";
import { motion } from "framer-motion";
import Hero from "@/components/Sections/Hero";
// import Hero from "@/components/Sections/Hero";

function WhyChooseUs() {
  // Framer Motion animation variants


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
            title="AI Only Agency: No Hassle Dev and Deployments"
            description="Cut through the confussion with a dedicateds AI Engineer. Save time and money without sacrificing quality."
            background=""
            bptext="Download"
            bpurl="https://github.com/cycoserve/CycoServe"
            bstext="Guides"
            bsurl="http://docs.cycoserve.com/"
          />
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-black to-zinc-950 pb-24 min-h-screen">
          <SectionWrap>
            <Spacer />
            <TitleSection
              subtitle="Whay Choose Us?"
              title="CycoServeis dedicated to high quality and ease of use."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
              <div>
                <ParagraphTitle>
                  Choosing CycoServe means partnering with a team of digital
                  experts dedicated to your success
                </ParagraphTitle>
                <div className="text-white">
                  With a proven track record of delivering results and driving
                  growth for businesses across industries, we bring a wealth of
                  experience and expertise to every project. Our client-centric
                  approach ensures that we take the time to understand your
                  unique needs, challenges, and goals, tailoring our solutions
                  to meet your specific requirements.
                </div>
              </div>

              <div>
                <ParagraphTitle>Solutions For Any Use Case</ParagraphTitle>
                <div className="text-white">
                  Whether you&apos;re a startup looking to establish your brand
                  presence, a small business aiming to expand your reach, or a
                  large enterprise seeking to innovate and disrupt, we have the
                  expertise and resources to help you succeed. From cutting-edge
                  digital marketing strategies to innovative web development
                  solutions, we leverage the latest technologies, trends, and
                  techniques to deliver exceptional results.{" "}
                </div>
              </div>

              <div>
                <ParagraphTitle>Unlock Your Full Potential</ParagraphTitle>
                <div className="text-white">
                  At CycoServe, we&apos;re more than just a digital marketing
                  agency we&apos;re your partner in success. Let us help you
                  unlock your full potential and achieve your goals in the
                  digital age. Choose CycoServe and experience the difference of
                  working with a team that&apos;s committed to your success
                  every step of the way.
                </div>
              </div>
            </div>
          </SectionWrap>
        </div>
        <Spacer />
        <SectionWrap>
          <TitleSection
            subtitle="Your Success, Our Commitment"
            title="Choose CycoServe: Where Professionalism Meets Generosity"
          />
          <TwoColSection
            title1={"Streamlined Web Development"}
            description1={
              "Rest assured with our professional approach using GitHub and CI/CD, safeguarding your code integrity and eliminating worries of loss."
            }
            image1={"/assets/development.jpg"}
            title2={"Generous Hosting Terms"}
            description2={
              "Benefit from our cost-effective model - no hosting fees until your web app exceeds generous usage limits, ensuring scalability without lock in."
            }
            image2={"/assets/hosting.jpg"}
          />
          <Spacer />
          <NewsletterSignupComponent />
          <Spacer />
        </SectionWrap>
      </RootLayout>
    </>
  );
}

export default WhyChooseUs;
