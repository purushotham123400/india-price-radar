
import React from 'react';
import { retailers } from '../data/data';

const RetailerIcon = ({ retailerId, size = 'md' }) => {
  const retailer = retailers.find(r => r.id === retailerId);
  
  if (!retailer) return null;
  
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-10 h-10 text-base',
    lg: 'w-14 h-14 text-xl'
  };
  
  return (
    <div 
      className={`${retailer.color} text-white rounded-full flex items-center justify-center font-bold ${sizeClasses[size]}`}
      title={retailer.name}
    >
      {retailer.logo}
    </div>
  );
};

export default RetailerIcon;
