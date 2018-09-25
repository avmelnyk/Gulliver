import * as React from 'react';
import './App.css';

import * as product from './productApiMock';
import { IProduct } from './productApiMock';

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
      try {
        this.setState({
          isLoading: false,
          product: await product.getById('1')
        });
      } catch (e) {
        this.setState({
          isLoading: false,
          product: null
        });
      }
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
}
