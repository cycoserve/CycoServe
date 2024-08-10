import React from 'react';
import DestinationGrid from '../../components/destinations/DestinationGrid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const exampleDestinations = [
  {
    id: '1',
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    description: 'Experience the magic of the City of Light',
    price: 1200,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    description: 'Explore the vibrant metropolis of Tokyo',
    price: 1500,
    rating: 4.7,
  },
  {
    id: '3',
    name: 'New York City, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
    description: 'Discover the city that never sleeps',
    price: 1100,
    rating: 4.6,
  },
  {
    id: '4',
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    description: 'Relax on beautiful beaches and explore lush landscapes',
    price: 900,
    rating: 4.5,
  },
];

const DestinationsPage = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh] flex flex-col">
      <Header />
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <p className="text-xl">Discover amazing destinations and create unforgettable memories</p>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <DestinationGrid destinations={exampleDestinations} />
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage;