
import { Product, Category, Retailer, CategoryType } from "../types";

export const categories: Category[] = [
  {
    id: 'tv',
    name: 'TVs',
    description: 'Smart TVs from Samsung, Sony, LG',
    icon: '📺',
    brands: ['Samsung', 'Sony', 'LG']
  },
  {
    id: 'phone',
    name: 'Smartphones',
    description: 'Latest phones from Apple, Samsung, Google Pixel',
    icon: '📱',
    brands: ['Apple', 'Samsung', 'Google']
  },
  {
    id: 'headphone',
    name: 'Headphones',
    description: 'Audio from boAt, Sony, JBL',
    icon: '🎧',
    brands: ['boAt', 'Sony', 'JBL']
  },
  {
    id: 'watch',
    name: 'Smartwatches',
    description: 'Wearables from Samsung, Apple, boAt',
    icon: '⌚',
    brands: ['Samsung', 'Apple', 'boAt']
  },
  {
    id: 'camera',
    name: 'Cameras',
    description: 'Cameras from Nikon, Canon, Sony',
    icon: '📷',
    brands: ['Nikon', 'Canon', 'Sony']
  },
  {
    id: 'laptop',
    name: 'Laptops',
    description: 'Premium laptops from Lenovo, HP, Dell',
    icon: '💻',
    brands: ['Lenovo', 'HP', 'Dell']
  }
];

export const retailers: Retailer[] = [
  {
    id: 'amazon',
    name: 'Amazon.in',
    logo: 'A',
    color: 'bg-yellow-500'
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    logo: 'F',
    color: 'bg-blue-500'
  },
  {
    id: 'croma',
    name: 'Croma',
    logo: 'C',
    color: 'bg-purple-500'
  },
  {
    id: 'reliance',
    name: 'Reliance Digital',
    logo: 'R',
    color: 'bg-red-500'
  }
];

