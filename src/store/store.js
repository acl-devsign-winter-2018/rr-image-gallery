import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loading } from '../components/app/reducers';
import { albums, album } from '../components/album/reducers';
import promiseMiddleware from './promiseMiddleware';

const reducer = combineReducers({
  albums,
  album,
  loading
});

// const async = store => next => action => {
//   if(typeof action === 'function') {
//     action(store.dispatch, store.getState);
//   }
//   else {
//     return next(action);
//   }
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware)
  )
);

export default store;
