import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import { NotFound } from './404';
import './App.css';
import { Home } from './Home';
import { ProductPageContainer } from './ProductPageContainer';

export class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li><li>
              <Link to="/n0t-f0und">Non-existent page</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={ProductPageContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
