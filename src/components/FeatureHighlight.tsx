
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Dedicated Comparison View",
    description: "Compare prices, features, and specifications side by side for informed purchasing decisions.",
    icon: "⚖️"
  },
  {
    title: "Custom Price Alerts",
    description: "Set your desired price and get notified when products drop below your threshold.",
    icon: "🔔"
  },
  {
    title: "Focus on Specific Product Category",
    description: "Specialized data and comparison metrics for each electronics category.",
    icon: "🔍"
  },
  {
    title: "Filter by Discounts / Coupons",
    description: "Find the best deals with our discount and coupon filters across retailers.",
    icon: "💰"
  },
  {
    title: "User Personalization",
    description: "Get recommendations based on your browsing history and preferences.",
    icon: "👤"
  },
  {
    title: "Real-time Data Scraping",
    description: "Our system regularly updates prices to ensure you see the most current information.",
    icon: "⚡"
  },
  {
    title: "Direct Redirect to Product Page",
    description: "Go directly to the retailer's product page with a single click.",
    icon: "🔄"
  },
  {
    title: "Smaller Sellers or Local Stores",
    description: "Support local businesses by discovering deals from smaller retailers.",
    icon: "🏪"
  },
  {
    title: "Open-Source / Academic Value",
    description: "Transparent methodology and data for educational and research purposes.",
    icon: "📚"
  }
];

const FeatureHighlight: React.FC = () => {
  return (
    <div className="py-12 bg-brand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Key Features</h2>
        <p className="text-center text-gray-600 mb-10">Discover what makes Price Guru the best price comparison tool in India</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white transition-all hover:shadow-lg border border-gray-200 hover:border-brand-orange">
              <CardHeader className="pb-2">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
