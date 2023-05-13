import { createSlice } from "@reduxjs/toolkit";
import { reducer } from "store/reducers";

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

export const {isFocus} = searchSlice.actions,
export default searchSlice.reducer
