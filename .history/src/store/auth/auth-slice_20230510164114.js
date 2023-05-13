import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    login: (state, action) => ({}),
    register: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    refreshToken: (state, action) => ({}),
    logout: (state, action) => ({}),
  },
});

export const { login, register, updateUser, refreshToken, logout } =
  authSlice.actions;
export default authSlice.reducer;
