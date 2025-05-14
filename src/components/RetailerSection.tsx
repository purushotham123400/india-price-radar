
import React from 'react';
import { retailers } from '../data/data';

const RetailerSection: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {retailers.map((retailer) => (
            <div key={retailer.id} className="flex flex-col items-center">
              <div className={`${retailer.color} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-3`}>
                {retailer.logo}
              </div>
              <p className="font-medium text-center">{retailer.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetailerSection;
