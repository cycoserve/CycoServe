import React from 'react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='pt-12'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
