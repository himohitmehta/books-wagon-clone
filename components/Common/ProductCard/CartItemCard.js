import { Badge, Box } from "@mui/material";
import React from "react";
import AppImage from "../AppImage";
import getCurrencyValue from "utils/getCurrencyValue";
import { OutlinedButton, PrimaryButton } from "../Buttons";

export default function CartItemCard({ data }) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				maxWidth: "100%",
			}}
		>
			<Badge badgeContent={"30%"} color="success">
				<AppImage src={data.image_url} width={172} height={200} />
			</Badge>
			<Box
				sx={{
					ml: 4,
				}}
			>
				<h1>{data.title}</h1>
				<p>By:{data.author}</p>
				<p>
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
					}}
				>
					<span> {data.quantity}</span>
					<span>
						Total Price:{" "}
						{getCurrencyValue({
							currencyValue: data.quantity * data.selling_price,
						})}
					</span>
					<Box>
						<PrimaryButton>Move to Wishlist</PrimaryButton>
						<OutlinedButton>Remove</OutlinedButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
