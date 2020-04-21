import { createStore, combineReducers } from 'redux';
import CartReducer from './reducers/product';

const reducers = combineReducers({
    cart: CartReducer
});

const storeConfig = () => {
    return createStore(reducers);
};

export default storeConfig;
