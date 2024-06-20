import React, { useEffect, useState } from 'react';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '@/utils/firebase'; // Adjust the import path as per your project structure
import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';

interface DashboardItem {
    title: string;
    link: string;
}

const DashboardComponent: React.FC = () => {
    // Define dashboard items with their titles and links
    const dashboardItems: DashboardItem[] = [
        { title: 'Customers', link: '/dashboard/customers' },
        // { title: 'Companies', link: '/dashboard/customers/companies' },
        { title: 'Articles', link: '/dashboard/articles' },
        { title: 'Products', link: '/dashboard/products' },
        { title: 'Orders', link: '/dashboard/orders' },
        { title: 'Services', link: '/dashboard/services' },
        { title: 'Artists', link: '/dashboard/artists' },
        { title: 'Users', link: '/dashboard/users' },
        { title: 'Websites', link: '/dashboard/websites' },
   
  
        // Add more items as needed
    ];

    // State variable to hold counts for various collections
    const [counts, setCounts] = useState<{ [key: string]: number | null }>({});

    // useEffect to fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Initialize an object to store counts dynamically
                const countsObject: { [key: string]: number | null } = {};

                // Iterate over dashboard items and fetch counts
                for (const item of dashboardItems) {
                    const itemCollection = collection(db, item.title.toLowerCase()); // Assuming collection name matches title
                    const itemSnapshot = await getCountFromServer(itemCollection);
                    countsObject[item.title.toLowerCase()] = itemSnapshot.data().count;
                }

                // Update state with fetched counts
                setCounts(countsObject);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <>
            <div className='container px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* Render dashboard items dynamically */}
                {dashboardItems.map((item) => (
                    <DashboardItem key={item.title} title={item.title} link={item.link} count={counts[item.title.toLowerCase()]} />
                ))}
            </div>
        </>
    );
};

// DashboardItem component for rendering individual dashboard items
interface DashboardItemProps {
    title: string;
    link: string;
    count: number | null;
}

const DashboardItem: React.FC<DashboardItemProps> = ({ title, link, count }) => (
    <div className='ring-1 ring-zinc-200 p-4 rounded-sm hover:shadow-md'>
        <Link href={link} passHref>
            <div className='hover:underline'>
                <h4>{title}</h4>
            </div>
        </Link>
        <p>QTY: {count !== null ? count : 'Loading...'}</p>
    </div>
);

export default DashboardComponent;
