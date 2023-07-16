import { Box } from "@mui/material";
import React from "react";

export default function ShippingInfoSection() {
	return (
		<Box
			sx={{
				my: 2,
				mt: 3,
				"& .status": {
					color: "#008000",
					mb: -2,
				},
				"& .shipping-info": {
					// pt: 1,
					pb: 1,
				},
			}}
		>
			<span className="status"> Available</span>
			<br />
			<span>
				Ships within <strong>2-4 Business Days</strong>
			</span>
			<br />
			<span className="shipping-info">
				{" "}
				₹39 shipping in India per item and low cost Worldwide.
			</span>
		</Box>
	);
}
