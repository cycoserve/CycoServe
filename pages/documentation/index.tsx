import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../../components/Sections/Hero";
import Features from "../../components/Features";
import RootLayout from "../../components/Layouts/RootLayout";
import Head from "next/head";
import FourColSection from "@/components/Sections/FourColSection";
import SectionWrap from "@/components/elements/SectionWrap";
import TitleSection from "@/components/Sections/TitleSection";
import SwiperComponent from "@/components/SwiperComponent";
import HeaderSpace from "@/components/elements/HeaderSpace";
import Spacer from "@/components/Spacer";

export default function DocumentationPage() {
  return (
    <>
      <Head>
        <title>
          Documentation - CycoServe | Full-Service Digital Marketing Agency
        </title>
        {/* Add any meta tags, stylesheets, or scripts here */}
      </Head>
      <RootLayout>
        <Spacer />
        <SectionWrap>
          <TitleSection
            subtitle="Tailored for Success in the Digital Age"
            title="Transforming Tomorrow: Discover Our Suite of Cutting-Edge Solutions"
          />
          <SwiperComponent />

        </SectionWrap>
        <div className="container mx-auto px-4 lg:px-0">
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
