import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { imagesByAlbum } from '../components/images/reducers';
import { loading, error } from '../components/app/reducers';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  imagesByAlbum,
  loading,
  error
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;
