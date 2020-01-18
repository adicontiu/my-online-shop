//combines all of the reducers
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root', // from where do we want to start storing
  storage,
  whitelist: ['cart'] // which reducers we want to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

//store into cache
export default persistReducer(persistConfig, rootReducer);