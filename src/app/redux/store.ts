import { configureStore } from '@reduxjs/toolkit';
import { issueTracketSlice } from '../issues/slice';
import { homeSlice } from '../home/slice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    issueTracker: issueTracketSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === 'production'
      ? getDefaultMiddleware()
      : getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
