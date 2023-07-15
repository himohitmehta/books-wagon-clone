import { Button, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(({ theme }) => ({
	// backgroundColor: theme.palette.primary.main,
	textTransform: "none",
}));

export default function PrimaryButton({ children, ...props }) {
	return (
		<StyledButton variant="contained" {...props}>
			{children}
		</StyledButton>
	);
}
