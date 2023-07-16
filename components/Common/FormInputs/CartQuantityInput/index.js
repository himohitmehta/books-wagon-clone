import { Box, IconButton } from "@mui/material";
import React from "react";

const styles = {
	container: {
		display: "flex",
		alignItems: "center",
		border: "1px solid rgba(0,0,0,0.4)",
		borderRadius: "8px",
		background: "white",
		px: 1,
		"& .quantity": {
			borderRight: "1px solid rgba(0,0,0,0.4)",
			borderLeft: "1px solid rgba(0,0,0,0.4)",
			px: 2,
			mx: 1,
		},
	},
	action: {
		"&:hover": {
			background: "transparent",
		},
	},
};
// input component for updating cart quantity for a product
export default function CartQuantityInput({
	quantity,
	handleAddToCart,
	handleReduceCartItem,
	containerStyles,
}) {
	return (
		<Box
			sx={{
				...styles.container,
				...containerStyles,
			}}
		>
			<IconButton
				onClick={() => handleReduceCartItem()}
				sx={{
					...styles.action,
				}}
			>
				-
			</IconButton>
			<span className="quantity"> {quantity}</span>
			<IconButton
				sx={{
					...styles.action,
				}}
				onClick={() => handleAddToCart()}
			>
				{" "}
				+
			</IconButton>
		</Box>
	);
}
