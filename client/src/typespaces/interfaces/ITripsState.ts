import { ErrorType } from '../types/ErrorType';
import { ITrip } from './ITrip';

export interface ITripsState {
  trips: ITrip[];
  tripsAmount: number;
  isTripsLoading: boolean;
  tripsError: ErrorType;
  isTripsAmountLoading: boolean;
  tripsAmountError: ErrorType;
}
