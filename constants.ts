
import { Product, AdBannerType } from './types';

export const smartphones: Product[] = [
  { name: 'Google Pixel 9', description: 'Just ₹34,999*', imageUrl: 'https://picsum.photos/200/300?random=10' },
  { name: 'Galaxy S24 5G', description: 'From ₹39,999', imageUrl: 'https://picsum.photos/200/300?random=11' },
  { name: 'Moto S96 5G', description: 'Just ₹14,999*', imageUrl: 'https://picsum.photos/200/300?random=12' },
  { name: 'Nothing CMP Phone', description: 'From ₹14,999*', imageUrl: 'https://picsum.photos/200/300?random=13' },
  { name: 'Vivo Pro Max', description: 'From ₹21,999', imageUrl: 'https://picsum.photos/200/300?random=14' },
];

export const appliances: Product[] = [
  { name: '65 / 75 inch TVs', description: 'From ₹30,849*', imageUrl: 'https://picsum.photos/200/300?random=20' },
  { name: 'Trending deals', description: 'Shop now!', imageUrl: 'https://picsum.photos/200/300?random=21' },
  { name: 'Best-selling Refriger...', description: 'From ₹9,990', imageUrl: 'https://picsum.photos/200/300?random=22' },
  { name: 'Microwave Ovens', description: 'From ₹4,990', imageUrl: 'https://picsum.photos/200/300?random=23' },
  { name: 'Lowe Washing Machine', description: 'From ₹7,990', imageUrl: 'https://picsum.photos/200/300?random=24' },
];

export const shopFavorites: Product[] = [
    { name: 'True Wireless', description: 'Min. 50% Off', imageUrl: 'https://picsum.photos/200/300?random=30' },
    { name: 'Neckband', description: 'Min. 50% Off', imageUrl: 'https://picsum.photos/200/300?random=31' },
    { name: 'Smart Watches', description: 'Min. 40% Off', imageUrl: 'https://picsum.photos/200/300?random=32' },
    { name: 'Trimmers', description: 'Min. 50% Off', imageUrl: 'https://picsum.photos/200/300?random=33' },
];

export const electronicsDeals: Product[] = [
    { name: 'Cooling Pads', description: 'From ₹599', imageUrl: 'https://picsum.photos/200/300?random=40' },
    { name: 'Top Rated Ke...', description: 'From ₹299', imageUrl: 'https://picsum.photos/200/300?random=41' },
    { name: 'Best Selling M...', description: 'From ₹249', imageUrl: 'https://picsum.photos/200/300?random=42' },
    { name: 'Tablet Cases ...', description: 'Flat ₹299', imageUrl: 'https://picsum.photos/200/300?random=43' },
    { name: 'Samsung Wat...', description: 'Just ₹13,999*', imageUrl: 'https://picsum.photos/200/300?random=44' },
    { name: 'Premium ...', description: 'From ₹1,999', imageUrl: 'https://picsum.photos/200/300?random=45' },
];

export const fashionDeals: Product[] = [
    { name: 'Laptop Bags', description: 'Min. 70% Off', imageUrl: 'https://picsum.photos/200/300?random=50' },
    { name: "Men's Casual Shoes", description: 'Min. 70% Off', imageUrl: 'https://picsum.photos/200/300?random=51' },
    { name: "Men's Slippers & Flip F...", description: 'Min. 70% Off', imageUrl: 'https://picsum.photos/200/300?random=52' },
    { name: "Men's Track Pants", description: 'Min. 50% Off', imageUrl: 'https://picsum.photos/200/300?random=53' },
];

export const trendingFashion: Product[] = [
  { name: 'Men\'s Casual Shirt', description: 'Min. 60% Off', imageUrl: 'https://picsum.photos/200/300?random=110' },
  { name: 'Women\'s Denim Jacket', description: 'Starting at ₹999', imageUrl: 'https://picsum.photos/200/300?random=111' },
  { name: 'Stylish Gents T-Shirt', description: 'Under ₹499', imageUrl: 'https://picsum.photos/200/300?random=112' },
  { name: 'Formal Trousers', description: 'Min. 50% Off', imageUrl: 'https://picsum.photos/200/300?random=113' },
  { name: 'Ladies Kurtis', description: 'Bestsellers', imageUrl: 'https://picsum.photos/200/300?random=114' },
];

