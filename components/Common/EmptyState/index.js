import React from "react";
import { Box, Typography } from "@mui/material";
import AppImage from "../AppImage";
import DescriptionText from "../Typography/BodyText/DescriptionText";

export default function EmptyState({
	icon,
	text,
	bodyText,
	image = "",
	children,
	containerStyles,
	imageStyles,
}) {
	return (
		<Box
			sx={{
				// height: "400px",
				display: "grid",
				placeItems: "center",
				pt: 15,
				maxHeight: "800px",
				maxWidth: "600px",
				m: "auto",
				...containerStyles,
			}}
		>
			{text && (
				<DescriptionText
					sx={{
						color: "grey.800",
						fontWeight: 700,
						fontSize: "16px",
						my: 1,
					}}
				>
					{text || ""}
				</DescriptionText>
			)}
			{bodyText && (
				<Typography
					sx={{
						color: "grey.600",
						fontWeight: 500,
						fontSize: "16px",
						width: "100%",
						textAlign: "center",
						// my: 1,
						mb: 3,
					}}
				>
					{bodyText || ""}
				</Typography>
			)}

			{children}
		</Box>
	);
}
