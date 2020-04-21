import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function Cart() {
  const state = useSelector(state => state);

  return (
    <div>
        <h1>Cart</h1>
    </div>
  );
}
