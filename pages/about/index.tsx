import React from "react";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import Spacer from "@/components/ui/Spacer";
import MissionVision from "@/components/Sections/MissionVision";
import RootLayout from "@/components/Layouts/RootLayout";
import { NewsletterSignupComponent } from "@/components/newsletter-signup";
import BlogHero from "@/components/Sections/BlogHero";
import AboutHero from "@/components/Sections/AboutHero";
import MetaTags from "@/components/headers/MetaData";

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title="About Us - AI/ML Powered Digital Marketing Agency"
        description="CycoServe Labs is leading the way in open-source innovation, offering powerful tools for web development, AI, and data-driven technologies. Join us in making technology more accessible and open to innovators worldwide."
        url="https://cycoserve.com"
        imageUrl="https://cycoserve.com/assets/images/og-image.jpg"
      />
      <RootLayout>
        <AboutHero
          title="CycoServe Labs Is Your Premier AI Service Provider"
          description="We are working around the clok to make sure you have plenty of knowledge base to help build your awareness"
          background=""
          bptext="Download"
          bpurl="https://github.com/cycoserve/CycoServe"
          bstext="Guides"
          bsurl="http://docs.cycoserve.com/"
        />
        <SectionWrap>
          <MissionVision />
        </SectionWrap>
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
