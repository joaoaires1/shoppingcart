import React from 'react';
import {
    BrowserRouter, 
    Route
} from 'react-router-dom';

import Home from '../pages/home';
import Cart from '../pages/cart';

export default function Routes () {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/cart' exact component={Cart} />
        </BrowserRouter>
    );
}