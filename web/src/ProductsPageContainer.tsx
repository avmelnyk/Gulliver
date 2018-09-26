import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { IProduct } from './productApi';
import { fetchAll, selectProducts } from './products';
import { ProductsPage } from './ProductsPage';

interface IContainerProps {
  fetchAll: typeof fetchAll;
  products: {
    status: 'loading' | 'loaded' | 'error' | null;
    error: Error;
    items: IProduct[];
  };
}

type ProductsPageFetcherProps = IContainerProps & RouteComponentProps;

class ProductsPageFetcher extends Component<ProductsPageFetcherProps> {
  componentDidMount () {
    this.props.fetchAll();
  }

  render () {
    if (this.props.products.status === 'loaded') {
      return <ProductsPage products={this.props.products.items} />;
    }
    if (this.props.products.status === 'error') {
      return <h3> Error: {this.props.products.error.message} </h3>;
    }
    return <div> ... loading product list ... </div>;
  }
}

export const ProductsPageContainer = connect(
  state => ({ products: selectProducts(state) }),
  dispatch => bindActionCreators({ fetchAll }, dispatch)
)(ProductsPageFetcher);
