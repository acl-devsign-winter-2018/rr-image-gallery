import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { images, filter } from '../components/image/reducers';
import { album, albums } from '../components/album/reducers';
import { loading, error } from '../components/app/reducers';

const reducer = combineReducers({
  images,
  loading,
  error,
  album,
  albums,
  filter
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