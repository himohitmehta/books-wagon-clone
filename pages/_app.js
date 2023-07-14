import "styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import theme from "theme";
import { store } from "store/configureStore";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
}
