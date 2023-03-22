import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: [],
  sources: [],
};

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducer: {
    getSources: (state) => {},
  },
});

export const { getSources } = incomeSlice.actions;

export default incomeSlice.reducer;
