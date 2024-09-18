import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import Blog from "@/components/content/Blog";
import Spacer from "@/components/ui/Spacer";
import SectionWrap from "@/components/elements/SectionWrap";
import BlogHero from "@/components/Sections/BlogHero";

export default function index() {
  return (
    <>
      <RootLayout>
        <BlogHero
          title="Helpful Articles To Increase Your Knowledge"
          description="Expand your expertise with our curated selection of insightful blog articles. Dive into the latest tips, trends, and tutorials designed to boost your knowledge and keep you ahead in your field."
          background="/assets/ai-content-creation.jpg"
          bptext="Download"
          bpurl="https://github.com/cycoserve/CycoServe"
          bstext="Guides"
          bsurl="http://docs.cycoserve.com/"
        />
        <SectionWrap>
          <Blog />
        </SectionWrap>
      </RootLayout>
    </>
  );
}
