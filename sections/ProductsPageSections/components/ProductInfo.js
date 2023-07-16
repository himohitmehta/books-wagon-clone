import { Box, Typography } from "@mui/material";
import React from "react";

export default function ProductInfo({ title, released_on, author, publisher }) {
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					fontSize: "16px",
					lineHeight: "24px",
					fontWeight: 500,
					color: "#212529",
					"& h1": {
						fontSize: "24px",
						fontWeight: 500,
						color: (theme) => theme.palette.primary.main,
						mr: 1,
					},
				}}
			>
				<h1>{title}</h1> (Paperback) | Released: {released_on}
			</Box>
			<Typography
				sx={{
					fontSize: "16px",
					lineHeight: "24px",
					fontWeight: 500,
					"& .author": {
						color: (theme) => theme.palette.primary.main,
					},
					mb: 2,
				}}
			>
				By:<span className="author"> {author}</span> (Author) |
				Publisher: {publisher}
			</Typography>
		</div>
	);
}
