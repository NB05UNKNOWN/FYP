import { combineReducers, configureStore } from '@reduxjs/toolkit';
import expenseSlice from './exportReducer';
import inputSlice from './inputReducer';
import { apiSlice } from './apiSlice';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  expense: expenseSlice,
  input: inputSlice,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
