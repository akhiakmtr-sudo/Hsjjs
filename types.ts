// FIX: Import React to use React.ReactNode type.
import React from 'react';

export interface Category {
  name: string;
  icon: React.ReactNode;
}

export interface Product {
  name: string;
  description: string;
  price?: string;
  imageUrl: string;
}

export interface AdBannerType {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor: string;
}
