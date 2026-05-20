// types/user.ts
export interface User {
  id: string;
  email: string;
  role: 'buyer' | 'seller' | 'pending_approval' | 'admin';
  is_approved: boolean;
  store_name?: string;
  // ... altri campi
}

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}
