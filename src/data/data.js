export const categories = [
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

export const retailers = [
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

export const products = [
  // TVs
  {
    id: 'tv-samsung-1',
    name: 'Samsung Neo QLED 65" 4K Smart TV',
    brand: 'Samsung',
    category: 'tv',
    description: 'Ultimate 4K experience with Quantum Matrix Technology and Neo Quantum Processor',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 185990, inStock: true, url: 'https://amazon.in/product/tv-samsung-1' },
      { retailer: 'flipkart', price: 183990, inStock: true, url: 'https://flipkart.com/product/tv-samsung-1' },
      { retailer: 'croma', price: 186990, inStock: true, url: 'https://croma.com/product/tv-samsung-1' },
      { retailer: 'reliance', price: 184990, inStock: false, url: 'https://reliancedigital.in/product/tv-samsung-1' }
    ]
  },
  {
    id: 'tv-sony-1',
    name: 'Sony BRAVIA XR 55" OLED 4K TV',
    brand: 'Sony',
    category: 'tv',
    description: 'Cognitive Processor XR delivers lifelike picture quality',
    image: 'https://images.unsplash.com/photo-1635249844999-e54299469544?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 139990, inStock: true, url: 'https://amazon.in/product/tv-sony-1' },
      { retailer: 'flipkart', price: 137990, inStock: true, url: 'https://flipkart.com/product/tv-sony-1' },
      { retailer: 'croma', price: 140990, inStock: true, url: 'https://croma.com/product/tv-sony-1' },
      { retailer: 'reliance', price: 138990, inStock: false, url: 'https://reliancedigital.in/product/tv-sony-1' }
    ]
  },
  {
    id: 'tv-lg-1',
    name: 'LG OLED 48" 4K Smart TV',
    brand: 'LG',
    category: 'tv',
    description: 'Self-lit OLED pixels for infinite contrast and perfect black',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 124990, inStock: true, url: 'https://amazon.in/product/tv-lg-1' },
      { retailer: 'flipkart', price: 122990, inStock: true, url: 'https://flipkart.com/product/tv-lg-1' },
      { retailer: 'croma', price: 125990, inStock: true, url: 'https://croma.com/product/tv-lg-1' },
      { retailer: 'reliance', price: 123990, inStock: false, url: 'https://reliancedigital.in/product/tv-lg-1' }
    ]
  },
  // Phones
  {
    id: 'phone-apple-1',
    name: 'Apple iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'phone',
    description: 'The ultimate iPhone with the A17 Bionic chip and advanced camera system',
    image: 'https://images.unsplash.com/photo-1663190243661-334f8146ca9a?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 159900, inStock: true, url: 'https://amazon.in/product/phone-apple-1' },
      { retailer: 'flipkart', price: 157900, inStock: true, url: 'https://flipkart.com/product/phone-apple-1' },
      { retailer: 'croma', price: 160900, inStock: true, url: 'https://croma.com/product/phone-apple-1' },
      { retailer: 'reliance', price: 158900, inStock: false, url: 'https://reliancedigital.in/product/phone-apple-1' }
    ]
  },
  {
    id: 'phone-samsung-1',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'phone',
    description: 'The latest Galaxy with Snapdragon 8 Gen 3 and enhanced AI features',
    image: 'https://images.unsplash.com/photo-1512058564299-cfca696991ca?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 129990, inStock: true, url: 'https://amazon.in/product/phone-samsung-1' },
      { retailer: 'flipkart', price: 127990, inStock: true, url: 'https://flipkart.com/product/phone-samsung-1' },
      { retailer: 'croma', price: 130990, inStock: true, url: 'https://croma.com/product/phone-samsung-1' },
      { retailer: 'reliance', price: 128990, inStock: false, url: 'https://reliancedigital.in/product/phone-samsung-1' }
    ]
  },
  {
    id: 'phone-google-1',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    category: 'phone',
    description: 'The smartest phone with Google AI and advanced camera capabilities',
    image: 'https://images.unsplash.com/photo-1555426253-895943910388?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 119990, inStock: true, url: 'https://amazon.in/product/phone-google-1' },
      { retailer: 'flipkart', price: 117990, inStock: true, url: 'https://flipkart.com/product/phone-google-1' },
      { retailer: 'croma', price: 120990, inStock: true, url: 'https://croma.com/product/phone-google-1' },
      { retailer: 'reliance', price: 118990, inStock: false, url: 'https://reliancedigital.in/product/phone-google-1' }
    ]
  },
  // Headphones
  {
    id: 'headphone-boat-1',
    name: 'boAt Rockerz 550',
    brand: 'boAt',
    category: 'headphone',
    description: 'Wireless headphones with super bass and long battery life',
    image: 'https://images.unsplash.com/photo-1583395255341-58835014aa56?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 1999, inStock: true, url: 'https://amazon.in/product/headphone-boat-1' },
      { retailer: 'flipkart', price: 1799, inStock: true, url: 'https://flipkart.com/product/headphone-boat-1' },
      { retailer: 'croma', price: 2099, inStock: true, url: 'https://croma.com/product/headphone-boat-1' },
      { retailer: 'reliance', price: 1899, inStock: false, url: 'https://reliancedigital.in/product/headphone-boat-1' }
    ]
  },
  {
    id: 'headphone-sony-1',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'headphone',
    description: 'Industry-leading noise cancellation and premium sound quality',
    image: 'https://images.unsplash.com/photo-1616763355603-979cab965719?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 29990, inStock: true, url: 'https://amazon.in/product/headphone-sony-1' },
      { retailer: 'flipkart', price: 27990, inStock: true, url: 'https://flipkart.com/product/headphone-sony-1' },
      { retailer: 'croma', price: 30990, inStock: true, url: 'https://croma.com/product/headphone-sony-1' },
      { retailer: 'reliance', price: 28990, inStock: false, url: 'https://reliancedigital.in/product/headphone-sony-1' }
    ]
  },
  {
    id: 'headphone-jbl-1',
    name: 'JBL Tune 760NC',
    brand: 'JBL',
    category: 'headphone',
    description: 'Active noise cancelling headphones with JBL Pure Bass sound',
    image: 'https://images.unsplash.com/photo-1567583377449-9ba55e56f9f5?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 7999, inStock: true, url: 'https://amazon.in/product/headphone-jbl-1' },
      { retailer: 'flipkart', price: 7499, inStock: true, url: 'https://flipkart.com/product/headphone-jbl-1' },
      { retailer: 'croma', price: 8099, inStock: true, url: 'https://croma.com/product/headphone-jbl-1' },
      { retailer: 'reliance', price: 7599, inStock: false, url: 'https://reliancedigital.in/product/headphone-jbl-1' }
    ]
  },
  // Watches
  {
    id: 'watch-samsung-1',
    name: 'Samsung Galaxy Watch 6',
    brand: 'Samsung',
    category: 'watch',
    description: 'Advanced health monitoring and fitness tracking',
    image: 'https://images.unsplash.com/photo-1677495948544-44b99797374a?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 32990, inStock: true, url: 'https://amazon.in/product/watch-samsung-1' },
      { retailer: 'flipkart', price: 30990, inStock: true, url: 'https://flipkart.com/product/watch-samsung-1' },
      { retailer: 'croma', price: 33990, inStock: true, url: 'https://croma.com/product/watch-samsung-1' },
      { retailer: 'reliance', price: 31990, inStock: false, url: 'https://reliancedigital.in/product/watch-samsung-1' }
    ]
  },
  {
    id: 'watch-apple-1',
    name: 'Apple Watch Series 9',
    brand: 'Apple',
    category: 'watch',
    description: 'The latest Apple Watch with advanced features and health tracking',
    image: 'https://images.unsplash.com/photo-1695653700847-990709253162?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 41900, inStock: true, url: 'https://amazon.in/product/watch-apple-1' },
      { retailer: 'flipkart', price: 39900, inStock: true, url: 'https://flipkart.com/product/watch-apple-1' },
      { retailer: 'croma', price: 42900, inStock: true, url: 'https://croma.com/product/watch-apple-1' },
      { retailer: 'reliance', price: 40900, inStock: false, url: 'https://reliancedigital.in/product/watch-apple-1' }
    ]
  },
  {
    id: 'watch-boat-1',
    name: 'boAt Wave Connect',
    brand: 'boAt',
    category: 'watch',
    description: 'Smartwatch with Bluetooth calling and multiple sports modes',
    image: 'https://images.unsplash.com/photo-1630465643778-29614a90c96f?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 2499, inStock: true, url: 'https://amazon.in/product/watch-boat-1' },
      { retailer: 'flipkart', price: 2299, inStock: true, url: 'https://flipkart.com/product/watch-boat-1' },
      { retailer: 'croma', price: 2599, inStock: true, url: 'https://croma.com/product/watch-boat-1' },
      { retailer: 'reliance', price: 2399, inStock: false, url: 'https://reliancedigital.in/product/watch-boat-1' }
    ]
  },
  // Cameras
  {
    id: 'camera-nikon-1',
    name: 'Nikon D850',
    brand: 'Nikon',
    category: 'camera',
    description: 'High-resolution full-frame DSLR for professional photography',
    image: 'https://images.unsplash.com/photo-1519183071299-858245491a63?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 214990, inStock: true, url: 'https://amazon.in/product/camera-nikon-1' },
      { retailer: 'flipkart', price: 212990, inStock: true, url: 'https://flipkart.com/product/camera-nikon-1' },
      { retailer: 'croma', price: 215990, inStock: true, url: 'https://croma.com/product/camera-nikon-1' },
      { retailer: 'reliance', price: 213990, inStock: false, url: 'https://reliancedigital.in/product/camera-nikon-1' }
    ]
  },
  {
    id: 'camera-canon-1',
    name: 'Canon EOS R6 Mark II',
    brand: 'Canon',
    category: 'camera',
    description: 'Full-frame mirrorless camera with high-speed shooting and 4K video',
    image: 'https://images.unsplash.com/photo-1611183479949-37c634991433?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 255999, inStock: true, url: 'https://amazon.in/product/camera-canon-1' },
      { retailer: 'flipkart', price: 253999, inStock: true, url: 'https://flipkart.com/product/camera-canon-1' },
      { retailer: 'croma', price: 256999, inStock: true, url: 'https://croma.com/product/camera-canon-1' },
       { retailer: 'reliance', price: 254999, inStock: false, url: 'https://reliancedigital.in/product/camera-canon-1' }
    ]
  },
   {
    id: 'camera-sony-1',
    name: 'Sony Alpha 7 IV',
    brand: 'Sony',
    category: 'camera',
    description: 'Full-frame mirrorless camera with advanced autofocus and 4K 60p video',
    image: 'https://images.unsplash.com/photo-1631498403168-8889814a9e41?w=300&h=200',
    prices: [
      { "retailer": "amazon", "price": 229990, "inStock": true, "url": "https://amazon.in/product/camera-sony-1" },
      { "retailer": "flipkart", "price": 227990, "inStock": true, "url": "https://flipkart.com/product/camera-sony-1" },
      { "retailer": "croma", "price": 230990, "inStock": true, "url": "https://croma.com/product/camera-sony-1" },
      { "retailer": "reliance", "price": 228990, "inStock": false, "url": "https://reliancedigital.in/product/camera-sony-1" }
    ]
  },
  // Laptops
  {
    id: 'laptop-lenovo-1',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    brand: 'Lenovo',
    category: 'laptop',
    description: 'Premium business laptop with Intel Core i7 and lightweight design',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 179990, inStock: true, url: 'https://amazon.in/product/laptop-lenovo-1' },
      { retailer: 'flipkart', price: 177990, inStock: true, url: 'https://flipkart.com/product/laptop-lenovo-1' },
      { retailer: 'croma', price: 180990, inStock: true, url: 'https://croma.com/product/laptop-lenovo-1' },
      { retailer: 'reliance', price: 178990, inStock: false, url: 'https://reliancedigital.in/product/laptop-lenovo-1' }
    ]
  },
  {
    id: 'laptop-hp-1',
    name: 'HP Spectre x360 14',
    brand: 'HP',
    category: 'laptop',
    description: 'Convertible laptop with OLED display and Intel Evo platform',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 169990, inStock: true, url: 'https://amazon.in/product/laptop-hp-1' },
      { retailer: 'flipkart', price: 167990, inStock: true, url: 'https://flipkart.com/product/laptop-hp-1' },
      { retailer: 'croma', price: 170990, inStock: true, url: 'https://croma.com/product/laptop-hp-1' },
      { retailer: 'reliance', price: 168990, inStock: false, url: 'https://reliancedigital.in/product/laptop-hp-1' }
    ]
  },
  {
    id: 'laptop-dell-1',
    name: 'Dell XPS 13 Plus',
    brand: 'Dell',
    category: 'laptop',
    description: 'Ultra-thin laptop with Intel Core i7 and InfinityEdge display',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e60?w=300&h=200',
    prices: [
      { retailer: 'amazon', price: 159990, inStock: true, url: 'https://amazon.in/product/laptop-dell-1' },
      { retailer: 'flipkart', price: 157990, inStock: true, url: 'https://flipkart.com/product/laptop-dell-1' },
      { retailer: 'croma', price: 160990, inStock: true, url: 'https://croma.com/product/laptop-dell-1' },
      { retailer: 'reliance', price: 158990, inStock: false, url: 'https://reliancedigital.in/product/laptop-dell-1' }
    ]
  }
];

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getBestPrice = (productId) => {
  const product = products.find(p => p.id === productId);
  if (!product) return null;
  
  const inStockPrices = product.prices.filter(p => p.inStock);
  if (inStockPrices.length === 0) return null;
  
  return inStockPrices.reduce((lowest, current) => 
    current.price < lowest.price ? current : lowest, inStockPrices[0]);
};
