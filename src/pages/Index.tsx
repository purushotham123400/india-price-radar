
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import CategoryCard from '@/components/CategoryCard';
import PopularSearches from '@/components/PopularSearches';
import RetailerSection from '@/components/RetailerSection';
import FeatureHighlight from '@/components/FeatureHighlight';
import { categories } from '@/data/data';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-brand-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find the Best Electronics Deals in India
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Compare prices instantly across Amazon, Flipkart, Croma, and Reliance Digital
            </p>
          </div>
        </div>
        
        {/* Popular Searches */}
        <PopularSearches />
        
        {/* Retailers */}
        <RetailerSection />
        
        {/* How it works */}
        <HowItWorks />
        
        {/* Categories */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Features */}
        <FeatureHighlight />
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
