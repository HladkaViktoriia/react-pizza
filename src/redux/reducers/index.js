import {combineReducers} from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas'

const reducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
});

export default reducer;