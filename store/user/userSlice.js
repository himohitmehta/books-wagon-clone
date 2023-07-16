import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: {},
};
// user slice for storing the user data
// ! not used in this project

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signInUser(state, action) {
			state.currentUser = action.payload;
		},
	},
});

export const { signInUser } = userSlice.actions;

export default userSlice.reducer;
