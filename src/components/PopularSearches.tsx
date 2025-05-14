
import React from 'react';
import { Link } from 'react-router-dom';

const popularSearches = [
  "iPhone 15 Pro", 
  "Samsung S24", 
  "MacBook Air", 
  "Sony PS5", 
  "Samsung TV", 
  "OnePlus 12", 
  "Noise Smartwatch"
];

const PopularSearches: React.FC = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 mb-3">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((search) => (
              <Link 
                key={search} 
                to={`/search?q=${encodeURIComponent(search)}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSearches;
