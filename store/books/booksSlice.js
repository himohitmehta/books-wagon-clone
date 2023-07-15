import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	booksData: [],
	selectedBook: {},
};

const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		setBooksData(state, action) {
			state.booksData = action.payload;
		},
		setSelectedBookData(state, action) {
			state.selectedBook = action.payload;
		},
	},
});

export const { setBooksData, setSelectedBookData } = booksSlice.actions;

export default booksSlice.reducer;
