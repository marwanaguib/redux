import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import logger from 'redux-logger'

const initialState = {};
const middelware = [thunk]
let final_middleware;
if (process.env.NODE_ENV !== 'production') {
    // if development let action appear in console.log
    final_middleware = applyMiddleware(...middelware,logger);
  }else{
    // if production
    final_middleware = applyMiddleware(...middelware);
  }
const store = createStore(
    rootReducer, 
    initialState, 
    final_middleware
    );

export default store;