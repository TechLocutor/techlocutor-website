export type Page =
  | 'home'
  | 'reviews'
  | 'news'
  | 'comparisons'
  | 'buying-guides'
  | 'how-to'
  | 'deals'
  | 'videos'
  | 'about'
  | 'contact';

export type Category =
  | 'Mobiles'
  | 'Laptops'
  | 'Tablets'
  | 'Audio'
  | 'Wearables'
  | 'Smart Home'
  | 'PC Components'
  | 'Cameras'
  | 'Software';

export type NewsCategory =
  | 'Launches'
  | 'Leaks'
  | 'Industry'
  | 'AI'
  | 'Policy'
  | 'Events';

export interface Review {
  id: string;
  title: string;
  category: Category;
  image: string;
  rating: number;
  price: string;
  priceValue: number;
  brand: string;
  excerpt: string;
  date: string;
  readTime: string;
  pros: string[];
  cons: string[];
  verdict: string;
  badge?: 'Editor\'s Choice' | 'Best Value' | 'Top Pick';
}

export interface NewsArticle {
  id: string;
  title: string;
  category: NewsCategory;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  breaking?: boolean;
  featured?: boolean;
}

export interface ComparisonProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  category: Category;
  specs: Record<string, string>;
  rating: number;
}

export interface BuyingGuide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: Category;
  budget: string;
  updatedDate: string;
  itemCount: number;
}

export interface HowToArticle {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Deal {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  store: 'Amazon' | 'Flipkart';
  category: Category;
  expiresAt?: string;
  badge?: 'Hot Deal' | 'Lightning Deal' | 'Limited Time';
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  views: string;
  date: string;
  category: 'Reviews' | 'Unboxings' | 'Comparisons' | 'News' | 'How-To' | 'Deep Dive';
}
