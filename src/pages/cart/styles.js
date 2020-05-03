import styled from 'styled-components';

export const MainContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-top: 15px;
`;

export const Title = styled.h1`
    margin: 10px 0;
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CartListProduct = styled.div`
    width: 68%;
    padding: 10px;
`;

export const CartDetails = styled.div`
    width: 25%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0px 0px 7px 0px rgba(50, 50, 50, 0.40);
`;

export const RowProducts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Increment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;