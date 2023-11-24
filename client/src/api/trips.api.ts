import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITrip } from '../typespaces/interfaces/ITrip';

export const tripsApi = createApi({
  reducerPath: 'tripsApi',
  tagTypes: ['Trips'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/', // TODO: ENV
  }),
  endpoints: (builder) => ({
    getTrips: builder.query<{ data: ITrip[]; status: string }, { limit: number; offset: number }>({
      query: ({ limit = 10, offset = 0 }) => ({
        method: 'GET',
        url: 'trips',
        params: { limit, offset },
      }),
      providesTags: (result) => ['Trips'],
    }),
    getTripsAmount: builder.query<{ amount: number; status: string }, void>({
      query: () => ({
        method: 'GET',
        url: 'trips/amount',
      }),
      providesTags: (result) => ['Trips'],
    }),
  }),
});

export const { useLazyGetTripsQuery, useGetTripsAmountQuery } = tripsApi;
