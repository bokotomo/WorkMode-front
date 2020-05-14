import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducerRoot from '@/redux/reducer';
import sagaRoot from '@/redux/saga';

const sagaMiddleware = createSagaMiddleware();

// 修正予定
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerRoot,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaRoot);

export default store;
