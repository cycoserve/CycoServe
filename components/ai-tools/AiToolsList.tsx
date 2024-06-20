// components/AiToolsList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface AiTool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  pros: string[];
  cons: string[];
  features: string[];
  slug: string;
}

const AiToolsList: React.FC = () => {
  const [aiTools, setAiTools] = useState<AiTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAiTools = async () => {
      try {
        const response = await axios.get('/api/ai-tools');
        setAiTools(response.data);
      } catch (error) {
        setError('Failed to load AiTool data');
      } finally {
        setLoading(false);
      }
    };

    fetchAiTools();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{error}</div>;
  }

  if (aiTools.length === 0) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">No aitool data available</div>;
  }

  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-0 gap-8 container">
      {aiTools.map((aiTool) => (
        <div key={aiTool.id} className="mb-0 ring-1 ring-orange-500 rounded-lg pt-4 pb-8 px-4">
          <Link href={`/ai-tools/${aiTool.slug}`} passHref>
            <div className="block">
              <h1 className="text-2xl font-bold mb-2">{aiTool.name}</h1>
            </div>
          </Link>
          <p className="mb-4 text-sm line-clamp-3">{aiTool.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AiToolsList;
