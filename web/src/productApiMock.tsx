import { IProduct } from './productApi';
import { delay } from './util';

export { IProduct } from './productApi';

const product1: IProduct = {
  "category": "category",
  "code": "123456",
  "name": "Product",
  "price": 100,
  "product_id": "1"
};

const product2: IProduct = {
  "category": "category",
  "code": "123456",
  "name": "Product",
  "price": 100,
  "product_id": "2"
};

export function getAll () {
  const result: IProduct[] = [
    { ...product1 },
    { ...product2 }
  ];
  return delay(900).then(() => result);
}

export function getById (id: string) {
  if (id === product1.product_id) {
    const result: IProduct = { ...product1 };
    return delay(200).then(() => result);
  }

  if (id === product2.product_id) {
    const result: IProduct = { ...product2 };
    return delay(700).then(() => result);
  }

  const result = { code: 404, message: 'not found' };
  return delay(900).then(() => Promise.reject(result));
}
