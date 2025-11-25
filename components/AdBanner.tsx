
import React from 'react';

interface AdBannerProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  bgColor: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ title, subtitle, description, image, bgColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-md flex items-center justify-between h-full`}>
      <div className="flex-1">
        <h3 className="font-bold text-lg">{title}</h3>
        {subtitle && <p className="text-sm font-medium">{subtitle}</p>}
        <p className="text-sm mt-1">{description}</p>
      </div>
      <img src={image.replace('_', '://')} alt={title} className="w-24 h-24 object-contain" />
    </div>
  );
};

export default AdBanner;
