import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && compose;

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)),
);

window.store = store;