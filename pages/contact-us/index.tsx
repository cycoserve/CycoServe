import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Sections/Hero";
import Features from "../components/Features";
import RootLayout from "../components/Layouts/RootLayout";
import About from "../components/AboutSection";
import AboutSection from "../components/AboutSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <RootLayout>
        <Hero
          background={"/assets/contacthero-bg.jpg"}
          title={"Transform Your Digital Presence with CycoServe"}
          description={""}
          bptext={"Learn More"}
          bpurl={"/services"}
          bstext={"Contact Us"}
          bsurl={"/contact-us"}
        />
        <AboutSection />
        <Features />
      </RootLayout>
    </>
  );
}
