import { configureStore } from '@reduxjs/toolkit';
import { tripsApi } from '../api/trips.api';
import tripsReducer from './slices/trips.slice';

const store = configureStore({
  reducer: {
    [tripsApi.reducerPath]: tripsApi.reducer,
    tripsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([tripsApi.middleware]),
});

export {store};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
