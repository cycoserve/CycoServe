import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "../../components/Layouts/RootLayout";
import HeaderSpace from "@/components/elements/HeaderSpace";
import ContactForm from "@/components/Sections/ContactForm";
import Spacer from "@/components/Spacer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <RootLayout>
        <HeaderSpace />
        <ContactForm />
        <Spacer />
      </RootLayout>
    </>
  );
}
