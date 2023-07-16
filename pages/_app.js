import "styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import theme from "theme";
import { persistor, store } from "store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<Toaster
						richColors
						position="top-center"
						duration={3000}
						expand
					/>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
