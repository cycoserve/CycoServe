import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "../../components/Layouts/RootLayout";
import HeaderSpace from "@/components/elements/HeaderSpace";
import ContactForm from "@/components/Sections/ContactForm";
import Spacer from "@/components/Spacer";
import SectionWrap from "@/components/elements/SectionWrap";
import BranchLayout from "@/components/Layouts/BranchLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BranchLayout>
        <SectionWrap>
          <ContactForm />
        </SectionWrap>
      </BranchLayout>
    </>
  );
}
