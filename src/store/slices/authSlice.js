import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {
        setUser: (state, action) => {
        state.user = action.payload;
        state.error = null;
        },
        login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        },
        logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
        },
    },
});

export const { login, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
