import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div>
    <h2>Welcome to the Web Shop.</h2>
    <p>
      <Link to="/products/0_o">Link to a non existent product #1</Link>
    </p>
    <p>
      <Link to="/products/1337">Link to a non existent product #2</Link>
    </p>
  </div>
);
