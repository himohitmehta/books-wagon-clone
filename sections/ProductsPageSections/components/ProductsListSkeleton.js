import { Box, Grid } from "@mui/material";
import React from "react";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function ProductsListSkeleton() {
	return (
		<Box sx={{}}>
			<Grid container spacing={3}>
				{list.map((item, index) => (
					<Grid item md={2} xs={6} key={item}>
						<ProductsListSkeleton key={item} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
