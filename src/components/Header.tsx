
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-brand-blue text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center text-2xl font-bold">
            <span className="bg-brand-orange text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
              PG
            </span>
            Price Guru
          </Link>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-xl w-full">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for electronics (e.g., iPhone 15, Samsung TV)..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md text-black pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="absolute inset-y-0 right-0 bg-brand-orange hover:bg-orange-600 text-white rounded-r-md"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
