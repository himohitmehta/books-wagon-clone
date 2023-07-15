import { Dialog } from "@mui/material";
import React from "react";

export default function BaseDialog({ children, open, handleClose, ...props }) {
	return (
		<Dialog open={open} onClose={handleClose} {...props}>
			{children}
		</Dialog>
	);
}
