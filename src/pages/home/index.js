import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../store/actions/actionTypes';
import CustomNavBar from '../../components/custom_nav_bar';
import images from '../../utils/images';

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

const products = [
  {
    id: 1,
    img: images.img1,
    name: 'Camiseta cinza',
    price: 50.00,
    price_formatted: 'R$ 50,00',
  },
  {
    id: 2,
    img: images.img2,
    name: 'Camiseta verde',
    price: 99.00,
    price_formatted: 'R$ 99,00',
  },
  {
    id: 3,
    img: images.img3,
    name: 'Moletom Azul',
    price: 140.00,
    price_formatted: 'R$ 140,00',
  }
];

export default function Home({history}) {
  const dispatch = useDispatch();

  const RenderProducts = () => {

    const listProducts = products.map((item, index) => 
      <DivProduct key={index}>
        <ImageProd src={ item.img } alt=''/>
      
        <PriceContent>
          <AddProduct onClick={() => dispatch({
            type: ADD_PRODUCT,
            payload: item
          })} 
          >
            Adicionar
          </AddProduct>
          <PriceText>
            { item.price_formatted }
          </PriceText>
        </PriceContent>
      </DivProduct>
    );

    return (
      <ProductContainer>
        { listProducts }
      </ProductContainer>
    );
  }

  return (
    <div>

        <CustomNavBar history={history} isHome={true} />

        <MainContainer>
          <Title>Produtos</Title>
          <RenderProducts />
        </MainContainer>
        
    </div>
  );
}
