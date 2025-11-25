import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const initialCount = isMobile ? 4 : 6;
  const displayedProducts = products.slice(0, initialCount);

  return (
    <section className="bg-white my-4 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {products.length > initialCount && (
        <div className="flex justify-end mt-4 pt-4">
            <a href="#" className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-sm shadow-sm transition-colors">
                VIEW ALL
            </a>
        </div>
      )}
    </section>
  );
};

export default ProductSection;