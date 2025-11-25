import React from 'react';
import { SearchIcon, CartIcon, MenuIcon, GiftIcon, ThreeDotsIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Mobile & Tablet View */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <button aria-label="Open menu" className="p-2 -ml-2 text-gray-700">
                <MenuIcon />
              </button>
              <span className="text-xl font-bold text-blue-600 italic">ShopNcarT</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" aria-label="Gifts" className="p-2 text-gray-700">
                <GiftIcon />
              </a>
              <a href="#" aria-label="Cart" className="p-2 text-gray-700">
                <CartIcon />
              </a>
            </div>
          </div>
          <div className="pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input 
                type="text" 
                placeholder="Search for Products, Brands and More" 
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-600 italic">ShopNcarT</span>
              <a href="#" className="text-xs text-gray-500 italic flex items-center hover:text-yellow-600">
                Explore <span className="text-yellow-500 font-bold ml-1">Plus</span>
                <img src="https://img.icons8.com/plasticine/100/plus-math.png" alt="plus" className="w-4 h-4"/>
              </a>
            </div>
          </div>

          {/* Center: Search */}
          <div className="flex-1 px-12">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input 
                type="text" 
                placeholder="Search for Products, Brands and More" 
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Right: Actions */}
          <div className="flex items-center space-x-8 text-gray-700">
            <button className="font-semibold text-blue-600 bg-gray-50 px-10 py-2 rounded-md text-sm border border-gray-300 hover:shadow-md transition-all">
              Login
            </button>
            <a href="#" aria-label="Cart" className="hover:text-blue-600">
              <CartIcon />
            </a>
            <a href="#" aria-label="Gifts" className="hover:text-blue-600">
              <GiftIcon />
            </a>
            <button aria-label="More options" className="hover:text-blue-600">
              <ThreeDotsIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;