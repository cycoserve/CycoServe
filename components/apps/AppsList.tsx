// components/AppsList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface App {
  id: string;
  name: string;
  description: string;
  website: string;
  benefits: string[];
  features: string[];
  slug: string;
}

const AppsList: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get('/api/apps');
        setApps(response.data);
      } catch (error) {
        setError('Failed to load app data');
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{error}</div>;
  }

  if (apps.length === 0) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">No app data available</div>;
  }

  return (
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-0 gap-8 container">
      {apps.map((app) => (
        <div key={app.id} className="mb-8 ring-1 flex flex-col justify-between items-center ring-orange-500 rounded-lg p-4 aspect-square hover:shadow-md hover:shadow-orange-400 hover:cursor-pointer">
          <Link href={`/apps/${app.slug}`}>
            <h1 className="text-2xl font-bold mb-2">{app.name}</h1>
          </Link>
        
          <p className="mb-4 text-sm line-clamp-3">{app.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AppsList;
