import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from './slices/trips.slice';

const store = configureStore({
  reducer: {
    tripsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