export const products: Product[] = [
  // TVs
  {
    id: 'tv-samsung-1',
    name: 'Samsung Neo QLED 65" 4K Smart TV',
    brand: 'Samsung',
    category: 'tv',
    description: 'Ultimate 4K experience with Quantum Matrix Technology and Neo Quantum Processor',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 185990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 183990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 186990, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 184990, inStock: false, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'tv-sony-1',
    name: 'Sony Bravia XR OLED 55" 4K HDR TV',
    brand: 'Sony',
    category: 'tv',
    description: 'Cognitive Processor XR provides ultimate realism with deep blacks and natural colors',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 179990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 178990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 178990, inStock: false, url: 'https://croma.com' },
      { retailer: 'reliance', price: 176990, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'tv-lg-1',
    name: 'LG C3 65" 4K OLED evo Smart TV',
    brand: 'LG',
    category: 'tv',
    description: 'Self-lit OLED pixels for perfect blacks and over a billion colors with Dolby Vision IQ',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 189990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 189990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 187990, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 185990, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  
  // Phones
  {
    id: 'phone-apple-1',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    category: 'phone',
    description: 'The most advanced iPhone ever with A17 Pro chip, 48MP camera system, and titanium design',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 156900, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 158900, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 156900, inStock: false, url: 'https://croma.com' },
      { retailer: 'reliance', price: 157900, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'phone-samsung-1',
    name: 'Samsung Galaxy S23 Ultra 256GB',
    brand: 'Samsung',
    category: 'phone',
    description: 'Ultimate Galaxy experience with built-in S Pen, 200MP camera and dynamic AMOLED display',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 124999, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 123999, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 124999, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 122999, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'phone-google-1',
    name: 'Google Pixel 7 Pro 128GB',
    brand: 'Google',
    category: 'phone',
    description: "Google's best-in-class camera and pure Android experience with Google Tensor G2 chip",
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 84999, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 82999, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 83999, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 82999, inStock: false, url: 'https://reliancedigital.in' }
    ]
  },

  // Headphones
  {
    id: 'headphone-boat-1',
    name: 'boAt Rockerz 550 Bluetooth Headphones',
    brand: 'boAt',
    category: 'headphone',
    description: 'Premium over-ear wireless headphones with 50mm drivers and 20 hours playtime',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 1999, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 1899, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 2099, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 1999, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'headphone-sony-1',
    name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    brand: 'Sony',
    category: 'headphone',
    description: 'Industry-leading noise cancellation with 8 microphones, 30-hour battery and crystal clear calls',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 29990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 27990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 28990, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 29990, inStock: false, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'headphone-jbl-1',
    name: 'JBL Tour One Wireless Headphones',
    brand: 'JBL',
    category: 'headphone',
    description: 'Premium noise cancellation with Hi-Res certified sound and adaptive ambient aware features',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 24999, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 23999, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 24499, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 24999, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },

  // Watches
  {
    id: 'watch-samsung-1',
    name: 'Samsung Galaxy Watch 6 Classic',
    brand: 'Samsung',
    category: 'watch',
    description: 'Premium smartwatch with rotating bezel, advanced health tracking and Wear OS powered by Samsung',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 39999, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 38999, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 39999, inStock: false, url: 'https://croma.com' },
      { retailer: 'reliance', price: 38499, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'watch-apple-1',
    name: 'Apple Watch Series 9 GPS + Cellular',
    brand: 'Apple',
    category: 'watch',
    description: 'Advanced health features with always-on Retina display and double-tap gesture',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 49900, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 49900, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 48900, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 47900, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'watch-boat-1',
    name: 'boAt Wave Call Smart Watch',
    brand: 'boAt',
    category: 'watch',
    description: 'HD display with Bluetooth calling, 7-day battery life and health monitoring features',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 1499, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 1399, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 1599, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 1499, inStock: false, url: 'https://reliancedigital.in' }
    ]
  },

  // Cameras
  {
    id: 'camera-nikon-1',
    name: 'Nikon Z8 Mirrorless Camera',
    brand: 'Nikon',
    category: 'camera',
    description: 'Full-frame 45.7MP stacked CMOS sensor with 8K video and EXPEED 7 processor',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 339995, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 338995, inStock: false, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 339995, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 337995, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'camera-canon-1',
    name: 'Canon EOS R5 Mirrorless Camera',
    brand: 'Canon',
    category: 'camera',
    description: '45MP full-frame sensor with 8K RAW video and in-body image stabilization',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 349990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 348990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 349990, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 347990, inStock: false, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'camera-sony-1',
    name: 'Sony Alpha 7 IV Full-frame Camera',
    brand: 'Sony',
    category: 'camera',
    description: '33MP Exmor R sensor with advanced autofocus and 10-bit 4K recording',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 241990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 239990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 241990, inStock: false, url: 'https://croma.com' },
      { retailer: 'reliance', price: 238990, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },

  // Laptops
  {
    id: 'laptop-lenovo-1',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    brand: 'Lenovo',
    category: 'laptop',
    description: 'Ultra-light business laptop with 13th Gen Intel Core i7, 16GB RAM and 1TB SSD',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 179990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 178990, inStock: false, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 179990, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 178990, inStock: true, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'laptop-hp-1',
    name: 'HP Spectre x360 14 2-in-1 Laptop',
    brand: 'HP',
    category: 'laptop',
    description: 'Premium convertible laptop with OLED display, 13th Gen Intel Core i7 and Intel Arc Graphics',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 169990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 167990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 168990, inStock: true, url: 'https://croma.com' },
      { retailer: 'reliance', price: 166990, inStock: false, url: 'https://reliancedigital.in' }
    ]
  },
  {
    id: 'laptop-dell-1',
    name: 'Dell XPS 15 Laptop',
    brand: 'Dell',
    category: 'laptop',
    description: 'Powerful creator laptop with 13th Gen Intel Core i9, RTX 4070, and 4K OLED touch display',
    image: 'https://via.placeholder.com/150',
    prices: [
      { retailer: 'amazon', price: 249990, inStock: true, url: 'https://amazon.in' },
      { retailer: 'flipkart', price: 248990, inStock: true, url: 'https://flipkart.com' },
      { retailer: 'croma', price: 249990, inStock: false, url: 'https://croma.com' },
      { retailer: 'reliance', price: 247990, inStock: true, url: 'https://reliancedigital.in' }
    ]
  }
];

export const getProductsByCategory = (category: CategoryType): Product[] => {
  return products.filter(product => product.category === category);
};

export const getBestPrice = (productId: string) => {
  const product = products.find(p => p.id === productId);
  if (!product) return null;
  
  const inStockPrices = product.prices.filter(p => p.inStock);
  if (inStockPrices.length === 0) return null;
  
  return inStockPrices.reduce((lowest, current) => 
    current.price < lowest.price ? current : lowest, inStockPrices[0]);
};

