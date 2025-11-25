import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import AdBanner from './components/AdBanner';
import CategoryNav from './components/CategoryNav';
import {
  smartphones,
  appliances,
  shopFavorites,
  electronicsDeals,
  fashionDeals,
  adBanners,
  adBanners2,
  usedProducts,
  homeEssentials,
  trendingFashion
} from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto px-2 sm:px-4 pb-8">
        <CategoryNav />

        {/* Section 1: Main Banner */}
        <div className="my-4">
          <img src="https://picsum.photos/1280/280?random=1" alt="Main Banner" className="w-full h-auto object-cover rounded-md"/>
        </div>
        
        {/* Section 2: Trending Now */}
        <ProductSection title="Trending Now" products={trendingFashion} />

        {/* Section 3: Used Products */}
        <ProductSection title="Shop Pre-Owned Deals" products={usedProducts} />

        {/* Section 4: Smartphones */}
        <ProductSection title="Best deals on smartphones" products={smartphones} />

        {/* Section 5: Appliances */}
        <ProductSection title="Best deals on appliances" products={appliances} />

        {/* Section 6: Ad Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {adBanners.map((banner, index) => (
                <AdBanner key={index} {...banner} />
            ))}
        </div>

        {/* Section 7: Shop Your Favorites */}
        <ProductSection title="Shop Your Favorites" products={shopFavorites} />
        
        {/* Section 8: Electronics */}
        <ProductSection title="Price drop on electronics" products={electronicsDeals} />

        {/* Section 9: Ad Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {adBanners2.map((banner, index) => (
                <AdBanner key={index} {...banner} />
            ))}
        </div>
        
        {/* Section 10: Fashion */}
        <ProductSection title="Fashion's Top Deals" products={fashionDeals} />

        {/* Section 11: Home Essentials */}
        <ProductSection title="Home Essentials" products={homeEssentials} />

      </main>
      <Footer />
    </div>
  );
};

export default App;