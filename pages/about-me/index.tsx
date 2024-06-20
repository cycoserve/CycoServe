import Image from "next/image";
import Hero from "@/components/Sections/Hero";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import TitleSection from "@/components/Sections/TitleSection";
import HeaderSpace from "@/components/elements/HeaderSpace";
import Spacer from "@/components/Spacer";


export default function AboutMePage() {
    return (
        <>
            <Head>
                <title>
                    about-me - Browse CycoServe AI Tools, CMS, CRM, E-commerce...
                </title>
                <meta name="description" content="about-me" />
                <meta name="keywords" content="about-me, digital marketing, AI, full service, agency, technology, SEO, web design, content creation, marketing strategies" />
                <meta name="author" content="CycoServe Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="about-me - CycoServe AI Tools" />
                <meta property="og:description" content="about-me" />
                <meta property="og:image" content="about-me" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@CycoServe" />
                <meta name="twitter:title" content="about-me - CycoServe AI Tools" />
                <meta name="twitter:description" content="about-me" />
                <meta name="twitter:image" content="about-me" />
            </Head>
            <RootLayout>
                {/* <Hero
          background={"/assets/earth-from-space.jpg"}
          title={"Your Digital Presence, Our Innovative Solutions"}
          description={
            "Discover our comprehensive suite of digital marketing services designed to drive growth, engagement, and success for your business. Let's transform your online presence together."
          }
          bptext={"Learn More"}
          bpurl={"/services"}
          bstext={"Conact Us"}
          bsurl={"/contact-us"}
        /> */}
                <HeaderSpace />
                <SectionWrap>
                    <TitleSection
                        subtitle="About-me"
                        title="Welcome to our About-me page"
                    />
            

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
