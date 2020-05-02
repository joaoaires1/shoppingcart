import React from 'react';
import {
    NavContainer,
    CartContainer,
    CountProducts
} from './styles';

import { FiShoppingCart, FiArrowLeft, FiHome } from "react-icons/fi";

const CustomNavBar = ({ history, isHome }) => {
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
                        0
                    </CountProducts>

                    <FiShoppingCart size={30} />
                </CartContainer>
                
            </NavContainer>

        </div>
    );
}

export default CustomNavBar;