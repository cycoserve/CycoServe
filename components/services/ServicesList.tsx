// components/ServicesList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  slug: string;
  imageUrl: string;
}

const ServicesList: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        setError('Failed to load service data');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{error}</div>;
  }

  if (services.length === 0) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">No service data available</div>;
  }

  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-0 gap-0 lg:gap-8 container">
      {services.map((service) => (
        <div key={service.id} className="mb-8 ring-1 ring-orange-500 rounded-lg pt-4 pb-8 px-4">
          <h1 className="text-2xl font-bold mb-2">
            <Link href={`/services/${service.slug}`}>
              {service.name}
            </Link>
          </h1>
          <p className="mb-4 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
