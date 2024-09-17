import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "@/components/Sections/Hero";
import RootLayout from "@/components/Layouts/RootLayout";
import TwoColSection from "@/components/Sections/TwoColSection";
import ThreeColSection from "@/components/Sections/ThreeColSection";
import TitleSection from "@/components/Sections/TitleSection";
import SwiperComponent from "@/components/Sections/SwiperComponent";
import PageEndHero from "@/components/elements/PageEndHero";
import SectionWrap from "@/components/elements/SectionWrap";
import TopBanner from "@/components/elements/TopBanner";
import { NewsletterSignupComponent } from "@/components/newsletter-signup";
import Spacer from "@/components/ui/Spacer";

export default function Home() {
  // Framer Motion animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Head>
        <title>CycoServe - AI/ML Powered Digital Marketing Agency</title>
        {/* Meta tags here */}
      </Head>

      <RootLayout>
        {/* Hero Section */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Hero
            title="Your Portable Digital Marketing Agency"
            description="A fully portable digital marketing agency, seamlessly integrating AI-driven strategies and on-the-go solutions."
            background=""
            bptext="Download"
            bpurl="https://github.com/cycoserve/CycoServe"
            bstext="Guides"
            bsurl="http://docs.cycoserve.com/"
          />
        </motion.div>

        {/* Top Banner */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TopBanner />
        </motion.div>

        {/* Features Section */}
        <div className="features-bg wrap min-h-full py-12">
          <SectionWrap>
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="container mx-auto px-4 md:px-0">
                <div className="bg-gradient-to-br from-zinc-900 to-black p-4 border border-zinc-800 hover:border-orange-500 rounded-lg inset-full max-w-xl">
                  <TitleSection
                    subtitle="Tailored for Success in the Digital Age"
                    title="Transforming Tomorrow: Discover Our Suite of Cutting-Edge Solutions"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SwiperComponent />
            </motion.div>
          </SectionWrap>
        </div>

        {/* 2 Col Section */}
        <div className="py-24 bg-black">
          <SectionWrap>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TitleSection
                subtitle="Your Success, Our Commitment"
                title="Choose CycoServe: Where Professionalism Meets Generosity"
              />
            </motion.div>
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TwoColSection
                title1="Streamlined Web Development"
                description1="Rest assured with our professional approach using GitHub and CI/CD, safeguarding your code integrity and eliminating worries of loss."
                image1="/assets/development.jpg"
                title2="Generous Hosting Terms"
                description2="Benefit from our cost-effective model - no hosting fees until your web app exceeds generous usage limits, ensuring scalability without lock-in."
                image2="/assets/hosting.jpg"
              />
            </motion.div>
          </SectionWrap>
        </div>

        {/* 3 Col Section */}
        <div className="three bg-zinc-950 py-24">
          <SectionWrap>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TitleSection
                subtitle="Reliable Radio Hosting Services"
                title="Seamless Broadcasting Solutions Tailored to Your Frequency"
              />
            </motion.div>
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ThreeColSection
                title1="Unlimited Reach, Unlimited Audience"
                description1="Expand your audience without limits with our radio stream hosting services. Enjoy unlimited listeners and bandwidth for seamless broadcasting."
                image1="/images/dj-trump-1.webp"
                title2="Effortlessly Managed Playback"
                description2="Keep the music playing around the clock with our Auto DJ feature. Effortlessly manage your playlists and scheduling for uninterrupted entertainment."
                image2="/images/trump-coder.webp"
                title3="Podcast Hosting Made Easy"
                description3="Dive into the world of podcasting with ease. Our hosting services extend to podcast hosting, empowering you to share your voice with the world."
                image3="/assets/podcasting.jpg"
              />
            </motion.div>
          </SectionWrap>
        </div>

        {/* Page End Hero */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl py-12 mx-auto"
        >
          <PageEndHero
            background="/images/dj-trump-1.webp"
            title="Transform Your Digital Presence"
            description="We offer cutting edge digital services that will enhance your company's online presence. At CycoServe, we pioneer digital transformation. Our innovative solutions drive success in the digital era. Partner with us and thrive in the digital landscape."
            bptext="Download"
            bpurl="https://github.com/cycoserve/CycoServe"
            bstext="Guides"
            bsurl="https://docs.cycoserve.com/"
          />
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <NewsletterSignupComponent />
        </motion.div>
        <Spacer />
      </RootLayout>
    </>
  );
}
