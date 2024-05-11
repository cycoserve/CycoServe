import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import RootLayout from "../../components/Layouts/RootLayout";
import Hero from "../../components/Sections/Hero";
import About from "../../components/AboutSection";
import LongTextSection from "@/components/Sections/LongText";
import TitleSection from "@/components/Sections/TitleSection";
import SectionWrap from "@/components/elements/SectionWrap";
import ParagraphTitle from "@/components/elements/ParagraphTitle";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>
          About Us - AI Powered Full Service Digital Marketing Agency
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
          content="About Us - AI Powered Full Service Digital Marketing Agency"
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
          content="About Us - AI Powered Full Service Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="CycoServe is a dynamic and innovative full-service digital marketing agency committed to providing transformative solutions for businesses seeking to thrive in the digital landscape."
        />
        <meta name="twitter:image" content="/assets/development.jpg" />
      </Head>
      <RootLayout>
        <Hero
          background={"/assets/about-hero-bg.jpg"}
          title={"The Agency: Discover CycoServe's Vision and Mission"}
          description={
            "At CycoServe, we're more than just a digital marketing agency. We're innovators, collaborators, and visionaries dedicated to driving your success."
          }
          bptext={"Pricing"}
          bpurl={"/pricing"}
          bstext={"Contact Us"}
          bsurl={"/contact-us"}
        />

        <SectionWrap>
        <TitleSection
          subtitle="Unveiling Our Journey to Success"
          title="Discover the Story Behind CycoServe: Innovators in Digital Excellence"
        />
          <LongTextSection>
            <div className="text-white">
              <ParagraphTitle>
                CycoServe – your gateway to digital transformation
                and success in the digital age
              </ParagraphTitle>
              <p>
                At CycoServe, we&apos;re more than just a digital marketing
                agency. We&apos;re a team of passionate innovators, creators,
                and strategists dedicated to helping businesses thrive in the
                ever-evolving digital landscape. With a focus on excellence,
                creativity, and results, we empower our clients to unlock their
                full potential and achieve their goals.
              </p>
              <br />  
              <ParagraphTitle>How We Started The Journey</ParagraphTitle>
              <p>
                Our journey began with a vision to revolutionize the digital
                marketing industry. Founded by a team of seasoned professionals
                with years of experience and expertise, CycoServe was built on
                the principles of innovation, integrity, and client-centricity.
                Since our inception, we&apos;ve been committed to pushing
                boundaries, challenging the status quo, and delivering
                unparalleled value to our clients.
              </p>
              <br />
              <ParagraphTitle>What Sets CycoServe Apart?</ParagraphTitle>
              <p>
                What sets CycoServe apart is our relentless pursuit of
                excellence in everything we do. From crafting compelling content
                to designing captivating websites, optimizing search engine
                rankings to driving targeted traffic, we leverage the latest
                technologies, trends, and strategies to deliver exceptional
                results. With a focus on quality, creativity, and customer
                satisfaction, we strive to exceed expectations and set new
                standards of excellence in the industry.
              </p>
              <br />
              <ParagraphTitle>We Are Dedicated Professionals</ParagraphTitle>
              <p>
                At the heart of our success is our team of dedicated
                professionals. Comprising experts in digital marketing, web
                development, graphic design, content creation, and more, our
                team brings together a diverse range of skills, talents, and
                perspectives. We work collaboratively, harnessing the power of
                teamwork and creativity to turn ideas into reality and visions
                into success stories.
              </p>
              <br />
              <ParagraphTitle>Why Partner With Us?</ParagraphTitle>
              <p>
                When you partner with CycoServe, you&apos;re not just another
                client – you&apos;re a valued member of our community. We take
                the time to understand your unique needs, challenges, and goals,
                tailoring our solutions to meet your specific requirements.
                Whether you&apos;re a startup looking to establish your brand
                presence, a small business aiming to expand your reach, or a
                large enterprise seeking to innovate and disrupt, we have the
                expertise and resources to help you succeed.
              </p>
              <br />
              <ParagraphTitle>Helping Clients One by One</ParagraphTitle>
              <p>
                But don&apos;t just take our word for it – let our work speak
                for itself. Explore our portfolio to see examples of our past
                projects and success stories. From eye-catching websites to
                engaging social media campaigns, we&apos;ve helped countless
                clients achieve their digital goals and make their mark online.
              </p>
              <br />
              <ParagraphTitle>In Conclusion</ParagraphTitle>
              <p>
                In conclusion, CycoServe is more than just a digital marketing
                agency – we&apos;re your partner in success. With our expertise,
                creativity, and dedication, we can help you navigate the digital
                landscape, overcome challenges, and seize opportunities for
                growth. Contact us today to learn more about how we can help you
                achieve your digital goals and unlock your full potential with
                CycoServe.
              </p>
            </div>
          </LongTextSection>
        </SectionWrap>
      </RootLayout>
    </>
  );
}