import { Box, Container, Typography } from "@mui/material";
import CartItemCard from "components/Common/ProductCard/CartItemCard";
import BaseLayout from "layout";
import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal,
	selectCartItemsCount,
} from "store/cart/cart.selectors";

const mapState = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	count: selectCartItemsCount,
});
export default function CartPage() {
	const { cartItems, total, count } = useSelector(mapState);
	console.log({ cartItems, total, count });
	return (
		<BaseLayout>
			Cart: {count ?? 0}
			<Container>
				<Typography>My Shopping Cart</Typography>
				{cartItems.map((item, index) => (
					<Box
						key={index}
						sx={{
							mt: 2,
						}}
					>
						<CartItemCard data={item} />
					</Box>
				))}
			</Container>
		</BaseLayout>
	);
}
