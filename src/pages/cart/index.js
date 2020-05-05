import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomNavBar from '../../components/custom_nav_bar';
import { GrClose } from "react-icons/gr";
import { FiMinus, FiPlus } from "react-icons/fi";
import images from '../../utils/images';
import { ADD_PRODUCT, DECREMENT_PRODUCT, REMOVE_PRODUCT } from '../../store/actions/actionTypes';

import { 
  MainContainer,
  CartContainer,
  CartListProduct,
  CartDetails,
  RowProducts,
  Increment,
  Title,
  EmptyContainer,
  EmptyTitle
} from './styles';

export default function Cart({ history }) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { cart } = state;

  const cartTotal = cart.reduce(function(prev, cur) {
    return prev + (cur.price * cur.count);
  }, 0);

  const cartNumItems = cart.reduce(function(prev, cur) {
      return prev + cur.count;
  }, 0);

  const handleAddProduct = (item) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: item
    });
  }

  const handleDecrementProduct = (item, index) => {
    dispatch({
      type: DECREMENT_PRODUCT,
      payload: {...item, index: index}
    });
  }

  const handleRemoveProduct = (index) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: index
    });
  }

  const MapProducts = () => {

    const listItems = cart.map((item, index) =>

      <RowProducts key={index} >
        <img src={ item.img } style={{ width: '150px' }} alt='Imagem do produto' />

        {item.name}
        
        <Increment>
          <div style={{ cursor: 'pointer' }} onClick={() => handleDecrementProduct(item, index)}>
            <FiMinus size={16} />
          </div>
          

          <p style={{ paddingLeft: '6px', paddingRight: '6px' }}> { item.count } </p>

          <div style={{ cursor: 'pointer' }} onClick={() => handleAddProduct(item)}>
            <FiPlus size={16} />
          </div>
          
        </Increment>

        <p>{ item.price }</p>
        
        <GrClose style={{ cursor: 'pointer' }} size={20} onClick={() => handleRemoveProduct(index)} />
      </RowProducts>
    );

    return (
      <div>
        { listItems }
      </div>
    );
  }

  return (
    <div>
        <CustomNavBar history={history} isHome={false} />

        {
            cartNumItems > 0

          ?

            <MainContainer>
              <Title>Meu Carrinho</Title>

              <CartContainer>

                <CartListProduct>
                  
                  <MapProducts />

                </CartListProduct>

                <CartDetails>
                  <h2>Detalhes</h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p>Total</p>
                    <p>R$ { cartTotal }</p>
                  </div>
                  
                </CartDetails>

              </CartContainer>

            </MainContainer>

          :

            <EmptyContainer>
              <EmptyTitle>Seu carrinho está vazio</EmptyTitle>
              <img src={ images.cart } style={{ width: '256px' }} />
            </EmptyContainer>
        }


    </div>
  );
}
