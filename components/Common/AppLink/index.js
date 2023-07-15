import { styled } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledLink = styled(Link)(({ theme }) => ({
	color: theme.palette.primary.main,
	textDecoration: "none",
	"&:hover": {
		textDecoration: "underline",
	},
}));
const AppLink = ({ children, href, ...props }) => {
	return (
		<StyledLink href={href} {...props}>
			{children}
		</StyledLink>
	);
};

export default AppLink;
