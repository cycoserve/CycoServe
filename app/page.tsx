import Image from "next/image";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <AboutSection />
      </main>
    </>
  );
}
