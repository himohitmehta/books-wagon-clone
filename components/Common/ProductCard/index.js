import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import AppLink from "../AppLink";
import AppImage from "../AppImage";
import { FaCartPlus } from "react-icons/fa";
import { PrimaryButton } from "../Buttons";

const styles = {
	card: {
		display: "flex",
		// margin: "8px",
		justifyContent: "space-between",
		flexDirection: "column",
		borderRadius: "20px",
		// border: "1px solid rgba(0,0,0,0.1)",
		"&:hover": {
			// border: "1px solid rgba(0,0,0,1)",
			// boxShadow:
			// 	"rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
		},
	},
	cardImage: {
		width: "100%",
		minHeight: "250px",
		// maxHeight: "250px",
		overflow: "hidden",
		// borderRadius: "4px",

		// width: "150px",
	},
	cardContent: {},
	cardActions: {},
};

export default function ProductCard() {
	return (
		<Card
			// elevation={0}
			variant="outlined"
			sx={styles.card}
		>
			<AppLink
				to={`/products/${documentID}`}
				style={{ position: "relative" }}
			>
				<Box
					sx={{
						position: "relative",
						// padding: "8px",
					}}
				>
					<AppImage
						src={productThumbnail}
						height="520px"
						sx={{
                            ...styles.cardImage,
                        }}
						alt={productName}
					/>
					{/* <Box
                id="overlay"
                sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: "250px",
                    // maxHeight: "284px",
                    overflow: "hidden",
                    // borderRadius: "4px",
                    position: "absolute",
                    background: "rgba(0,0,0,0.1)",
                    top: "0px",
                    opacity: 0,
                    "&:hover": {
                        opacity: 1,
                    },

                    // width: "150px",
                }}
            > */}
					{/* <IconButton
    sx={{ position: "absolute", right: "10px", top: "4px" }}
  >
    <FaRegHeart /> */}
					{/* </IconButton> */}
					{/* </Box> */}
				</Box>
			</AppLink>

			<CardContent>
				<AppLink
					href={`/products/${documentID}`}
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<Typography variant="h6" style={{ fontWeight: 700 }}>
						{" "}
						{productName}
					</Typography>
				</AppLink>
				<Typography variant="body2" style={{ fontWeight: 700 }}>
					{" "}
					₹{productPrice}
				</Typography>

				{/* <HoverRating /> */}
			</CardContent>

			<CardActions>
				<PrimaryButton
					fullWidth
					{...configAddToCartBtn}
					endIcon={<FaCartPlus />}
					onClick={() => handleAddToCart(product)}
				>
					{/* <Hidden only={["xs"]}>Add to cart</Hidden> */}
				</PrimaryButton>
			</CardActions>
		</Card>
	);
}
