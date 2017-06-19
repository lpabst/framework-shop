import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing.js';
import Shop from './components/Shop/Shop.js';
import Details from './components/Details/Details.js';
import Cart from './components/Cart/Cart.js';
import ThankYou from './components/ThankYou/ThankYou.js';

export default (
    <Switch>
        <Route component={Landing} path='/' exact />
        <Route component={Shop} path='/shop' />
        <Route component={Details} path='/details/:name' />
        <Route component={Cart} path='/cart' />
        <Route component={ThankYou} path='/thank-you' />
    </Switch>
);
