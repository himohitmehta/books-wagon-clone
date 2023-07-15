import "styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import theme from "theme";
import { persistor, store } from "store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
