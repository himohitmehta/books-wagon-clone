import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import AppLink from "../AppLink";
import AppImage from "../AppImage";
import { FaCartPlus } from "react-icons/fa";
import { OutlinedButton, PrimaryButton } from "../Buttons";
import bookImage from "public/assets/books/book_1.jpg";
import getCurrencyValue from "utils/getCurrencyValue";
import { useDispatch } from "react-redux";
import { setSelectedBookData } from "store/books/booksSlice";
import ProductPreviewDialog from "../BaseDialog/ProductPreviewDialog";

const styles = {
	card: {
		maxWidth: "172px",
		textAlign: "center",
		border: "1px solid transparent",
		borderRadius: "4px",
		".card_actions": {
			visibility: "hidden",
		},
		"&:hover": {
			// border: "1px solid #000",
			".card_actions": {
				visibility: "visible",
			},
		},
	},
	imageContainer: {
		position: "relative",
		"&:hover": {
			cursor: "pointer",
		},
		".card_image": {
			width: "100%",
			objectFit: "contain",
			maxWidth: "100%",
			height: "100%",
			maxHeight: "200px",
		},
	},
	imageOverlay: {
		position: "absolute",
		// top: "180",
		left: "0",
		bottom: "16px",
		right: "0",
	},
	title: {
		fontSize: "14px",
		fontWeight: 700,
		lineHeight: "20px",
		color: "#676767",
		mt: 1,
	},
	author: {
		fontSize: "14px",
		fontWeight: 400,
		lineHeight: "20px",
		color: "#332E2E",
		wordWrap: "break-word",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		overflow: "hidden",
		width: "100px",
		textAlign: "center",
		margin: "0 auto",
		maxWidth: "100px",
		mt: 1,
	},
	price: {
		fontSize: "16px",
		fontWeight: 400,
		lineHeight: "20px",
		color: "#D51912",
		mt: 1,
		mb: 2,
		"& strike": {
			fontSize: "13px",
			lineHeight: "1.5",
			color: "#212529",
			ml: 1,
		},
	},
};

export default function ProductCard({ data, className, ...props }) {
	/**
	 * title: 'Your Time Will Come',
            author: ' Saranya Umakanthan',
            selling_price: '119',
            max_retail_price: '199',
            image_url: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/704/9789354400704.jpg',
            publisher: ' Fingerprint! Publishing',
            released_on: '08 Apr 2022',
            category: 'Fiction > Romance',
            description
	 */
	const {
		title,
		author,
		selling_price,
		image_url,
		released_on,
		publisher,
		category,
		description,
		max_retail_price,
	} = data;
	const dispatch = useDispatch();
	const handleSelectBook = () => {
		dispatch(setSelectedBookData(data));
		handleDialogOpen();
	};
	const [openDialog, setOpenDialog] = useState(false);
	const handleDialogOpen = () => {
		setOpenDialog(true);
	};
	const handleDialogClose = () => {
		setOpenDialog(false);
	};
	
	return (
		<Box
			className={className}
			sx={{
				...styles.card,
			}}
		>
			<Box
				sx={{
					...styles.imageContainer,
				}}
			>
				<AppImage
					src={image_url ?? bookImage}
					width={172}
					height={200}
					className="card_image"
				/>
				<Box
					className="card_actions"
					sx={{
						...styles.imageOverlay,
					}}
				>
					<OutlinedButton onClick={() => handleSelectBook()}>
						Quick View
					</OutlinedButton>
				</Box>
			</Box>

			<Typography
				sx={{
					...styles.title,
				}}
			>
				{title ?? "It ends with us"}
			</Typography>
			<Typography
				sx={{
					...styles.author,
				}}
			>
				{author ?? "Colleen Hoover"}
			</Typography>
			<Typography
				sx={{
					...styles.price,
				}}
			>
				{getCurrencyValue({
					currencyValue: selling_price ?? 274,
					maximumFractionDigits: 0,
				})}
				<strike>
					{getCurrencyValue({
						currencyValue: max_retail_price ?? 499,
						maximumFractionDigits: 0,
					})}
				</strike>
			</Typography>
			{openDialog && (
				<ProductPreviewDialog
					open={openDialog}
					handleClose={handleDialogClose}
				/>
			)}
		</Box>
	);
}
