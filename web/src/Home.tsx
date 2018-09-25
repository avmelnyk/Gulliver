import * as React from 'react';
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/products/1">Product 1</Link>
      </li><li>
        <Link to="/products/2">Product 2</Link>
      </li><li>
        <Link to="/products/1337">Link to a non existent product</Link>
      </li>
    </ul>
  </div>
);
