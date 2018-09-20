import * as React from 'react';
import './App.css';

import { get } from './ajax';

interface IProduct {
  product_id: number;
  category: string;
  code: string;
  name: string;
  price: number;
}

interface IAppState {
  isLoading: boolean | null;
  product: IProduct | null;
}

export class App extends React.Component {
  state: IAppState = {
    isLoading: null,
    product: null,
  }

  componentDidMount () {
    this.setState({
      isLoading: true
    }, async () => {
      this.setState({
        isLoading: false,
        product: await this._fetchProduct()
      });
    });
  }

  render () {
    const { isLoading, product } = this.state;

    if (isLoading) {
      return (
        <div className="app">
          ... loading ...
        </div>
      );
    }

    if (product) {
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
    } else {
      return (
        <div className="app">
          <header className="product__header">
            <h1 className="product__title">404 &mdash; No Product Found</h1>
          </header>
        </div>
      );
    }
  }

  private _fetchProduct(): Promise<IProduct> {
    return get('/api');
  }
}
