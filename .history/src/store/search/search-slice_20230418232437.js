import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isFocus: false,
  },
  reducers: {
    setFocus: (state, action) => ({
      ...state,
      isFocus: action.payload,
    }),
  },
});

export const { setFocus } = searchSlice.actions;
export default searchSlice.reducer;
