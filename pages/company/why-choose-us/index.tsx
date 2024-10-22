import React from "react";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import ParagraphTitle from "@/components/elements/ParagraphTitle";
import TitleSection from "@/components/sections/TitleSection";
import TwoColSection from "@/components/sections/TwoColSection";
import Spacer from "@/components/ui/Spacer";
// import PageEndHero from "@/components/elements/PageEndHero";
import RootLayout from "@/components/layouts/RootLayout";
import { NewsletterSignupComponent } from "@/components/newsletter-signup";
// import { motion } from "framer-motion";
import Hero from "@/components/sections/heros/Hero";
import MetaTags from "@/components/headers/MetaData";
import AboutHero from "@/components/sections/heros/AboutHero";
import WhyChooseUsHero from "@/components/sections/heros/WhyChooseUsHero";
// import Hero from "@/components/Sections/Hero";



function WhyChooseUs() {
  // Framer Motion animation variants

  return (
    <>
      <MetaTags
        title="Why Choose Us? - AI-Powered Full-Service Digital Marketing Agency"
        description="Discover why our AI-powered digital marketing agency stands out. From personalized strategies to cutting-edge automation, we offer comprehensive services to grow your brand and drive results."
        url="https://cycoserve.com/why-choose-us"
        imageUrl="https://cycoserve.com/assets/images/why-choose-us-og-image.jpg"
      />

      <RootLayout>
        <WhyChooseUsHero />
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-black to-zinc-950 pb-24 h-full">
          <SectionWrap>
            <Spacer />
            <TitleSection
              subtitle=""
              title="Dedicated to high quality and ease of use."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
              <div>
                <ParagraphTitle>
                  Partner With Dedicated Experts
                </ParagraphTitle>
                <div className="text-white text-[1rem]">
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
                <div className="text-white text-[1rem]">
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
                <div className="text-white text-[0.8rem]">
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
      </RootLayout>
    </>
  );
}

export default WhyChooseUs;
