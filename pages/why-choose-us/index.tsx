import React from "react";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import LongTextSection from "@/components/Sections/LongText";
import ParagraphTitle from "@/components/elements/ParagraphTitle";
import TitleSection from "@/components/Sections/TitleSection";
import TwoColSection from "@/components/Sections/TwoColSection";
import Spacer from "@/components/ui/Spacer";
import PageEndHero from "@/components/elements/PageEndHero";
import BranchLayout from "@/components/Layouts/BranchLayout";



function WhyChooseUs() {
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
      <BranchLayout>
        <Spacer />
        {/* Two Col Section */}
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
        </SectionWrap>

        <LongTextSection>
          <p>
            <ParagraphTitle>
              Choosing CycoServe means partnering with a team of digital
              experts dedicated to your success
            </ParagraphTitle>
            With a proven track record of delivering results and driving
            growth for businesses across industries, we bring a wealth of
            experience and expertise to every project. Our client-centric
            approach ensures that we take the time to understand your unique
            needs, challenges, and goals, tailoring our solutions to meet your
            specific requirements.
          </p>

          <p>
            <ParagraphTitle>Solutions For Any Use Case</ParagraphTitle>
            Whether you&apos;re a startup looking to establish your brand
            presence, a small business aiming to expand your reach, or a large
            enterprise seeking to innovate and disrupt, we have the expertise
            and resources to help you succeed. From cutting-edge digital
            marketing strategies to innovative web development solutions, we
            leverage the latest technologies, trends, and techniques to
            deliver exceptional results.{" "}
          </p>

          <p>
            <ParagraphTitle>Unlock Your Full Potential</ParagraphTitle>
            At CycoServe, we&apos;re more than just a digital marketing agency
            we&apos;re your partner in success. Let us help you unlock your
            full potential and achieve your goals in the digital age. Choose
            CycoServe and experience the difference of working with a team
            that&apos;s committed to your success every step of the way.
          </p>
        </LongTextSection>
        <SectionWrap>
          <div className="container mx-auto px-4 lg:px-0">
            <PageEndHero
              background={"/assets/homehero-bg.jpg"}
              title={"The CycoServe Advanatage"}
              description={
                "Discover the CycoServe advantage: industry-leading customer support, unbeatable pricing, and a free tier web hosting offer. Choose excellence, choose CycoServe"
              }
              bptext={"Learn More"}
              bpurl={"/about"}
              bstext={"Contact Us"}
              bsurl={"/contact-us"}
            />
          </div>
        </SectionWrap>
      </BranchLayout>
    </>
  );
}

export default WhyChooseUs;
