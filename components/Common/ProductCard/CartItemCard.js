import { Badge, Box, IconButton } from "@mui/material";
import React from "react";
import AppImage from "../AppImage";
import getCurrencyValue from "utils/getCurrencyValue";
import { OutlinedButton, PrimaryButton } from "../Buttons";
import { useDispatch } from "react-redux";
import {
	addProductToCart,
	reduceCartItem,
	removeCartItem,
} from "store/cart/cartSlice";
import CartQuantityInput from "../FormInputs/CartQuantityInput";
import PriceView from "./components/PriceVIew";
import { toast } from "sonner";
import { useRouter } from "next/router";

const styles = {
	container: {
		display: "flex",
		width: "100%",
		maxWidth: "100%",
		flex: 1,
	},
	heading: {
		flex: 1,
		ml: 4,
		"& h1": {
			fontSize: "18px",
			cursor: "pointer",
			"&:hover": {
				textDecoration: "underline",
			},
		},
		".author": {
			fontSize: "14px",
			lineHeight: "21px",
			color: "blue",
			"&:hover": {
				color: "#032A78",
			},
		},
	},
	bottomRow: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		".total-price": {
			fontSize: "17px",
			fontWeight: 700,
			lineHeight: "25.5px",
			color: (theme) => theme.palette.primary.main,
		},
		mt: 2,
	},
};

export default function CartItemCard({ data }) {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleAddToCart = () => {
		dispatch(addProductToCart(data));
	};
	const handleRemoveFromCart = () => {
		dispatch(removeCartItem(data));

		toast.success("Item removed from cart!");
	};
	const handleReduceCartItem = () => {
		dispatch(reduceCartItem(data));
	};
	const handleProductNavigation = () => {
		router.push(`/books/${data.id}`);
	};

	return (
		<Box
			sx={{
				...styles.container,
			}}
		>
			<Badge badgeContent={"30%"} color="success">
				<AppImage src={data.image_url} width={172} height={200} />
			</Badge>
			<Box
				sx={{
					...styles.heading,
				}}
			>
				<h1 onClick={() => handleProductNavigation()}>{data.title}</h1>
				<p>
					By: <span className="author">{data.author}</span>
				</p>
				<PriceView
					maxRetailPrice={data.max_retail_price}
					sellingPrice={data.selling_price}
				/>
				<Box
					sx={{
						...styles.bottomRow,
					}}
				>
					<CartQuantityInput
						quantity={data.quantity}
						handleAddToCart={handleAddToCart}
						handleReduceCartItem={handleReduceCartItem}
					/>

					<span className="total-price">
						Total Price:{" "}
						{getCurrencyValue({
							currencyValue: data.quantity * data.selling_price,
						})}
					</span>
					<Box>
						<PrimaryButton sx={{ mr: 3 }}>
							Move to Wishlist
						</PrimaryButton>
						<OutlinedButton onClick={() => handleRemoveFromCart()}>
							Remove
						</OutlinedButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
