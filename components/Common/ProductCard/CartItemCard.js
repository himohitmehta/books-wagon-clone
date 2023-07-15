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
					".price": {
						fontSize: "18px",
						fontWeight: 700,
						color: (theme) => theme.palette.primary.main,
						"& strike": {
							fontSize: "14px",
							lineHeight: "21px",
							color: "#808080",
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
				}}
			>
				<h1>{data.title}</h1>
				<p>
					By: <span className="author">{data.author}</span>
				</p>
				<p className="price">
					{getCurrencyValue({ currencyValue: data.selling_price })}
					<strike>
						{getCurrencyValue({
							currencyValue: data.max_retail_price,
						})}
					</strike>
				</p>
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
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							border: "1px solid rgba(0,0,0,0.1)",
							borderRadius: "8px",
							background: "white",
							px: 1,
							"& .quantity": {
								borderRight: "1px solid rgba(0,0,0,0.1)",
								borderLeft: "1px solid rgba(0,0,0,0.1)",
								px: 2,
								mx: 1,
							},
						}}
					>
						<IconButton
							onClick={() => handleReduceCartItem()}
							sx={{
								"&:hover": {
									background: "transparent",
								},
							}}
						>
							{" "}
							-
						</IconButton>
						<span className="quantity"> {data.quantity}</span>
						<IconButton
							sx={{
								"&:hover": {
									background: "transparent",
								},
							}}
							onClick={() => handleAddToCart()}
						>
							{" "}
							+
						</IconButton>
					</Box>

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
