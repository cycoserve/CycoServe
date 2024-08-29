import Image from "next/image";
import { Inter } from "next/font/google";
import ContactForm from "@/components/Sections/ContactForm";
import SectionWrap from "@/components/elements/SectionWrap";
import BranchLayout from "@/components/Layouts/BranchLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="bg-[url('/assets/contacthero-bg.jpg')] bg-cover bg-center">
      <BranchLayout>
        
          <SectionWrap>
            <ContactForm />
          </SectionWrap>
      
      </BranchLayout>
      </div>
    </>
  );
}
