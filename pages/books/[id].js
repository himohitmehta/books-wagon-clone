import {
	Box,
	Breadcrumbs,
	Container,
	Divider,
	Rating,
	Typography,
} from "@mui/material";
import AppImage from "components/Common/AppImage";
import AppLink from "components/Common/AppLink";
import { OutlinedButton, PrimaryButton } from "components/Common/Buttons";
import ProductsSlider from "components/Common/ImageSlider/ProductsSlider";
import PriceView from "components/Common/ProductCard/components/PriceVIew";
import RenderHTML from "components/Common/ProductCard/components/RenderHTML";
import BaseLayout from "layout";
import { useRouter } from "next/router";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ProductActions from "sections/ProductsPageSections/components/ProductActions";
import ProductInfo from "sections/ProductsPageSections/components/ProductInfo";
import ShippingInfoSection from "sections/ProductsPageSections/components/ShippingInfoSection";
import { toast } from "sonner";
import { addProductToCart } from "store/cart/cartSlice";

// get the books data from redux store
const mapState = ({ books }) => ({
	selectedBookData: books.selectedBook,
	booksData: books.booksData,
});
const styles = {
	heading: {
		fontSize: "16px",
		lineHeight: "24px",
		fontWeight: 700,

		color: (theme) => theme.palette.primary.main,
	},
	column: {
		display: "flex",
		flexDirection: "column",
	},
	detailRow: {
		display: "flex",
		// mb: 1,
		fontSize: "14px",
		lineHeight: "25px",
		"& span": {
			fontWeight: 700,
			marginRight: "8px",
		},
	},
};
export default function BookDetailPage() {
	// get the books data from redux store => booksData, selectedBookData
	const { selectedBookData, booksData } = useSelector(mapState);
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	// extracting keys from selectedBookData
	const {
		title,
		description,
		image_url,
		author,
		category,
		released_on,
		publisher,
	} = selectedBookData ?? {};
	// function to add book to cart
	const handleAddBookToCart = () => {
		// dispatching action to add book to cart
		dispatch(addProductToCart(selectedBookData));
		// toast notification
		toast.success("Book added to cart!", {
			action: {
				// button to view cart
				label: "View Cart",
				onClick: () => router.push("/cart"),
			},
		});
	};

	if (selectedBookData)
		return (
			<BaseLayout>
				<Container maxWidth="xl" sx={{ pt: 2 }}>
					<Breadcrumbs
						separator={<MdNavigateNext fontSize="small" />}
					>
						<AppLink href={"/"}>Home</AppLink>
						<>Books</>
					</Breadcrumbs>
					<Box sx={{ display: "flex", flex: 1, mt: 2 }}>
						<Box>
							<AppImage
								src={image_url}
								width={200}
								height={200}
							/>
						</Box>
						<Box
							sx={{
								flex: 1,
								ml: 4,
							}}
						>
							<ProductInfo
								author={author}
								released_on={released_on}
								publisher={publisher}
								title={title}
							/>
							<Box sx={{ display: "flex", mb: 2 }}>
								<Rating
									name="half-rating"
									defaultValue={4.5}
									precision={0.5}
								/>
								| Write a Review
							</Box>
							<Divider sx={{ mb: 2 }} />
							<PriceView
								maxRetailPrice={
									selectedBookData.max_retail_price
								}
								sellingPrice={selectedBookData.selling_price}
							/>
							<ShippingInfoSection />

							<ProductActions
								handleAddBookToCart={handleAddBookToCart}
							/>
						</Box>
					</Box>
					<Box>
						{selectedBookData.description && (
							<Box
								sx={{
									"& h4": {
										...styles.heading,
									},
								}}
							>
								<h4>About The Book</h4>
								<RenderHTML
									content={selectedBookData.description}
								/>
							</Box>
						)}
					</Box>
					<Divider />
					<ProductsSlider
						title={booksData[0].Title}
						data={booksData[0].list}
					/>
					{/* Showing product details info, like  */}
					<Box
						sx={{
							"& h4": {
								...styles.heading,
								mb: 0,
							},
						}}
					>
						<h4>Product Details</h4>

						<Box sx={{ display: "flex", mb: 4 }}>
							<Box
								sx={{
									...styles.column,
									pr: 4,
								}}
							>
								{Object.entries(productDetails)
									.splice(0, 9)
									.map(([key, value], index) => (
										<Box
											sx={{
												...styles.detailRow,
											}}
											key={index}
										>
											<span>{key}: </span>
											{value}
										</Box>
									))}
							</Box>
							<div
								style={{
									...styles.column,
								}}
							>
								{Object.entries(productDetails)
									.splice(9, 16)
									.map(([key, value], index) => (
										<Box
											sx={{
												...styles.detailRow,
											}}
											key={index}
										>
											<span>{key}: </span>
											{value}
										</Box>
									))}
							</div>
						</Box>
					</Box>{" "}
					<Divider />
					{/* List of similar products, currently showing only the best sellers data */}
					<ProductsSlider
						title={"Similar products"}
						data={booksData[0].list}
					/>
					{/* List of new arrivals, currently showing only the best sellers data */}
					<ProductsSlider
						title={"New Arrivals"}
						data={booksData[0].list}
					/>
				</Container>
			</BaseLayout>
		);
}

// object for product details to show in product details page
const productDetails = {
	"ISBN-13": "9781416591054",
	Publisher: "Scribner Book Company",
	"Publisher Imprint": "Scribner Book Company",
	Depth: "32",
	Height: "239 mm",
	"No of Pages": "384",
	"Series Title": "English",
	"Sub Title":
		"Quanah Parker and the Rise and Fall of the Comanches, the Most Powerful Indian Tribe in American History",
	Width: "165 mm",
	"ISBN-10": "1416591052",
	"Publisher Date": "25 May 2010",
	Binding: "Hardback",
	Edition: "1",
	Language: "English",
	Returnable: "Y",
	"Spine Width": "36 mm",
	Weight: "566 gr",
};
