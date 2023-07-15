import React from "react";
import BaseDialog from ".";
import { Box, IconButton, Typography } from "@mui/material";
import AppImage from "../AppImage";
import { OutlinedButton, PrimaryButton } from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "store/cart/cartSlice";

const mapState = ({ books }) => ({
	selectedBookData: books.selectedBook,
});
export default function ProductPreviewDialog({ open, handleClose }) {
	const { selectedBookData } = useSelector(mapState);
	const dispatch = useDispatch();
	const { image_url, title } = (selectedBookData && selectedBookData) ?? {};
	const handleAddToCart = () => {
		dispatch(addProductToCart(selectedBookData));
	};

	if (selectedBookData)
		return (
			<BaseDialog
				open={open}
				handleClose={handleClose}
				PaperProps={{
					sx: {
						maxWidth: "720px",
						minWidth: "720px",
						minHeight: "400px",
						padding: "32px",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						// justifyContent: "space-between",
						flex: 1,
					}}
				>
					{/* Left side  */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							flex: 0.3,
							alignItems: "center",
						}}
					>
						<AppImage src={image_url} width={172} height={200} />
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<IconButton> -</IconButton>
							<span>1</span>
							<IconButton> +</IconButton>
						</Box>
						<PrimaryButton onClick={() => handleAddToCart()}>
							Add to cart
						</PrimaryButton>
						<OutlinedButton>Add to wishlist</OutlinedButton>
						{/* Product image  */}
						{/* Add to cart button */}
						{/* Add to wishlist */}
					</Box>

					{/* Right side  */}
					<Box>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography>price</Typography>
							<Typography>title</Typography>
							<Typography>author</Typography>
							<Typography>description</Typography>
						</Box>
						{/* Product price */}
						{/* Product title */}
						{/* Misc. Info=> author,publisher, released_on  */}
						{/* Product description */}
						{/* View Product Details */}
					</Box>
				</Box>
			</BaseDialog>
		);
}
