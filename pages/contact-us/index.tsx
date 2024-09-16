import { Inter } from "next/font/google";
import ContactForm from "@/components/Sections/ContactForm";
import SectionWrap from "@/components/elements/SectionWrap";
import BranchLayout from "@/components/Layouts/BranchLayout";




export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/contacthero-bg.jpg')] bg-cover bg-center">
        <BranchLayout>
          <SectionWrap>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full">
                <ContactForm />
              </div>
            </div>
          </SectionWrap>
        </BranchLayout>
      </div>
    </>
  );
}
