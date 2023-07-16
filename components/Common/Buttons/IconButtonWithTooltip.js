import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export default function IconButtonWithTooltip({ title, children, ...props }) {
	return (
		<Tooltip title={title}>
			<IconButton {...props}>{children}</IconButton>
		</Tooltip>
	);
}
