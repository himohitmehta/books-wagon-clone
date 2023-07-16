import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	booksData: [],
	selectedBook: {},
};

const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		// action for setting the books data in redux store
		setBooksData(state, action) {
			state.booksData = action.payload;
		},
		// action for setting the selected book data in redux store
		setSelectedBookData(state, action) {
			state.selectedBook = action.payload;
		},
	},
});
//  export the actions
export const { setBooksData, setSelectedBookData } = booksSlice.actions;

export default booksSlice.reducer;
