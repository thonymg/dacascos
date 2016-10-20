import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from 'reducers';

const create = applyMiddleware(Thunk)(createStore);

export default (initialState) => create(rootReducer, {});