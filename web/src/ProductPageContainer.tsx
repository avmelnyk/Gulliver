import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { getById, IProduct } from './productApiMock';
import { ProductPage } from './ProductPage';

interface IProps {
  id: string;
}

interface IStateInitial {
  status: null;
}

interface IStateLoading {
  status: 'loading';
  product: null;
}

interface IStateLoaded {
  status: 'loaded';
  product: IProduct;
}

interface IStateError {
  status: 'error';
  error: any;
}

type IState = IStateInitial | IStateLoading | IStateLoaded | IStateError;

export class ProductPageContainer extends React.Component<RouteComponentProps<IProps>, IState> {
  state: IState = { status: null };

  componentDidMount () {
    const { id } = this.props.match.params;

    this.setState({
      status: 'loading'
    }, async () => {
      try {
        this.setState({
          status: 'loaded',
          product: await getById(id)
        });
      } catch (error) {
        this.setState({
          status: 'error',
          error
        });
      }
    });
  }

  render () {
    if (this.state.status === 'loaded') {
      return <ProductPage product={this.state.product} />;
    }
    if (this.state.status === 'error') {
      return <h3> 404 Product Not Found </h3>;
    }
    return <div> ... product is loading ... </div>;
  }
};
