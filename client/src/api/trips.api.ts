import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// TODO

export const tripsApi = createApi({
  reducerPath: 'tripsApi',
  tagTypes: ['Trips'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/' // временно
  }),
  endpoints: (builder) => ({
    // временно эни
    getTrips: builder.query<any, any>({
      query: ({ limit = 10, page = 1 }) => ({
        method: 'GET',
        url: 'photos', // временно
        params: {
          _limit: limit,
          _page: page
        },
      }),
      providesTags: (result) => ['Trips'],
    }),
  }),
})

export const { useLazyGetTripsQuery } = tripsApi;