import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: {},
};

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
