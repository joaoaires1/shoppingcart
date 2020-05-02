import React from 'react';
import { useSelector } from 'react-redux';
import CustomNavBar from '../../components/custom_nav_bar';

export default function Cart({ history }) {
  const state = useSelector(state => state);

  return (
    <div>
        <CustomNavBar history={history} isHome={false} />
    </div>
  );
}
