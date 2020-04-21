import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../store/actions/actionTypes';

// import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div>
        <h1>Home</h1>
        <Link to="/cart">Cart</Link>
    </div>
  );
}
