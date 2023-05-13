import categorySlice from "./categorySlice";

const { combineReducers } = require("@reduxjs/toolkit");
const menuSlice = require("./menu/slice");

export const reducer = combineReducers({
  "status-menu": menuSlice,
  category: categorySlice,
});
