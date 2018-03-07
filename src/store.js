import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { images } from './components/image/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';


const reducer = combineReducers({
  images
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware) 
  )
);

export default store;