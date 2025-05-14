
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryType;
  description: string;
  image: string;
  prices: PriceInfo[];
}

export interface PriceInfo {
  retailer: RetailerType;
  price: number;
  inStock: boolean;
  url: string;
}

export type CategoryType = 'tv' | 'phone' | 'headphone' | 'watch' | 'camera' | 'laptop';

export type RetailerType = 'amazon' | 'flipkart' | 'croma' | 'reliance';

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  icon: string;
  brands: string[];
}

export interface Retailer {
  id: RetailerType;
  name: string;
  logo: string;
  color: string;
}

export interface Alert {
  id: string;
  productId: string;
  targetPrice: number;
  email: string;
  active: boolean;
}

export interface User {
  id: string;
  email: string;
  preferences: {
    favoriteCategories: CategoryType[];
    favoriteRetailers: RetailerType[];
  };
}
