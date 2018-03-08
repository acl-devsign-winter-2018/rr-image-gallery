import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { images } from '../components/app/image/reducers';
import { albums, album } from '../components/app/albums/reducers';
import { loading, error } from '../components/app/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

// combine reducer
const reducer = combineReducers({
  images,
  albums,
  album,
  loading,
  error
});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware) 
  ));

export default store;