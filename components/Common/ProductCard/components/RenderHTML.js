import { Typography } from "@mui/material";
import React from "react";

// render the html content
export default function RenderHTML({ content, sx, ...props }) {
	return (
		<Typography
			dangerouslySetInnerHTML={{
				__html: content,
			}}
			sx={{ ...sx }}
			{...props}
		/>
	);
}
