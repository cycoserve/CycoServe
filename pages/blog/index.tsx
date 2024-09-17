import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import Blog from "@/components/content/Blog";
import Spacer from "@/components/ui/Spacer";
import SectionWrap from "@/components/elements/SectionWrap";

export default function index() {
  return (
    <>
      <RootLayout>
        <SectionWrap>
          <Spacer />
          <Blog />
        </SectionWrap>
      </RootLayout>
    </>
  );
}
