import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Sections/Hero";
import RootLayout from "../components/Layouts/RootLayout";
import TwoColSection from "../components/Sections/TwoColSection";
import ThreeColSection from "../components/Sections/ThreeColSection";
import TitleSection from "../components/Sections/TitleSection";
import Head from "next/head";
import SwiperComponent from "@/components/SwiperComponent";
import VideoSwiperComponent from "@/components/VideoSwiperComponent";
import Spacer from "@/components/Spacer";

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
        <meta property="og:url" content="https://cycoserve.com/" />
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
          title={"CycoServe Digital Marketing"}
          description={"Launch you web project faster with assisted services."}
          background={"/assets/contacthero-bg.jpg"}
          bptext={"Get Started"}
          bpurl={""}
          bstext={"Hire Us"}
          bsurl={"/contact-us"}
        />
        <div className="features-bg wrapp min-h-full py-16 ">
          {/* Features Section */}
          <div className="div px-4 lg:px-4">
            <div className="container mx-auto mb-12">
              <div className="bg-white p-4 border border-orange-500 rounded-lg inset-full max-w-xl">
                <TitleSection
                  subtitle="Tailored for Success in the Digital Age"
                  title="Transforming Tomorrow: Discover Our Suite of Cutting-Edge Solutions"
                />
              </div>
            </div>
          </div>

          <SwiperComponent />
          
          <div className="mt-16">
            <div className="container mx-auto mb-12">
              <div className="bg-white p-4 border border-orange-500 rounded-lg inset-full max-w-xl">
                <TitleSection
                  subtitle="Explore Our Video Showcase"
                  title="Dive into Our Visual Journey: Watch, Learn, and Be Inspired"
                />
              </div>
            </div>
            <VideoSwiperComponent />
          </div>
        </div>
        {/* Two Col Section */}

        <div className="wrap px-4 py-4">
          <div className="div rounded-3xl pb-20 pt-12 border-b-4 border-orange-500 bg-gray-100 px-0">
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
          </div>
        </div>

        <div className="three bg-white pt-4 pb-8">
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
        <div className="container px-4 lg:px-0 mx-auto">
          <Hero
            background={"/assets/homehero-bg.jpg"}
            title={"Transform Your Digital Presence"}
            description={
              "We offer cutting edge digital services that will enhance your companies online presence. At CycoServe, we pioneer digital transformation. Our innovative solutions drive success in the digital era. Partner with us and thrive in the digital landscape."
            }
            bptext={"Learn More"}
            bpurl={"/about"}
            bstext={"Contact Us"}
            bsurl={"/contact-us"}
          />
        </div>

        <Spacer />
      </RootLayout>
    </>
  );
}
