import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    isLoggedIn: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
