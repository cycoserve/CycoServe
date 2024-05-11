import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Sections/Hero";
import RootLayout from "../components/Layouts/RootLayout";
import TwoColSection from "../components/Sections/TwoColSection";
import ThreeColSection from "../components/Sections/ThreeColSection";
import FourColSection from "../components/Sections/FourColSection";
import OneColSection from "../components/Sections/OneColSection";
import BlogSection from "../components/Sections/BlogSection";
import TitleSection from "../components/Sections/TitleSection";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          background={"/assets/homehero-bg.jpg"}
          title={"Transform Your Digital Presence with CycoServe"}
          description={
            "We offer cutting edge digital services that will enhance your companies online presence. At CycoServe, we pioneer digital transformation. Our innovative solutions drive success in the digital era. Partner with us and thrive in the digital landscape."
          }
          bptext={"Learn More"}
          bpurl={"/about"}
          bstext={"Contact Us"}
          bsurl={"/contact-us"}
        />

        <div className="wrapp min-h-full bg-gradient-to-r from-zinc-950 to-black pt-4 pb-8">
          {/* Features Section */}
          <TitleSection
            subtitle="Tailored for Success in the Digital Age"
            title="Transforming Tomorrow: Discover Our Suite of Cutting-Edge Solutions"
          />
          <FourColSection
            title1={"VPS Management"}
            description1={
              "Efficient VPS management for streamlined operations and optimal performance reliability."
            }
            image1={"/assets/vps-management.jpg"}
            title2={"Custom Web Design"}
            description2={
              "Tailored development of applications to suit your unique needs."
            }
            image2={"/assets/custom-web-design.jpg"}
            title3={"AI-Driven Content Creation"}
            description3={
              "Unlocking creativity with AI-powered content creation for unparalleled engagement"
            }
            image3={"/assets/ai-content-creation.jpg"}
            title4={"Radio Stream Hosting"}
            description4={
              "Reliable hosting for seamless radio streaming experiences, unmatched quality service."
            }
            image4={"/assets/radio-stream-hosting.jpg"}
          />
        </div>

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

        {/* Radio Broadcasting */}
        <SectionWrap>
          <div className="three bg-gradient-to-b from-black to-orange-900 pt-4 pb-8">
            <TitleSection
              subtitle="Reliable Radio Hosting Services"
              title="Seamless Broadcasting Solutions Tailored to Your Frequency"
            />
            <ThreeColSection
              title1={"Unlimited Reach, Unlimited Audience"}
              description1={
                "Expand your audience without limits with our radio stream hosting services. Enjoy unlimited listeners and bandwidth for seamless broadcasting."
              }
              image1={"/assets/radio-mixer.jpg"}
              title2={"Effortlessly Managed Playback"}
              description2={
                "Keep the music playing around the clock with our Auto DJ feature. Effortlessly manage your playlists and scheduling for uninterrupted entertainment."
              }
              image2={"/assets/autodj.jpg"}
              title3={"Podcast Hosting Made Easy"}
              description3={
                "Dive into the world of podcasting with ease. Our hosting services extend to podcast hosting, empowering you to share your voice with the world"
              }
              image3={"/assets/podcasting.jpg"}
            />
          </div>
        </SectionWrap>

        {/* Blog Section */}
        <SectionWrap>
          <TitleSection
            subtitle="Stay Informed, Stay Ahead"
            title="Fuel Your Curiosity: Explore Our Blog for Insights and Inspiration"
          />
          <BlogSection />
        </SectionWrap>

        {/* News Letter Signup */}
        <TitleSection
          subtitle="Delivered Straight To You Inbox"
          title="Weekly News Letters"
        />
        <OneColSection
          title={"Sign Up"}
          description={
            "Don't miss out! Stay updated on the latest trends, tips, and insights. Subscribe to our weekly newsletter for exclusive content."
          }
        />
      </RootLayout>
    </>
  );
}
