import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import BooksReducer from './books_reducer.js';
import ActiveBook from './active-book_reducer.js';


const rootReducer = combineReducers({
	routing,
	books: BooksReducer,
	activeBook: ActiveBook,
});

export default rootReducer;