import menuSlice from "./menu/menu-slice";
import searchSlice from "./search/search-slice";

const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  menu: menuSlice,
  search: searchSlice,
});
