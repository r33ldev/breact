import { combineReducer, configureStore } from '@reduxjs/toolkit';
import appslice from './appslice';
import { loadState } from './localStorage';

const appReducer = combineReducer({
  app: appslice,
});

const persistedState = loadState();

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  preloadedState: persistedState,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
