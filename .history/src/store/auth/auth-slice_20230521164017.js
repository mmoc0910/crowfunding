import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
    permissions: ["CREATE_CAMPAIGN", "PROFILE", "PAYMENT", "WITHDRAW"],
    loading: false,
  },
  reducers: {
    login: (state, action) => ({
      permissions: ["CREATE_CAMPAIGN", "PROFILE", "PAYMENT", "WITHDRAW"],
    }),
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
      permissions: ["CREATE_CAMPAIGN", "PROFILE", "PAYMENT", "WITHDRAW"],
    }),
    logout: (state, action) => ({
      user: undefined,
      accessToken: null,
      permissions: [],
    }),
  },
});

export const { login, register, updateUser, refreshToken, logout } =
  authSlice.actions;
export default authSlice.reducer;
