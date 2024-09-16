import React from "react";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import Spacer from "@/components/ui/Spacer";
import MissionVision from "@/components/Sections/MissionVision";
import RootLayout from "@/components/Layouts/RootLayout";
import { NewsletterSignupComponent } from "@/components/newsletter-signup";

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
        <div className="flex flex-col justify-center items-center bg-gradient-to-tr from-purple-900 to-black min-h-[75vh]">
          <SectionWrap>
            <MissionVision />
          </SectionWrap>
        </div>
        <Spacer />
        <SectionWrap>
          {/* <SectionWrap>
          <LongTextSection>
            <div className="text-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-12 mb-12">
                <div className="border p-4 hover:shadow-lg rounded-lg">
                  <Image
                    src={"/assets/custom-web-design.jpg"}
                    alt="image"
                    height={500}
                    width={900}
                    className="rounded-lg"
                  />
                  <ParagraphTitle>
                    Your gateway to digital transformation and success.
                  </ParagraphTitle>
                  <p className="text-white">
                    At CycoServe, we&apos;re more than just a digital marketing
                    agency. We&apos;re a team of passionate innovators,
                    creators, and strategists dedicated to helping businesses
                    thrive in the ever-evolving digital landscape. With a focus
                    on excellence, creativity, and results, we empower our
                    clients to unlock their full potential and achieve their
                    goals.
                  </p>
                </div>
                <div className="p-4 ring-1 ring-zinc-200 hover:cursor-pointer hover:shadow-lg rounded-lg">
                  <Image
                    src={"/assets/podcasting.jpg"}
                    alt="image"
                    height={500}
                    width={900}
                    className="rounded-lg"
                  />
                  <ParagraphTitle>How We Started The Journey</ParagraphTitle>
                  <p className="text-white">
                    Our journey began with a vision to revolutionize the digital
                    marketing industry. Founded by a team of seasoned
                    professionals with years of experience and expertise,
                    CycoServe was built on the principles of innovation,
                    integrity, and client-centricity. Since our inception,
                    we&apos;ve been committed to pushing boundaries, challenging
                    the status quo, and delivering unparalleled value to our
                    clients.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols md:grid-cols-2 gap-12 justify-items-start items-center mb-12">
                <div className="">
                  <ParagraphTitle>What Sets CycoServe Apart?</ParagraphTitle>
                  <p className="text-white">
                    What sets CycoServe apart is our relentless pursuit of
                    excellence in everything we do. From crafting compelling
                    content to designing captivating websites, optimizing search
                    engine rankings to driving targeted traffic, we leverage the
                    latest technologies, trends, and strategies to deliver
                    exceptional results. With a focus on quality, creativity,
                    and customer satisfaction, we strive to exceed expectations
                    and set new standards of excellence in the industry.
                  </p>
                </div>
                <div className="">
                  <ParagraphTitle>
                    We Are Dedicated Professionals
                  </ParagraphTitle>
                  <p className="text-white">
                    At the heart of our success is our team of dedicated
                    professionals. Comprising experts in digital marketing, web
                    development, graphic design, content creation, and more, our
                    team brings together a diverse range of skills, talents, and
                    perspectives. We work collaboratively, harnessing the power
                    of teamwork and creativity to turn ideas into reality and
                    visions into success stories.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols md:grid-cols-2 gap-12 justify-items-start items-center mb-12">
                <div className="">
                  <ParagraphTitle>Why Partner With Us?</ParagraphTitle>
                  <p className="text-white">
                    When you partner with CycoServe, you&apos;re not just
                    another client – you&apos;re a valued member of our
                    community. We take the time to understand your unique needs,
                    challenges, and goals, tailoring our solutions to meet your
                    specific requirements. Whether you&apos;re a startup looking
                    to establish your brand presence, a small business aiming to
                    expand your reach, or a large enterprise seeking to innovate
                    and disrupt, we have the expertise and resources to help you
                    succeed.
                  </p>
                </div>
                <div className="">
                  <ParagraphTitle>Helping Clients One by One</ParagraphTitle>
                  <p className="text-white">
                    But don&apos;t just take our word for it – let our work
                    speak for itself. Explore our portfolio to see examples of
                    our past projects and success stories. From eye-catching
                    websites to engaging social media campaigns, we&apos;ve
                    helped countless clients achieve their digital goals and
                    make their mark online.
                  </p>
                </div>
              </div>
            </div>
          </LongTextSection>
        </SectionWrap> */}
          {/* <SectionWrap>
          <OurTeam />
        </SectionWrap> */}
          <div className="bg-black">
            <NewsletterSignupComponent />
          </div>
          <Spacer />
        </SectionWrap>
      </RootLayout>
    </>
  );
}
