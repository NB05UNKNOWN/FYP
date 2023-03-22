import { configureStore } from '@reduxjs/toolkit';
import incomeSlice from './inputReducer';

export const incomeStore = configureStore({
  inputReducer: {
    income: incomeSlice,
  },
});
