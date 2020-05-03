import { ADD_PRODUCT, DECREMENT_PRODUCT, REMOVE_PRODUCT } from './actionTypes';

export const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const decrementProduct = product => {
    return {
        type: DECREMENT_PRODUCT,
        payload: product
    }
}

export const removeProduct = index => {
    return {
        type: REMOVE_PRODUCT,
        payload: index
    }
}