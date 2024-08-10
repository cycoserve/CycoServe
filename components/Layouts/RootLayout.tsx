import React from 'react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from '../Header';
import SecondHeader from '../SecondHeader';
import Footer from '../Footer';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div>
      <header>
        {isHomePage ? <Header /> : <SecondHeader />}
      </header>
      <main className=''>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
