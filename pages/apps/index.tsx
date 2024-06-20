import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../../components/Sections/Hero";
// import Features from "../../components/Features";
import RootLayout from "../../components/Layouts/RootLayout";
import Head from "next/head";
// import FourColSection from "@/components/Sections/FourColSection";
import SectionWrap from "@/components/elements/SectionWrap";
import TitleSection from "@/components/Sections/TitleSection";
// import SwiperComponent from "@/components/SwiperComponent";
import HeaderSpace from "@/components/elements/HeaderSpace";
import Spacer from "@/components/Spacer";
import AppsList from "@/components/apps/AppsList";

export default function AppsPage() {
    return (
        <>
                 <Head>
        <title>
          Apps - CycoServe | AI Powered Full Service Digital Marketing Agency
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
                <HeaderSpace />
                <SectionWrap>
                    <TitleSection
                        subtitle="All Apps"
                        title="Welcome to our Apps page"
                    />
                    <AppsList />

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
