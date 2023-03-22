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

    // get income
    getIncome: builder.query({
      //get: http://localhost:8080/api/income
      query: () => '/api/income',
      providesTags: ['income'],
    }),

    //get Lable of income
    getIncomeLabels: builder.query({
      //get: 'http://localhost:8080/api/labelsIncome'
      query: () => 'api/labelsIncome',
      providesTags: ['source'],
    }),

    addSource: builder.mutation({
      query: (initialSource) => ({
        //post: 'http://localhost:8080/api/source'
        url: '/api/source',
        method: 'POST',
        body: initialSource,
      }),
      invalidatesTags: ['source'],
    }),

    //delete record
    deleteSource: builder.mutation({
      query: (recordid) => ({
        //delete: 'http://localhost:8080/api/source'
        url: '/api/source',
        method: 'DELETE',
        body: recordid,
      }),
      invalidatesTags: ['source'],
    }),
  }),
});

export default apiSlice;
