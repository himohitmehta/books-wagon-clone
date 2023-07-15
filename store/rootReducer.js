import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userSlice from "./user/userSlice";
import booksSlice from "./books/booksSlice";
import cartSlice from "./cart/cartSlice";

export const rootReducer = combineReducers({
	user: userSlice,
	books: booksSlice,
	cart: cartSlice,
});

const configStorage = {
	key: "root",
	storage,
	whitelist: ["user", "books", "cart"],
};

export default persistReducer(configStorage, rootReducer);
// export default rootReducer;
