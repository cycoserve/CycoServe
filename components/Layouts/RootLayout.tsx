import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from '../Header';
import SecondHeader from '../SecondHeader';
import Footer from '../Footer';
import LoadingSpinner from '@/components/elements/LoadingSpinner'; // Import the new LoadingSpinner

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

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
        {isHomePage ? <Header /> : <SecondHeader />}
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
