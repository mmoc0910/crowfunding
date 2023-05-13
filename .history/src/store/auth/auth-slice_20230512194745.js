import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
    permissions: ["PROFILE", "PAYMENT", "WITHDRAW"],
  },
  reducers: {
    login: (state, action) => ({ ...state }),
    register: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    updateUser: (state, action) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    refreshToken: (state, action) => ({
      user: undefined,
      accessToken: null,
      permissions: ["PROFILE", "PAYMENT", "WITHDRAW"],
    }),
    logout: (state, action) => ({}),
  },
});

export const { login, register, updateUser, refreshToken, logout } =
  authSlice.actions;
export default authSlice.reducer;
