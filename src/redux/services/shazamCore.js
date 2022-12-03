import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '17802d2f93mshb3a0c25585f3219p1d255cjsn6d073cd2df31')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'})
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;