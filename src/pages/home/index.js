import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/cart">Cart</Link>
    </div>
  );
}
