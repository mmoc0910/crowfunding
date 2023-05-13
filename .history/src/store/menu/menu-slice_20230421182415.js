import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { isOpen: true },
  reducers: {
    toogleMenu: (state, action) => ({
      ...state,
      isOpen: !state.isOpen,
    }),
  },
});

export const { toogleMenu } = menuSlice.actions;
export default menuSlice.reducer;
