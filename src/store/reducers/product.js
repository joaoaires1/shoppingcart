import { ADD_PRODUCT, DECREMENT_PRODUCT, REMOVE_PRODUCT } from '../actions/actionTypes';

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const newProduct = action.payload;
            
            if ( state.length === 0 ) {
                newProduct.count = 1;

                return [
                    ...state, newProduct
                ];
            } else {
                var hasItem = false;
                for (let index = 0; index < state.length; index++) {
                    if (state[index].id === newProduct.id) {
                        hasItem = true;
                        state[index].count++;
                    }
                }

                if ( hasItem ) {
                    return [...state];
                } else {
                    newProduct.count = 1;
                    
                    return [
                        ...state, newProduct
                    ];
                }
            }

        case DECREMENT_PRODUCT:
            const product = action.payload;
            state[product.index].count--;

            if (state[product.index].count === 0) 
                state.splice(product.index, 1);

            return [...state];

        case REMOVE_PRODUCT:
            state.splice(action.payload, 1);
            return [...state];
            
        default:
            return state;
    }
}

export default reducer;