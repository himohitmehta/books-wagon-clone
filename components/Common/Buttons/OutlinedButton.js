import { Button, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
	background: "white",
	// textTransform: "capitalize",
	fontSize:'13px',
	lineHeight:'1.5',
	fontWeight:'700',
	
	"&:hover": {
		background: "white",
	},
}));
export default function OutlinedButton({ children, ...props }) {
	return (
		<StyledButton variant="outlined" {...props}>
			{children}
		</StyledButton>
	);
}
