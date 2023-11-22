import type { RootState } from '..';

export const tripsSelector = (state: RootState) => {
  return state.tripsReducer.trips;
};