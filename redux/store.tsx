import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;