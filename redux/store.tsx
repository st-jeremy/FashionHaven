// import { configureStore } from '@reduxjs/toolkit';
// import { cartReducer } from './cart.slice';

// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

// const store = configureStore({
//   reducer: persistedReducer, // Use the persistedReducer as the root reducer
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Disable serializable check for the persist actions
//     }),
// });

// export const persistor = persistStore(store);

// export default store;







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

const persistedReducer = persistReducer(persistConfig, cartReducer);

const reducer = {
  // cart: persistedReducer,
  cart: cartReducer,
};


const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export default store;


export const persistor = persistStore(store)