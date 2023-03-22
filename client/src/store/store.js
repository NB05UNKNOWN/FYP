import { combineReducers, configureStore } from '@reduxjs/toolkit';
import expenseSlice from './exportReducer';
import inputSlice from './inputReducer';
import { apiSlice } from './apiSlice';

const rootReducer = combineReducers({
  expense: expenseSlice,
  input: inputSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
