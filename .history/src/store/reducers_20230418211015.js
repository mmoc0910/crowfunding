import menuSlice from "./menu/menu-slice";

const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  menu: menuSlice,
});
