/* eslint-disable import/no-anonymous-default-export */
import logger from "redux-logger";
import createSagaMiddle from "redux-saga";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: rootReducer,
	middleware:
		process.env.NODE_ENV !== "production"
			? (getDefaultMiddleware) => getDefaultMiddleware({}).concat(logger)
			: (getDefaultMiddleware) => getDefaultMiddleware({}),
	devTools: process.env.NODE_ENV !== "production",
});

export const persistor = store;
// initMessageListener(store);

export default {
	store,
};
