// Add your TypeScript types here when needed

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Order {
  orderNumber: string;
  total: number;
  status: string;
}