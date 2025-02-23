export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  images: string[]; 
  currentImageIndex: number; 
  url: string;
  likes: number; 
}
