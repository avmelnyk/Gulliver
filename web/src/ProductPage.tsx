import * as React from 'react';

import { IProduct } from './productApi';

interface IProductPageProps {
  product: IProduct;
}

export const ProductPage: React.SFC<IProductPageProps> = ({ product }) => {
  return (
    <div className="app">
      <header className="product__header">
        <h6>{product.category}</h6>
        <h1 className="product__title">{product.name}</h1>
        <small>код: {product.code}</small>
        <p>{product.price / 100} грн</p>
      </header>
      <p className="product__description">
        hello, the description is going to be here
      </p>
    </div>
  );
};
