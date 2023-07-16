import { Box, Container, Typography } from "@mui/material";
import { PrimaryButton } from "components/Common/Buttons";
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
import getCurrencyValue from "utils/getCurrencyValue";

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
			<Container sx={{ pb: 4, pt: 4 }}>
				<Typography
					sx={{
						mb: 4,
						fontSize: "18px",
						fontWeight: "700",
						lineHeight: "24px",
						fontStyle: "italic",
						color: "#212529",
					}}
				>
					My Shopping Cart
				</Typography>
				{Array.isArray(cartItems) && cartItems.length > 0 && (
					<Box
						sx={{
							border: "1px solid #cccccc",
							borderRadius: "10px",
							p: 4,
							background: "#f8f8f8",
						}}
					>
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
						<Box
							sx={{
								mt: 4,
								borderTop: `1px solid #cccccc`,
								fontSize: "16px",
								fontWeight: "700",
								lineHeight: "24px",
								color: "#212529",
								display: "flex",
								justifyContent: "flex-end",
								textAlign: "right",
								"& div p": {
									display: "flex",
									justifyContent: "space-between",
									"& span": {
										ml: 2,
									},
								},
							}}
						>
							{/* <div>
							</div> */}
							<div>
								<p>
									Total items:<span> {count}</span>
								</p>

								<p>
									Total:{" "}
									<span>
										{getCurrencyValue({
											currencyValue: total,
										})}
									</span>
								</p>

								<p>
									Shipping:
									<span>
										{" "}
										{getCurrencyValue({
											currencyValue: 500,
										})}
									</span>
								</p>
								<p
									style={{
										borderTop: `1px solid #cccccc`,
										paddingTop: "12px",
									}}
								>
									<strong>
										Amount Payable:{" "}
										<span>
											{getCurrencyValue({
												currencyValue: total + 500,
											})}
										</span>
									</strong>
								</p>
							</div>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<PrimaryButton>Proceed to Buy</PrimaryButton>
						</Box>
					</Box>
				)}{" "}
			</Container>
		</BaseLayout>
	);
}
