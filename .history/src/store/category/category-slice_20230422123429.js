import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    show: false,
  },
  reducers: {
    toogleCategory: (state, action) => ({
      ...state,
      show: !state.show,
    }),
  },
});

export const { toogleCategory } = categorySlice.actions;
export default categorySlice.reducer;
