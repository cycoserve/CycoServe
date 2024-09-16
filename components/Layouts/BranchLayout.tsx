import React from "react";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Header from "../headers/Header";
import SecondHeader from "../headers/SecondHeader";
import Footer from "../footers/Footer";
import AIHelpChat from "../AIHelpChat";

interface BranchLayoutProps {
  children: ReactNode;
}

const BranchLayout: React.FC<BranchLayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div>
      <header>{isHomePage ? <Header /> : <SecondHeader />}</header>
      <main className="pt-12 md:pt-24 bg-white">{children}</main>
      <footer>
        <AIHelpChat />
        <Footer />
      </footer>
    </div>
  );
};

export default BranchLayout;
