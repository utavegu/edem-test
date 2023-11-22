import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TripsState {
  trips: any[]; // TODO: Интерфейс поездок []
}

const initialState: TripsState = {
  trips: []
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    // TODO: временно эни
    setTrips(state, action: PayloadAction<any>) {
      state.trips = action.payload;
    }
  },
});

export const { setTrips } = tripsSlice.actions;

export default tripsSlice.reducer;