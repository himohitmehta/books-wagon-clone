import { Box } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "components/Common/Buttons";
import React from "react";

export default function ProductActions({ handleAddBookToCart }) {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				flex: 1,
				maxWidth: "50%",
				mb: 2,
			}}
		>
			<PrimaryButton
				fullWidth
				sx={{
					mr: 2,
				}}
				onClick={() => handleAddBookToCart()}
			>
				Buy Now
			</PrimaryButton>
			<OutlinedButton fullWidth>Add to Wishlist</OutlinedButton>
		</Box>
	);
}
