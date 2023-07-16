import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userSlice from "./user/userSlice";
import booksSlice from "./books/booksSlice";
import cartSlice from "./cart/cartSlice";


//  all reducers are combined here
export const rootReducer = combineReducers({
	user: userSlice,
	books: booksSlice,
	cart: cartSlice,
});


//  storage for redux-persist
const configStorage = {
	key: "root",
	storage,
	whitelist: ["user", "books", "cart"],
};

// exporting the persisted reducer

export default persistReducer(configStorage, rootReducer);
