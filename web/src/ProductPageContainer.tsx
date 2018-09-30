import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { fetchById, selectProduct } from './product';
import { IProduct } from './productApi';
import { ProductPage } from './ProductPage';

interface IContainerProps {
  fetchById: typeof fetchById;
  product: IProduct & {
    status: 'loading' | 'loaded' | 'error' | null;
    error: Error;
  };
}

interface IRouteParams {
  id: string;
}

type ProductPageFetcherProps = IContainerProps & RouteComponentProps<IRouteParams>;

class ProductPageFetcher extends Component<ProductPageFetcherProps> {
  componentDidMount () {
    const { id } = this.props.match.params;
    this.props.fetchById(id);
  }

  componentDidUpdate (prevProps: ProductPageFetcherProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      this.props.fetchById(id);
    }
  }

  render () {
    if (this.props.product.status === 'loaded') {
      return <ProductPage product={this.props.product} />;
    }
    if (this.props.product.status === 'error') {
      return <h3> Error: {this.props.product.error.message} </h3>;
    }
    return <div> ... product is loading ... </div>;
  }
}

export const ProductPageContainer = connect(
  state => ({ product: selectProduct(state) }),
  dispatch => bindActionCreators({ fetchById }, dispatch)
)(ProductPageFetcher);
