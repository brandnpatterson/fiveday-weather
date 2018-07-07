import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const middleware = [ReduxPromise];

const store = applyMiddleware(...middleware)(createStore);

export default store;
