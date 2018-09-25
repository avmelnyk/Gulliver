import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

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
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={ProductPageContainer} />
        </div>
      </Router>
    );
  }
}
