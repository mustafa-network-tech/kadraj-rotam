export interface PhotographyScores {
  landscape: number;
  sunrise: number;
  sunset: number;
  drone: number;
  wildlife: number;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface PhotoSpot {
  name: string;
  description: string;
  bestTime: string;
  recommendedLens: string;
  coordinates: Coordinates;
}

export interface Route {
  title: string;
  slug: string;
  location: string;
  country: string;
  region: string;
  season: string;
  difficulty: 'easy' | 'moderate' | 'challenging' | 'expert';
  duration: string;
  category: 'landscape' | 'wildlife' | 'urban' | 'coastal' | 'mountain' | 'desert' | 'forest';
  status: 'free' | 'premium';
  description: string;
  shortDescription: string;
  image: string;
  heroImage: string;
  photographyScores: PhotographyScores;
  spots: PhotoSpot[];
  gallery: string[];
  fieldNotes: string;
  premiumFeatures: string[];
  coordinates: Coordinates;
  relatedRoutes: string[];
  type: 'local' | 'global';
}

export interface Destination {
  title: string;
  slug: string;
  country: string;
  region: string;
  description: string;
  image: string;
  heroImage: string;
  routeCount: number;
  featuredRoutes: string[];
  continent: string;
}

export interface JournalEntry {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: number;
  date: string;
  coverImage: string;
  location: string;
  author: string;
  tags: string[];
}

export type Locale = 'tr' | 'en' | 'de' | 'fr';
