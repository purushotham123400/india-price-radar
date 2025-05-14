
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureHighlight from '@/components/FeatureHighlight';

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-brand-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Features</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Price Guru combines powerful features to help you find the best electronics deals across multiple retailers in India.
            </p>
          </div>
        </div>
        
        <FeatureHighlight />
        
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">How We Compare Prices</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Real-Time Data Collection</h3>
                  <p className="text-gray-700">
                    Our system continuously monitors prices across major Indian electronics retailers. We use advanced web crawling technology to ensure prices are up-to-date and accurate.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Comparison</h3>
                  <p className="text-gray-700">
                    Beyond just the price, we compare availability, delivery options, warranty information, and seller ratings to give you a complete picture before making a purchase.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Price History Tracking</h3>
                  <p className="text-gray-700">
                    We track price changes over time, allowing you to see if the current price is truly a good deal compared to historical pricing data.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Smart Alerts</h3>
                  <p className="text-gray-700">
                    Set your desired price for any product, and we'll notify you when the price drops to your target. Never miss a deal again!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
