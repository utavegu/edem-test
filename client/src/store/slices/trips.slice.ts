import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrip } from '../../typespaces/interfaces/ITrip';

interface TripsState {
  trips: ITrip[];
}

const initialState: TripsState = {
  trips: [],
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTrips(state, action: PayloadAction<ITrip[]>) {
      state.trips = action.payload;
    },
  },
});

export const { setTrips } = tripsSlice.actions;

export default tripsSlice.reducer;
