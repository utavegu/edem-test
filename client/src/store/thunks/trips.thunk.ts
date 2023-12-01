import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTripsLoading, setTripsError, setTripsAmountLoading, setTripsAmountError } from '../slices/trips.slice';
import TripsService from '../../api/services/TripsService';
import { ITrip } from '../../typespaces/interfaces/ITrip';

export const fetchTrips = createAsyncThunk<ITrip[], { limit: number; offset: number }>(
  'trips/fetch',
  async (payload: { limit: number; offset: number }, store) => {
    const { dispatch } = store;
    try {
      const { limit, offset } = payload;
      dispatch(setTripsLoading(true));
      dispatch(setTripsError(null));
      const trips = await TripsService.fetchTrips({ limit, offset });
      return trips;
    } catch (err) {
      dispatch(setTripsError(err));
    } finally {
      dispatch(setTripsLoading(false));
    }
  }
);

export const fetchTripsAmount = createAsyncThunk<number>('tripsAmount/fetch', async (_, store) => {
  const { dispatch } = store;
  try {
    dispatch(setTripsAmountLoading(true));
    dispatch(setTripsAmountError(null));
    const tripsAmount = await TripsService.tripsAmount();
    return tripsAmount;
  } catch (err) {
    dispatch(setTripsAmountError(err));
  } finally {
    dispatch(setTripsAmountLoading(false));
  }
});
