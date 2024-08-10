import React from 'react';
import DestinationCard from './DestinationCard';

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}

interface DestinationGridProps {
  destinations: Destination[];
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ destinations }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationGrid;