import * as React from 'react';
import { SFC } from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from './productApi';

interface IProductsPageProps {
  products: IProduct[];
}

const noProducts = (
  <h3>no products available</h3>
);

const renderProductItem = (p: IProduct) => {
  return (
    <li key={p.product_id}>
      <Link to={"/products/" + p.product_id}>{p.name}</Link>
    </li>
  );
};

export const ProductsPage: SFC<IProductsPageProps> = ({ products }) => {
  const children = products.length
    ? <ul>{products.map(renderProductItem)}</ul>
    : noProducts;

  return (
    <div>
      {children}
    </div>
  );
};
