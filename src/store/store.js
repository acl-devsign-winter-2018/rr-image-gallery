import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { images } from '../components/app/image/reducers';
// import { expensesByCategory } from './components/expenses/reducer';
import { loading, error } from '../components/app/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

// combine reducer
const reducer = combineReducers({
  images,
  loading,
  error
});

// async middleware
// const async = store => next => action => {
//   if(typeof action === 'function') {
//     action(store.dispatch, store.getState);
//   }
//   else {
//     return next(action);
//   }
// };

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, promiseMiddleware) 
  ));

export default store;