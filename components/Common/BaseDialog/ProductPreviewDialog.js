import React from "react";
import BaseDialog from ".";
import { Box, IconButton, Typography } from "@mui/material";
import AppImage from "../AppImage";
import { OutlinedButton, PrimaryButton } from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
	addProductToCart,
	reduceCartItem,
	removeCartItem,
} from "store/cart/cartSlice";
import CartQuantityInput from "../FormInputs/CartQuantityInput";
import PriceView from "../ProductCard/components/PriceVIew";
import RenderHTML from "../ProductCard/components/RenderHTML";
import { selectCartData } from "store/cart/cart.selectors";
import { useRouter } from "next/router";
import { toast } from "sonner";

const mapState = ({ books }) => ({
	selectedBookData: books.selectedBook,
});

// styles for the dialog component
const styles = {
	container: {
		display: "flex",
		// justifyContent: "space-between",
		flex: 1,
	},
	leftColumn: {
		display: "flex",
		flexDirection: "column",
		flex: 0.3,
		alignItems: "center",
	},
	rightColumnContainer: {
		pl: 4,
	},
	rightColumn: {
		display: "flex",
		flexDirection: "column",
	},
	buttonStyles: {
		mt: 2,
		width: "100%",
	},
	title: {
		fontSize: "20px",
		fontWeight: 500,
		fontStyle: "italic",
		lineHeight: "24px",
		color: "#212529",
		mt: 3,
	},
	otherInfo: {
		fontSize: "16px",
		lineHeight: "24px",
		color: "#717171",
		mt: 3,
		mb: 3,
	},
	description: {
		WebkitLineClamp: 6,
		WebkitBoxOrient: "vertical",
		display: "-webkit-box",
		overflow: "hidden",
		textOverflow: "ellipsis",
		lineClamp: 6,
	},
	buttonContainer: {
		display: "flex",
		justifyContent: "center",
		mt: 3,
	},
	button: {
		maxWidth: "100%",
		width: "80%",
	},
};
// product preview dialog used for showing product details in a dialog
export default function ProductPreviewDialog({ open, handleClose }) {
	const { selectedBookData } = useSelector(mapState);
	const router = useRouter();
	const dispatch = useDispatch();
	const { image_url, title } = (selectedBookData && selectedBookData) ?? {};
	const handleAddToCart = () => {
		dispatch(addProductToCart(selectedBookData));
		toast.success("Book added to cart!", {
			action: {
				label: "View Cart",
				onClick: () => router.push("/cart"),
			},
		});
	};
	const handleRemoveFromCart = () => {
		dispatch(removeCartItem(selectedBookData));
	};
	const handleReduceCartItem = () => {
		dispatch(reduceCartItem(selectedBookData));
		toast.success("Reduced 1 book!", {
			action: {
				label: "View Cart",
				onClick: () => router.push("/cart"),
			},
		});
	};

	function handleViewDetailsClick() {
		router.push(`/books/${selectedBookData.id}`);
	}
	if (selectedBookData)
		return (
			<BaseDialog open={open} handleClose={handleClose}>
				<Box
					sx={{
						...styles.container,
					}}
				>
					{/* Left side  */}
					<Box
						sx={{
							...styles.leftColumn,
						}}
					>
						<AppImage
							src={image_url}
							width={172}
							height={200}
							sx={{ mb: 2 }}
						/>
						<CartQuantityInput
							quantity={1}
							handleAddToCart={handleAddToCart}
							handleReduceCartItem={handleReduceCartItem}
						/>
						<PrimaryButton
							sx={{
								...styles.buttonStyles,
							}}
							onClick={() => handleAddToCart()}
						>
							Add to cart
						</PrimaryButton>
						<OutlinedButton
							sx={{
								...styles.buttonStyles,
							}}
						>
							Add to wishlist
						</OutlinedButton>
						{/* Product image  */}
						{/* Add to cart button */}
						{/* Add to wishlist */}
					</Box>

					{/* Right side  */}
					<Box
						sx={{
							...styles.rightColumnContainer,
						}}
					>
						<Box
							sx={{
								...styles.rightColumn,
							}}
						>
							<PriceView
								maxRetailPrice={
									selectedBookData?.max_retail_price
								}
								sellingPrice={selectedBookData?.selling_price}
							/>
							<Typography
								sx={{
									...styles.title,
								}}
							>
								{selectedBookData.title}
							</Typography>
							<Typography
								sx={{
									...styles.otherInfo,
								}}
							>
								By: {selectedBookData.author}(Author) |
								Publisher: {selectedBookData.publisher} |
								Released: {selectedBookData.released_on} |
							</Typography>
							<RenderHTML
								content={selectedBookData.description}
								sx={{
									...styles.description,
								}}
							/>
						</Box>
						<Box
							sx={{
								...styles.buttonContainer,
							}}
						>
							<OutlinedButton
								sx={{
									...styles.button,
								}}
								onClick={() => handleViewDetailsClick()}
							>
								View Product Detail
							</OutlinedButton>
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
