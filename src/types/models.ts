export interface Movie {
  id: number;
  title: string;
  img?: string;
  rating?: number;
  meta?: string;
  desc?: string;
  featured?: boolean;
}

export interface Actor {
  id: number;
  name: string;
  img?: string;
  bio?: string;
}

export interface Review {
  id: number;
  movieId: number;
  author: string;
  text: string;
  rating?: number;
}

export interface TVShow {
  id: number;
  title: string;
  img?: string;
  rating?: number;
  meta?: string;
  desc?: string;
}
