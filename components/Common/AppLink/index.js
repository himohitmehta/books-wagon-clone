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
//  the link component for the app, built on top of next/link and mui
const AppLink = ({ children, href, ...props }) => {
	return (
		<StyledLink href={href} {...props}>
			{children}
		</StyledLink>
	);
};

export default AppLink;
