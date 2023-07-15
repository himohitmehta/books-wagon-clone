import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "Lato, sans-serif",
	},
	palette: {
		mode: "light",
		primary:{
			main: "#D51912",
		}
	},
	// palette: lightPalette,
});

export default theme;
