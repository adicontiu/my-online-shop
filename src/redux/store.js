import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {fetchCollectionsStart} from './shop/shop.saga';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//adding individual sagas
sagaMiddleware.run(fetchCollectionsStart);
export const persistor = persistStore(store);

export default {store, persistor};