import { get } from './ajax';

export interface IProduct {
  product_id: string;  // FIXME: currently a Number on the backend
  category: string;
  code: string;
  name: string;
  price: number;
}

export function getAll (): Promise<IProduct[]> {
  return get('/api/products');
}

export function getById (id: string): Promise<IProduct> {
  return get('/api/products/' + id);
}
