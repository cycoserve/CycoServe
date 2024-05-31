import RootLayout from "@/components/Layouts/RootLayout";
import HeaderSpace from "@/components/elements/HeaderSpace";
import SectionWrap from "@/components/elements/SectionWrap";
import { OrganizationProfile } from "@clerk/nextjs";

export default function OrganizationProfilePage() {
  return (
    <>
      <RootLayout>
        <HeaderSpace />
        <SectionWrap>
          <div className="flex justify-center items-center">
            <OrganizationProfile path="/organization" />
          </div>
        </SectionWrap>
      </RootLayout>
    </>

  )
}