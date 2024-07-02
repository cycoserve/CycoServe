import React, { ReactNode } from 'react';
import Head from 'next/head';
import withAuth from '@/utils/withAuth';
import Logo from '../Logo';
import Sidebar from './SideBar';
import FullWidthTabs from './FullWidthTabs';
import MobileMenu from '../MobileMenu';
import Header from '../Header';
import DashboardHeader from '../Dashboards/DashboardHeader';


// Shared Tailwind CSS classes
const sharedClasses = {
  container: 'flex h-screen overflow-hidden',
  mainContent: 'flex-1 bg-white overflow-y-auto px-0 lg:px-0',
};

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <>
      <div className={sharedClasses.mainContent}>
        <div className="md:hidden">
        <DashboardHeader />
        </div>

        {children}
      </div>
    </>
  )
};

interface DashLayoutProps {
  children: ReactNode;
}

const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>CycoServe Dashboard</title>
        <meta name="description" content="Admin dashboard for changing various data objects and settings." />
      </Head>
      <div className={sharedClasses.container}>
        <Sidebar />
        <MainContent>
   
          {children}
        </MainContent>
      </div>
    </>
  );
};

export default withAuth(DashLayout);
