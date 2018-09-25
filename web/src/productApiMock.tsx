import { IProduct } from './productApi';
import { delay } from './util';

export { IProduct } from './productApi';

const product1 = {
  "category": "category",
  "code": "123456",
  "name": "Product",
  "price": 100,
  "product_id": "1"
};

const product2 = {
  "category": "category",
  "code": "123456",
  "name": "Product",
  "price": 100,
  "product_id": "2"
};

export function getAll (): Promise<IProduct[]> {
  return delay(700).then(
    () => [
      { ...product1 },
      { ...product2 }
    ]
  );
}

export function getById (id: string): Promise<IProduct> {
  if (id === product1.product_id) {
    return delay(900).then(
      () => ({ ...product1 })
    );
  }

  if (id === product2.product_id) {
    return delay(200).then(
      () => ({ ...product2 })
    );
  }

  return Promise.reject({ code: 404, message: 'not found' });
}
