
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">About Price Guru</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Price Guru was founded with a simple mission: to help Indian consumers make informed purchasing decisions by providing transparent, up-to-date price comparisons for electronics products.
              </p>
              <p className="text-gray-700">
                We believe that everyone deserves to get the best value for their money, and our platform is designed to make finding the best deals quick and easy.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
              <p className="text-gray-700 mb-4">
                Our platform aggregates product data from major Indian electronics retailers including Amazon, Flipkart, Croma, and Reliance Digital. We update our database regularly to ensure prices and availability are accurate.
              </p>
              <p className="text-gray-700">
                When you search for a product, we show you the prices from all available retailers in real-time, allowing you to quickly identify the best deal. You can then click through directly to the retailer's site to make your purchase.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Educational Value</h2>
              <p className="text-gray-700 mb-4">
                Price Guru is not just a shopping tool but also an educational resource. We're committed to providing value to the academic community by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Publishing pricing trends and pattern analyses</li>
                <li>Providing insights into the Indian e-commerce ecosystem</li>
                <li>Offering a platform for market research and consumer behavior studies</li>
                <li>Supporting open-source initiatives that promote price transparency</li>
              </ul>
              <p className="text-gray-700">
                We believe that transparency in pricing benefits consumers, retailers, and the market as a whole.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Ready to find the best deals on electronics?
              </p>
              <Link to="/" className="inline-block bg-brand-orange hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md">
                Start Comparing Prices
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
