import { get } from './ajax';

export interface IProduct {
  product_id: string;
  category: string;
  code: string;
  name: string;
  price: number;
}

export function getAll () {
  return get<IProduct[]>('/api/products');
}

export function getById (id: string) {
  return get<IProduct>('/api/products/' + id);
}
