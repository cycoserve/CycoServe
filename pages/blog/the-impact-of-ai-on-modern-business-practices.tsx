import React from "react";
import RootLayout from "../components/Layouts/RootLayout";
import Hero from "../components/Sections/Hero";
import Head from "next/head";

function TheImpactBlogPost() {
  return (
    <>
      <Head>
        <title>The Blog Post</title>
      </Head>
      <RootLayout>
        <Hero
          title={""}
          description={""}
          background={""}
          bptext={""}
          bpurl={""}
          bstext={""}
          bsurl={""}
        />
        <div>the-impact-of-ai-on-modern-business-practices</div>
      </RootLayout>
    </>
  );
}

export default TheImpactBlogPost;
