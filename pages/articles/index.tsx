import Image from "next/image";
import Hero from "../../components/Sections/Hero";
import RootLayout from "../../components/Layouts/RootLayout";
import Head from "next/head";
import SectionWrap from "@/components/elements/SectionWrap";
import TitleSection from "@/components/Sections/TitleSection";
import HeaderSpace from "@/components/elements/HeaderSpace";
import Spacer from "@/components/Spacer";
import ArticlesList from "@/components/articles/ArticlesList";


export default function ArticlesPage() {
    return (
        <>
            <Head>
                <title>
                    Articles - CycoServe | A.I. Powered Full-Service Digital Marketing Agency
                </title>
                {/* Add any meta tags, stylesheets, or scripts here */}
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
                        subtitle="All Articles "
                        title="Welcome to our Articles page"
                    />
                    <ArticlesList />

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
