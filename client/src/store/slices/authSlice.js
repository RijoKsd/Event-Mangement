import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    role: null,
  },
  reducers: {
    login: (state, action) => {
       
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.role = action.payload.role;

  
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
