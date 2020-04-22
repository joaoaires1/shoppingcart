import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../store/actions/actionTypes';
import { FiHome, FiShoppingCart } from "react-icons/fi";

// import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div>

        <div style={{
          width: '100%',
          borderBottom: '1px solid #eee'
        }}>

          <div style={{
            height: 50,
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
            <div style={{ borderWidth: 1, borderColor: 'red' }}>
              <FiHome size={30} />
            </div>

            <div>
              <FiShoppingCart size={30} />
            </div>
          </div>

        </div>
        
    </div>
  );
}
