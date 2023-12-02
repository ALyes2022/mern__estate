import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';
import { persistReducer, persistStore } from 'redux-persist'; // helps to keep the state data in the cookies (example in case you refresh the page the data is not lost)
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer })
const persistConfig = {
  key: 'root',
  storage,
  version: 1
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store)