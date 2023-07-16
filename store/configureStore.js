/* eslint-disable import/no-anonymous-default-export */
import logger from "redux-logger";
import createSagaMiddle from "redux-saga";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

//  configure the redux store
export const store = configureStore({
	reducer: rootReducer,
	middleware:
		process.env.NODE_ENV !== "production"
			? (getDefaultMiddleware) =>
					getDefaultMiddleware({
						serializableCheck: {
							ignoredActions: [
								FLUSH,
								REHYDRATE,
								PAUSE,
								PERSIST,
								PURGE,
								REGISTER,
							],
						},
					}).concat(logger)
			: (getDefaultMiddleware) =>
					getDefaultMiddleware({
						serializableCheck: {
							ignoredActions: [
								FLUSH,
								REHYDRATE,
								PAUSE,
								PERSIST,
								PURGE,
								REGISTER,
							],
						},
					}),
	devTools: process.env.NODE_ENV !== "production",
});

// exporting the persistor, i.e. the persisted version of the store
export const persistor = persistStore(store);

export default {
	store,
	persistor,
};
