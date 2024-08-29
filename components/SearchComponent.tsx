import React, { useState, ChangeEvent } from 'react';

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Implement the search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="w-full mb-4">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 text-gray-800 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleSearch}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchComponent;
