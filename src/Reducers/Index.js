import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { CategoriesReducer } from './Category';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
});

const { NODE_ENV } = process.env;
const middlewares = [thunk];

const enableDevTools = NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, enableDevTools);

export default store;
