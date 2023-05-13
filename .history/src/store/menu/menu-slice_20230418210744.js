import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "status-menu",
  initialState: {},
  reducers: {
    toogleMenu: (state, action) => ({
      ...state,
      isOpen: !state.isOpen,
    }),
  },
});

export const { toogleMenu } = menuSlice.actions;
export default menuSlice.reducer;
