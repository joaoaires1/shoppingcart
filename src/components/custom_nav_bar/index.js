import React from 'react';
import { useSelector } from 'react-redux';
import {
    NavContainer,
    CartContainer,
    CountProducts
} from './styles';

import { FiShoppingCart, FiArrowLeft, FiHome } from "react-icons/fi";

const CustomNavBar = ({ history, isHome }) => {
    const state = useSelector(state => state);
    const { cart } = state;

    return (
        <div style={{
            borderBottom: '1px solid #eee'
          }}>

            <NavContainer>

                {
                    !isHome
                    ?
                    <div onClick={ () => history.push('/') } style={{ cursor: 'pointer' }}>
                        <FiArrowLeft size={30} />
                    </div> 
                    :
                    <div>
                        <FiHome size={30} />
                    </div>
                }
                

                <CartContainer onClick={ () => history.push('/cart') } >

                    <CountProducts>
                        { cart.length }
                    </CountProducts>

                    <FiShoppingCart size={30} />
                </CartContainer>
                
            </NavContainer>

        </div>
    );
}

export default CustomNavBar;