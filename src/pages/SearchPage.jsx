import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories, retailers } from '../data/data';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [retailerFilters, setRetailerFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [availableOnly, setAvailableOnly] = useState(false);
  
  // Price range for the filter
  const minPrice = 0;
  const maxPrice = 500000;
  
  // Get unique brands from all products
  const allBrands = [...new Set(products.map(product => product.brand))].sort();
  
  useEffect(() => {
    // Filter products based on search query and filters
    let results = products;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply category filters
    if (categoryFilters.length > 0) {
      results = results.filter(product => categoryFilters.includes(product.category));
    }
    
    // Apply brand filters
    if (brandFilters.length > 0) {
      results = results.filter(product => brandFilters.includes(product.brand));
    }
    
    // Apply retailer filters
    if (retailerFilters.length > 0) {
      results = results.filter(product => 
        product.prices.some(price => retailerFilters.includes(price.retailer))
      );
    }
    
    // Apply price range filter
    if (priceRange[0] !== minPrice || priceRange[1] !== maxPrice) {
      results = results.filter(product => {
        const lowestPrice = Math.min(...product.prices.map(p => p.price));
        return lowestPrice >= priceRange[0] && lowestPrice <= priceRange[1];
      });
    }
    
    // Apply availability filter
    if (availableOnly) {
      results = results.filter(product => 
        product.prices.some(price => price.inStock)
      );
    }
    
    setFilteredProducts(results);
  }, [searchQuery, categoryFilters, brandFilters, retailerFilters, priceRange, availableOnly]);
  
  const handleCategoryFilter = (category) => {
    setCategoryFilters(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const handleBrandFilter = (brand) => {
    setBrandFilters(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const handleRetailerFilter = (retailer) => {
    setRetailerFilters(prev => 
      prev.includes(retailer) 
        ? prev.filter(r => r !== retailer)
        : [...prev, retailer]
    );
  };
  
  const handlePriceRangeChange = (value) => {
    setPriceRange([value[0], value[1]]);
  };
  
  const clearAllFilters = () => {
    setCategoryFilters([]);
    setBrandFilters([]);
    setRetailerFilters([]);
    setPriceRange([minPrice, maxPrice]);
    setAvailableOnly(false);
  };
  
  const activeFilterCount = 
    categoryFilters.length + 
    brandFilters.length + 
    retailerFilters.length + 
    (availableOnly ? 1 : 0) +
    (priceRange[0] !== minPrice || priceRange[1] !== maxPrice ? 1 : 0);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Search Results for "{searchQuery}"
            </h1>
            <p className="text-gray-600">
              Found {filteredProducts.length} products matching your search
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  {activeFilterCount > 0 && (
                    <Button 
                      variant="ghost" 
                      className="text-sm text-brand-blue h-auto p-0"
                      onClick={clearAllFilters}
                    >
                      Clear All
                    </Button>
                  )}
                </div>
                
                {activeFilterCount > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {categoryFilters.map(category => (
                      <Badge 
                        key={category} 
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {category}
                        <button 
                          className="ml-1 text-xs"
                          onClick={() => handleCategoryFilter(category)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    
                    {brandFilters.map(brand => (
                      <Badge 
                        key={brand} 
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {brand}
                        <button 
                          className="ml-1 text-xs"
                          onClick={() => handleBrandFilter(brand)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    
                    {retailerFilters.map(retailer => (
                      <Badge 
                        key={retailer} 
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {retailer}
                        <button 
                          className="ml-1 text-xs"
                          onClick={() => handleRetailerFilter(retailer)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    
                    {availableOnly && (
                      <Badge 
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        In Stock
                        <button 
                          className="ml-1 text-xs"
                          onClick={() => setAvailableOnly(false)}
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    
                    {(priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
                      <Badge 
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                        <button 
                          className="ml-1 text-xs"
                          onClick={() => setPriceRange([minPrice, maxPrice])}
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox 
                          id={`category-${category.id}`}
                          checked={categoryFilters.includes(category.id)}
                          onCheckedChange={() => handleCategoryFilter(category.id)}
                        />
                        <label 
                          htmlFor={`category-${category.id}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Brands</h3>
                  <div className="space-y-2">
                    {allBrands.map((brand) => (
                      <div key={brand} className="flex items-center">
                        <Checkbox 
                          id={`brand-${brand}`}
                          checked={brandFilters.includes(brand)}
                          onCheckedChange={() => handleBrandFilter(brand)}
                        />
                        <label 
                          htmlFor={`brand-${brand}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Retailers</h3>
                  <div className="space-y-2">
                    {retailers.map((retailer) => (
                      <div key={retailer.id} className="flex items-center">
                        <Checkbox 
                          id={`retailer-${retailer.id}`}
                          checked={retailerFilters.includes(retailer.id)}
                          onCheckedChange={() => handleRetailerFilter(retailer.id)}
                        />
                        <label 
                          htmlFor={`retailer-${retailer.id}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {retailer.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      min={minPrice}
                      max={maxPrice}
                      step={1000}
                      value={[priceRange[0], priceRange[1]]}
                      onValueChange={handlePriceRangeChange}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Availability</h3>
                  <div className="flex items-center">
                    <Checkbox 
                      id="availability"
                      checked={availableOnly}
                      onCheckedChange={(checked) => setAvailableOnly(!!checked)}
                    />
                    <label 
                      htmlFor="availability"
                      className="ml-2 text-sm cursor-pointer"
                    >
                      In Stock Only
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="lg:w-3/4">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h2 className="text-2xl font-bold mb-2">No products found</h2>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any products matching your search criteria. Try adjusting your filters or search query.
                  </p>
                  <Link to="/">
                    <Button className="bg-brand-orange hover:bg-orange-600 text-white">
                      Browse Categories
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
