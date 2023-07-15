import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import booksSlice from "./books/booksSlice";

export const rootReducer = combineReducers({
	user: userSlice,
	books: booksSlice,
});

export default rootReducer;
