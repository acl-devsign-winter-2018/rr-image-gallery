import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//import reducers
import thunk from 'redux-thunk';


const reducer = combineReducers({
  //reducers go here
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  )
);

export default store;