export const usedProducts: Product[] = [
  { name: 'Refurbished iPhone 13', description: 'Like New Condition', imageUrl: 'https://picsum.photos/200/300?random=90' },
  { name: 'Used Galaxy Tab S8', description: 'Minor Scratches', imageUrl: 'https://picsum.photos/200/300?random=91' },
  { name: 'Second-Hand DSLR Camera', description: 'Great for Beginners', imageUrl: 'https://picsum.photos/200/300?random=92' },
  { name: 'Pre-Owned Gaming Laptop', description: 'Tested & Certified', imageUrl: 'https://picsum.photos/200/300?random=93' },
  { name: 'Used Smartwatch SE', description: '6-Month Warranty', imageUrl: 'https://picsum.photos/200/300?random=94' },
];

export const homeEssentials: Product[] = [
    { name: 'Cotton Bedsheets', description: 'Min. 60% Off', imageUrl: 'https://picsum.photos/200/300?random=100' },
    { name: 'Non-Stick Cookware', description: 'From ₹899', imageUrl: 'https://picsum.photos/200/300?random=101' },
    { name: 'Wall Clocks', description: 'Up to 80% Off', imageUrl: 'https://picsum.photos/200/300?random=102' },
    { name: 'Cushion Covers', description: 'From ₹199', imageUrl: 'https://picsum.photos/200/300?random=103' },
];

export const adBanners: AdBannerType[] = [
    { title: 'Deep frozen sale', subtitle: 'Price drop alert!', description: 'From ₹5,390', image: 'https_picsum.photos_150_100_random_60', bgColor: 'bg-purple-600 text-white' },
    { title: 'Top Rated Picks', subtitle: '', description: 'From ₹9,990', image: 'https_picsum.photos_150_100_random_61', bgColor: 'bg-purple-600 text-white' },
    { title: 'Edge Neo (256GB)', subtitle: 'Just ₹19,999* + 20,000...', description: '', image: 'https_picsum.photos_150_100_random_62', bgColor: 'bg-purple-600 text-white' },
];

export const adBanners2: AdBannerType[] = [
    { title: 'Soundbox', subtitle: 'Zeb, mivi & more', description: 'From ₹2,999', image: 'https_picsum.photos_150_100_random_70', bgColor: 'bg-indigo-600 text-white' },
    { title: 'Biggest Deal of 2025', subtitle: 'Apple Macbook M2', description: 'Just ₹63,990*', image: 'https_picsum.photos_150_100_random_71', bgColor: 'bg-indigo-600 text-white' },
    { title: 'SpoYL - Gen young fashion', subtitle: 'From ₹199 + extra 15% OFF', description: '', image: 'https_picsum.photos_150_100_random_72', bgColor: 'bg-indigo-600 text-white' },
];

export const adBanners3: AdBannerType[] = [
    { title: 'Styling essentials', subtitle: ' Roadster, Metronaut...', description: 'Under ₹499', image: 'https_picsum.photos_150_100_random_80', bgColor: 'bg-gray-700 text-white' },
    { title: 'Painting, tools & more', subtitle: 'Mop sets', description: 'From ₹399', image: 'https_picsum.photos_150_100_random_81', bgColor: 'bg-gray-700 text-white' },
    { title: 'Mixer, induction & more', subtitle: 'Kitchen appliances', description: 'From ₹299', image: 'https_picsum.photos_150_100_random_82', bgColor: 'bg-gray-700 text-white' },
];

export const adBanners4: AdBannerType[] = [
    { title: 'Skin care essentials', subtitle: 'Cetaphil, Lactome...', description: 'Up to 35% Off', image: 'https_picsum.photos_150_100_random_85', bgColor: 'bg-purple-200' },
    { title: 'Dry fruits & nuts', subtitle: 'Happilo & more', description: 'Up to 35% Off', image: 'https_picsum.photos_150_100_random_86', bgColor: 'bg-green-100' },
    { title: 'Bestselling toys & games', subtitle: 'Musical toys, dolls...', description: 'Min. 50% Off', image: 'https_picsum.photos_150_100_random_87', bgColor: 'bg-yellow-100' },
];