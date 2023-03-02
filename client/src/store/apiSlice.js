import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8080';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    //get categories
    getCategories: builder.query({
      // get: 'http://localhost:8080/api/categories'
      query: () => '/api/categories',
      providesTags: ['categories'],
    }),

    //get lables
    getLabels: builder.query({
      //get: 'http://localhost:8080/api/labels'
      query: () => 'api/labels',
      providesTags: ['transaction'],
    }),

    //get new transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        //post: 'http://localhost:8080/api/transaction'
        url: '/api/transaction',
        method: 'POST',
        body: initialTransaction,
      }),
      invalidatesTags: ['transaction'],
    }),

    //delete record
    deleteTransaction: builder.mutation({
      query: (recordid) => ({
        //delete: 'http://localhost:8080/api/transaction'
        url: '/api/transaction',
        method: 'DELETE',
        body: recordid,
      }),
      invalidatesTags: ['transaction'],
    }),
  }),
});

export default apiSlice;
