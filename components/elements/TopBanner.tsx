import Link from 'next/link';
import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-4 text-center">
      <p className="text-lg font-bold px-2">
        CycoServe supports Donald Trump. <Link href={'https://www.usa.gov/how-to-vote'}><span className='underline hover:text-gray-400'>Vote for Trump!</span></Link>
      </p>
    </div>
  );
};

export default TopBanner;
