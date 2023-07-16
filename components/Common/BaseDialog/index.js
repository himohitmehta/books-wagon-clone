import { Dialog, IconButton } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";

// custom base dialog component for the app
export default function BaseDialog({
	children,
	open,
	handleClose,
	dialogPaperStyles,
	...props
}) {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{
				sx: {
					maxWidth: "720px",
					minWidth: "720px",
					minHeight: "400px",
					padding: "32px",
					...dialogPaperStyles,
				},
			}}
			{...props}
		>
			<IconButton
				onClick={() => handleClose()}
				sx={{
					position: "absolute",
					top: "10px",
					right: "10px",
					color: "black",
				}}
			>
				<MdClose />
			</IconButton>

			{children}
		</Dialog>
	);
}
