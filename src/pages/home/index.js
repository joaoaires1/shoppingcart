import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../store/actions/actionTypes';
import { FiHome, FiShoppingCart } from "react-icons/fi";
import CustomNavBar from '../../components/custom_nav_bar';

import { 
  MainContainer, 
  DivProduct, 
  Title, 
  ProductContainer,
  ImageProd,
  PriceContent,
  PriceText,
  AddProduct
} from './styles';

export default function Home({history}) {
  const dispatch = useDispatch();

  return (
    <div>

        <CustomNavBar history={history} isHome={true} />

        <MainContainer>
          <Title>Produtos</Title>

          <ProductContainer>
            <DivProduct>
              <ImageProd src={'https://i0.wp.com/mundoalegre.com.br/wp-content/uploads/2017/02/demo1_product16_208x208-1.jpg'} alt=''/>
            
              <PriceContent>
                <AddProduct>
                  Adicionar
                </AddProduct>
                <PriceText>
                  R$ 50,00
                </PriceText>
              </PriceContent>
            </DivProduct>

            <DivProduct>
              <ImageProd src={'https://cdn11.bigcommerce.com/s-pl27udn9i/images/stencil/500x500/products/2570/4303/9924197-lb-quartz-mustang-fr__88760.1516602155.jpg'} alt=''/>
            
              <PriceContent>
                <AddProduct>
                  Adicionar
                </AddProduct>
                <PriceText>
                  R$ 120,00
                </PriceText>
              </PriceContent>
            </DivProduct>

            <DivProduct>
              <ImageProd src={'https://i0.wp.com/www.mundoalegre.com.br/wp-content/uploads/2017/02/demo1_product19_208x208-1.jpg'} alt=''/>
            
              <PriceContent>
                <AddProduct>
                  Adicionar
                </AddProduct>
                <PriceText>
                  R$ 140,00
                </PriceText>
              </PriceContent>
            </DivProduct>
          </ProductContainer>
        </MainContainer>
        
    </div>
  );
}
