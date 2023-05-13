const { combineReducers } = require("@reduxjs/toolkit");
const menuSlice = require("./menu/slice");

export const reducer = combineReducers({ menuSlice: menuSlice });
