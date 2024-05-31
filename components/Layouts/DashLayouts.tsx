import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Shared Tailwind CSS classes
const sharedClasses = {
    container: 'flex h-screen overflow-hidden',
    sidebar: 'bg-zinc-900 text-white w-64 flex-shrink-0',
    sidebarContent: 'p-4',
    sidebarLink: 'block p-4 hover:bg-zinc-800 rounded-lg transition-colors duration-200',
    mainContent: 'flex-1 bg-zinc-100 overflow-y-auto px-4 lg:px-0',
};

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className={sharedClasses.sidebar}>
            <div className={sharedClasses.sidebarContent}>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <nav className="mt-4">
                <Link href="/dashboard" className={sharedClasses.sidebarLink}>
                    Dashboard
                </Link>
                <Link href="/dashboard/products" className={sharedClasses.sidebarLink}>
                    Products
                </Link>
                <Link href="/dashboard/orders" className={sharedClasses.sidebarLink}>
                    Orders
                </Link>
                <Link href="/dashboard/customers" className={sharedClasses.sidebarLink}>
                    Customers
                </Link>
                <Link href="/dashboard/settings" className={sharedClasses.sidebarLink}>
                    Settings
                </Link>
            </nav>
        </div>
    );
};

interface MainContentProps {
    children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return <div className={sharedClasses.mainContent}>{children}</div>;
};

interface DashLayoutProps {
    children: ReactNode;
}

const DashLayout: React.FC<DashLayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
                <meta name="description" content="Admin dashboard layout" />
            </Head>
            <div className={sharedClasses.container}>
                <div className='hidden bg-black lg:block'>
                    <Sidebar />
                </div>

                <MainContent>{children}</MainContent>
            </div>
        </>
    );
};

export default DashLayout;
