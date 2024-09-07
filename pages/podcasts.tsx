import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Sections/Hero";
import RootLayout from "../components/Layouts/RootLayout";
import TwoColSection from "../components/Sections/TwoColSection";
import ThreeColSection from "../components/Sections/ThreeColSection";
import TitleSection from "../components/Sections/TitleSection";
import Head from "next/head";
import SwiperComponent from "@/components/SwiperComponent";
import Spacer from "@/components/Spacer";
import PageEndHero from "@/components/elements/PageEndHero";
import SectionWrap from "@/components/elements/SectionWrap";

export default function Podcasts() {
  return (
    <>
      <Head>
        <title>CycoServe - Podcast Hosting and Management</title>
        <meta
          name="description"
          content="Discover CycoServe's podcast hosting and management services. Amplify your voice with our cutting-edge solutions for podcasters."
        />
        <meta
          name="keywords"
          content="podcast hosting, podcast management, audio content, digital marketing, CycoServe"
        />
        <meta name="author" content="CycoServe Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="CycoServe - Podcast Hosting and Management"
        />
        <meta
          property="og:description"
          content="Discover CycoServe's podcast hosting and management services. Amplify your voice with our cutting-edge solutions for podcasters."
        />
        <meta property="og:image" content="/assets/podcasting.jpg" />
        <meta property="og:url" content="https://cycoserve.com/podcasts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@CycoServe" />
        <meta
          name="twitter:title"
          content="CycoServe - Podcast Hosting and Management"
        />
        <meta
          name="twitter:description"
          content="Discover CycoServe's podcast hosting and management services. Amplify your voice with our cutting-edge solutions for podcasters."
        />
        <meta name="twitter:image" content="/assets/podcasting.jpg" />
      </Head>

      <RootLayout>
        <Hero
          title={"Elevate Your Podcast Game"}
          description={
            "Unleash the power of your voice with CycoServe's state-of-the-art podcast hosting and management solutions."
          }
          background={"/assets/podcasting.jpg"}
          bptext={"Get Started"}
          bpurl={"/contact-us"}
          bstext={"Learn More"}
          bsurl={"#features"}
        />
        <div className="features-bg wrapp min-h-full py-16 ">
          <SectionWrap>
            <div className="div">
              <div className="container mx-auto mb-12 px-4 md:px-0">
                <div className="bg-white p-4 border border-orange-500 rounded-lg inset-full max-w-xl">
                  <TitleSection
                    subtitle="Featured Podcasts"
                    title="Discover Trending Shows Hosted on CycoServe"
                  />
                </div>
              </div>
            </div>
            <SwiperComponent />
          </SectionWrap>
        </div>

        <div className="py-4">
          <div className="div pb-20 pt-12 bg-gray-200">
            <TitleSection
              subtitle="Why Choose CycoServe for Podcasting"
              title="Unmatched Benefits for Podcast Creators"
            />
            <TwoColSection
              title1={"Seamless Hosting Experience"}
              description1={
                "Enjoy hassle-free podcast hosting with our robust infrastructure, ensuring your episodes are always available to your audience."
              }
              image1={"/assets/hosting.jpg"}
              title2={"Advanced Analytics"}
              description2={
                "Gain valuable insights into your podcast's performance with our comprehensive analytics tools, helping you grow your audience effectively."
              }
              image2={"/assets/development.jpg"}
            />
          </div>
        </div>

        <div id="features" className="three bg-white pt-4 pb-8">
          <TitleSection
            subtitle="Powerful Podcast Features"
            title="Tools to Amplify Your Podcast's Success"
          />
          <ThreeColSection
            title1={"Unlimited Storage"}
            description1={
              "Never worry about storage limits. Upload and store as many episodes as you want, allowing your podcast library to grow without constraints."
            }
            image1={"/assets/hosting.jpg"}
            title2={"Easy Distribution"}
            description2={
              "Reach listeners on all major platforms with our one-click distribution. We'll ensure your podcast is available wherever your audience prefers to listen."
            }
            image2={"/assets/radio-stream-hosting.jpg"}
            title3={"Monetization Support"}
            description3={
              "Turn your passion into profit with our built-in monetization tools. Easily integrate ads, sponsorships, and listener support options."
            }
            image3={"/assets/social-media-marketing.jpg"}
          />
        </div>
        <div className="container px-4 lg:px-0 mx-auto">
          <PageEndHero
            background={"/assets/radio-mixer.jpg"}
            title={"Ready to Launch Your Podcast?"}
            description={
              "Join the CycoServe podcasting community today and take your audio content to new heights. Our expert team is ready to support your podcasting journey every step of the way."
            }
            bptext={"Start Podcasting"}
            bpurl={"/contact-us"}
            bstext={"Explore Plans"}
            bsurl={"/pricing"}
          />
        </div>
        <Spacer />
      </RootLayout>
    </>
  );
}