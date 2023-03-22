import { createSlice } from '@reduxjs/toolkit';

const initialStateIncome = {
  income: [],
  sources: [],
};

export const incomeSlice = createSlice({
  name: 'income',
  initialStateIncome,
  reducer: {
    getSources: (state) => {},
  },
});

export const { getSources } = incomeSlice.actions;

export default incomeSlice.reducer;
