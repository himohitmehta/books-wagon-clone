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

export default function CartItemCard({ data }) {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addProductToCart(data));
	};
	const handleRemoveFromCart = () => {
		dispatch(removeCartItem(data));
	};
	const handleReduceCartItem = () => {
		dispatch(reduceCartItem(data));
	};

	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				maxWidth: "100%",
				flex: 1,
			}}
		>
			<Badge badgeContent={"30%"} color="success">
				<AppImage src={data.image_url} width={172} height={200} />
			</Badge>
			<Box
				sx={{
					flex: 1,
					ml: 4,
					"& h1": {
						fontSize: "18px",
					},
					".author": {
						fontSize: "14px",
						lineHeight: "21px",
						color: "blue",
						"&:hover": {
							color: "#032A78",
						},
					},
				}}
			>
				<h1>{data.title}</h1>
				<p>
					By: <span className="author">{data.author}</span>
				</p>
				<PriceView
					maxRetailPrice={data.max_retail_price}
					sellingPrice={data.selling_price}
				/>
				<Box
					sx={{
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
