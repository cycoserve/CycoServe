import Image from "next/image";
import { Inter } from "next/font/google";
import ContactForm from "@/components/Sections/ContactForm";
import SectionWrap from "@/components/elements/SectionWrap";
import BranchLayout from "@/components/Layouts/BranchLayout";
import FAQComponent from "@/components/FAQComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/contacthero-bg.jpg')] bg-cover bg-center">
        <BranchLayout>
          <SectionWrap>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <ContactForm />
              </div>
              <div className="w-full lg:w-1/2">
                <FAQComponent />
              </div>
            </div>
          </SectionWrap>
        </BranchLayout>
      </div>
    </>
  );
}
