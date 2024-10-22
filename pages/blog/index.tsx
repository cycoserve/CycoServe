import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import Blog from "@/components/content/Blog";
import SectionWrap from "@/components/elements/SectionWrap";
import MetaTags from "@/components/headers/MetaData";
import BlogHero from "@/components/sections/BlogHero";
import Spacer from "@/components/ui/Spacer";




export default function index() {
  return (
    <>
      <MetaTags
        title="Blog - Helpful Articles To Increase Your Knowledge"
        description="Stay updated with the latest insights, trends, and strategies in AI-powered digital marketing. Expand your expertise with our curated selection of insightful blog articles. Dive into the latest tips, trends, and tutorials designed to boost your knowledge and keep you ahead in your field."
        url="https://cycoserve.com/blog"
        imageUrl="https://cycoserve.com/assets/images/blog-og-image.jpg"
      />
      <RootLayout>
        <SectionWrap>
          <Spacer />
          <Blog />
        </SectionWrap>
      </RootLayout>
    </>
  );
}
