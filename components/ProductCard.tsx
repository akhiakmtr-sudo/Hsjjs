import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="text-center p-2 border border-gray-200 rounded-md hover:shadow-lg transition-shadow bg-white flex flex-col items-center h-full">
      <div className="w-full aspect-square flex items-center justify-center mb-2 overflow-hidden rounded-md">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover"/>
      </div>
      <div className="w-full flex flex-col flex-1 justify-center px-1">
        <h3 className="font-semibold text-sm text-gray-800 truncate w-full">{product.name}</h3>
        <p className="text-green-600 text-sm font-medium">{product.description}</p>
        {product.price && <p className="text-gray-500 text-xs mt-1">{product.price}</p>}
      </div>
    </div>
  );
};

export default ProductCard;