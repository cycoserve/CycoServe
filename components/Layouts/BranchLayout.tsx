import React from 'react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from '../Header';
import SecondHeader from '../SecondHeader';
import Footer from '../Footer';

interface BranchLayoutProps {
  children: ReactNode;
}

const BranchLayout: React.FC<BranchLayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';


  return (
    <div>
      <header>
        {isHomePage ? <Header /> : <SecondHeader />}
      </header>
      <main className='pt-24'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BranchLayout;
