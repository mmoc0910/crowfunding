import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { isOpen: false },
  reducers: {
    toogleMenu: (state, action) => ({
      ...state,
      isOpen: !state.isOpen,
    }),
    closeMenu: (state, action) => ({
      ...state,
      isOpen: false,
    }),
  },
});

export const { toogleMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
