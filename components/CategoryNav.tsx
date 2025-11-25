
import React from 'react';
import { ApplianceIcon, ElectronicsIcon, FashionIcon, HomeIcon, ToysIcon, FurnitureIcon, FlightIcon, GroceryIcon } from './Icons';

const categories = [
    { name: 'TVs & appliances', icon: <ApplianceIcon /> },
    { name: 'Electronics', icon: <ElectronicsIcon /> },
    { name: 'Fashion', icon: <FashionIcon /> },
    { name: 'Home & Kitchen', icon: <HomeIcon /> },
    { name: 'Beauty & toys', icon: <ToysIcon /> },
    { name: 'Furniture', icon: <FurnitureIcon /> },
    { name: 'Flight Bookings', icon: <FlightIcon /> },
    { name: 'Grocery', icon: <GroceryIcon /> },
];

const CategoryNav: React.FC = () => {
  return (
    <div className="bg-white shadow-sm rounded-md mt-4">
      {/* 
        This container is responsive. On smaller screens, it allows horizontal scrolling 
        with a hidden scrollbar for a clean look. On large screens, it distributes items evenly.
      */}
      <div className="max-w-screen-xl mx-auto flex items-stretch p-2 text-center text-sm font-semibold text-gray-800 overflow-x-auto lg:overflow-visible lg:justify-around scrollbar-hide">
        {categories.map((category) => (
          <a 
            key={category.name} 
            href="#" 
            className="flex flex-col items-center justify-start w-24 flex-shrink-0 lg:w-auto hover:text-blue-600 transition-colors py-2"
          >
            <div className="w-16 h-16 flex items-center justify-center">{category.icon}</div>
            <span className="mt-1 whitespace-normal leading-tight">{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;