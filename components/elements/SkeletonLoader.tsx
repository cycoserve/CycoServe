// components/SkeletonLoader.tsx
import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <div className="flex flex-col space-y-4 p-4">
            <div className="h-6 bg-green-500 rounded w-3/4"></div>
            <div className="h-6 bg-green-500 rounded w-5/6"></div>
            <div className="h-6 bg-green-500 rounded w-2/3"></div>
            <div className="h-6 bg-green-500 rounded w-full"></div>
            <div className="h-6 bg-green-500 rounded w-1/2"></div>
            <div className="h-6 bg-green-500 rounded w-4/5"></div>
        </div>
    );
};

export default SkeletonLoader;
