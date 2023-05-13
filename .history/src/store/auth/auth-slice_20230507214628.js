import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    login: (state, action) => ({}),
    register: (state, action) => ({}),
  },
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
