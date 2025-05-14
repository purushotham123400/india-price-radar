
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Price Guru</h3>
            <p className="text-gray-300">Find the best electronics deals in India. Compare prices instantly across major retailers.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/tv" className="text-gray-300 hover:text-white">TVs</Link></li>
              <li><Link to="/category/phone" className="text-gray-300 hover:text-white">Smartphones</Link></li>
              <li><Link to="/category/headphone" className="text-gray-300 hover:text-white">Headphones</Link></li>
              <li><Link to="/category/watch" className="text-gray-300 hover:text-white">Smartwatches</Link></li>
              <li><Link to="/category/camera" className="text-gray-300 hover:text-white">Cameras</Link></li>
              <li><Link to="/category/laptop" className="text-gray-300 hover:text-white">Laptops</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-white">Price Comparison</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white">Price Alerts</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white">Product Reviews</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white">Deal Filters</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">© 2025 Price Guru. All rights reserved.</p>
          <p className="text-gray-400 mt-1">Prices and information provided for educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
