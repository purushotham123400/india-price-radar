
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks: React.FC = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How Price Guru Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white transition-all hover:shadow-lg border border-gray-200 hover:border-brand-orange">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center">
                <div className="bg-brand-blue text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mb-3">
                  1
                </div>
              </div>
              <CardTitle>Search Products</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Enter the name or category of the electronics product you're looking for</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white transition-all hover:shadow-lg border border-gray-200 hover:border-brand-orange">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center">
                <div className="bg-brand-blue text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mb-3">
                  2
                </div>
              </div>
              <CardTitle>Compare Prices</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>See real-time prices from Amazon, Flipkart, Croma, and Reliance Digital</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white transition-all hover:shadow-lg border border-gray-200 hover:border-brand-orange">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center">
                <div className="bg-brand-blue text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mb-3">
                  3
                </div>
              </div>
              <CardTitle>Buy at Best Price</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Click through to the retailer with the best deal and make your purchase</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg">Save time and money by comparing prices in one place</p>
          <p className="text-md text-gray-600 mt-2">Price Guru helps you find the best electronics deals across major Indian retailers</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
