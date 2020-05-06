import styled from 'styled-components';

export const NavContainer = styled.div`
    height: 50px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
`;

export const MainContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-top: 15px;
`;

export const ProductContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const DivProduct = styled.div`
    width: 270px;
    height: 320px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0px 0px 7px 0px rgba(50, 50, 50, 0.40);
    margin-top: 10px;
    margin-right: 5px;
    margin-left: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h1`
    margin: 10px 0;
`;

export const ImageProd = styled.img`
    width: 100%;
    height: 250px;
`;

export const PriceContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PriceText = styled.p`
    font-size: 18px;
    font-weight: 500;
`;

export const AddProduct = styled.button`
    background-color: #ffffff;
    padding: 5px 8px;
    border: 1px solid #000;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
`;