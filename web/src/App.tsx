import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import { NotFound } from './404';  // TODO: async import
import './App.css';
import { Home } from './Home';
import { ProductPageContainer } from './ProductPageContainer';
import { ProductsPageContainer } from './ProductsPageContainer';

export class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li><li>
              <Link to="/0_o">Non existent page</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductPageContainer} />
            <Route path="/products" component={ProductsPageContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
