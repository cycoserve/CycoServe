import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from '../headers/Header';
import Footer from '../footers/Footer';
import LoadingSpinner from '@/components/elements/LoadingSpinner';
import { CookieNotice } from '../cookie-notice';



interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />; 
  }

  return (
    <div>
      <header>
       <Header />
      </header>
      <main>{children}</main>
      <CookieNotice />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
