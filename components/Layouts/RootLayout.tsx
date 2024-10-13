import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from '../headers/Header';
import Footer from '../footers/CycoFooter';
import LoadingSpinner from '@/components/elements/LoadingSpinner';
import { CookieNotice } from '../cookie-notice';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if the current route is the home page
    const isHomePage = router.pathname === '/';

    if (isHomePage) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds loading time

      return () => clearTimeout(timer);
    } else {
      // Directly hide loader for non-home pages
      setLoading(false);
    }
  }, [router.pathname]);

  if (loading && router.pathname === '/') {
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
