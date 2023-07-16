import { Typography } from "@mui/material";
import React from "react";
import getCurrencyValue from "utils/getCurrencyValue";


//  component for showing price
export default function PriceView({ sellingPrice, maxRetailPrice }) {
	return (
		<Typography
			sx={{
				fontSize: "18px",
				fontWeight: 700,
				color: (theme) => theme.palette.primary.main,
				"& strike": {
					fontSize: "14px",
					lineHeight: "21px",
					color: "#808080",
					ml: 1,
				},
			}}
		>
			{getCurrencyValue({ currencyValue: sellingPrice })}
			<strike>
				{getCurrencyValue({
					currencyValue: maxRetailPrice,
				})}
			</strike>
		</Typography>
	);
}
