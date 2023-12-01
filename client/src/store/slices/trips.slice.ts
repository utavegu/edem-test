import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTripsAmount, fetchTrips } from '../thunks/trips.thunk';
import { ErrorType } from '../../typespaces/types/ErrorType';
import { ITripsState } from '../../typespaces/interfaces/ITripsState';

const initialState: ITripsState = {
  trips: [],
  tripsAmount: 0,
  isTripsLoading: false,
  tripsError: null,
  isTripsAmountLoading: false,
  tripsAmountError: null,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTripsLoading(state, action: PayloadAction<boolean>) {
      state.isTripsLoading = action.payload;
    },
    setTripsError(state, action: PayloadAction<ErrorType>) {
      state.tripsError = action.payload;
    },
    setTripsAmountLoading(state, action: PayloadAction<boolean>) {
      state.isTripsAmountLoading = action.payload;
    },
    setTripsAmountError(state, action: PayloadAction<ErrorType>) {
      state.tripsAmountError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrips.fulfilled, (state, { payload }) => {
      try {
        state.trips = [...state.trips, ...payload];
      } catch (err) {
        console.error(err);
      }
    }),
      builder.addCase(fetchTripsAmount.fulfilled, (state, { payload }) => {
        try {
          state.tripsAmount = payload;
        } catch (err) {
          console.error(err);
        }
      });
  },
});

export const { setTripsLoading, setTripsError, setTripsAmountLoading, setTripsAmountError } = tripsSlice.actions;

export default tripsSlice.reducer;
