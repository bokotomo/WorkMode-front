import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerRoot from '@/redux/reducer';

// 修正予定
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducerRoot, storeEnhancers(applyMiddleware(thunk)));

export default store;
