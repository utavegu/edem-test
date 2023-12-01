import type { RootState } from '..';

export const tripsSelector = (state: RootState) => {
  return state.tripsReducer.trips;
};

export const findedTripsQuantitySelector = (state: RootState) => {
  return state.tripsReducer.trips?.length;
};

export const tripsAmountSelector = (state: RootState) => {
  return state.tripsReducer.tripsAmount;
};

export const isLoadingTripsSelector = (state: RootState) => {
  return state.tripsReducer.isTripsLoading;
};

export const errorTripsSelector = (state: RootState) => {
  return state.tripsReducer.tripsError;
};

export const isLoadingTripsAmountSelector = (state: RootState) => {
  return state.tripsReducer.isTripsAmountLoading;
};

export const errorTripsAmountSelector = (state: RootState) => {
  return state.tripsReducer.tripsAmountError;
};
