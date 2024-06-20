// components/ProductsList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  description: string;
  website: string;
  benefits: string[];
  features: string[];
  slug: string; // Assuming each product has a slug field for the URL
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to load product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">No product data available</div>;
  }

  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-0 gap-8 container">
      {products.map((product) => (
        <div key={product.id} className="mb-0 ring-1 ring-orange-500 rounded-lg pt-4 pb-8 px-4">
          <Link href={`/products/${product.slug}`} passHref>
            <div className="block">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            </div>
          </Link>
          <p className="mb-4 text-sm line-clamp-3">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
