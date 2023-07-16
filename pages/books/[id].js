import {
	Box,
	Breadcrumbs,
	Container,
	Divider,
	Rating,
	Typography,
} from "@mui/material";
import AppImage from "components/Common/AppImage";
import { OutlinedButton, PrimaryButton } from "components/Common/Buttons";
import ProductsSlider from "components/Common/ImageSlider/ProductsSlider";
import PriceView from "components/Common/ProductCard/components/PriceVIew";
import RenderHTML from "components/Common/ProductCard/components/RenderHTML";
import BaseLayout from "layout";
import { useRouter } from "next/router";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { handleAddToCart } from "store/cart/cart.utils";
import { addProductToCart } from "store/cart/cartSlice";

const mapState = ({ books }) => ({
	selectedBookData: books.selectedBook,
	booksData: books.booksData,
});
export default function BookDetailPage({}) {
	const { selectedBookData, booksData } = useSelector(mapState);
	const router = useRouter();
	const dispatch = useDispatch();
	const { id } = router.query;
	const {
		title,
		description,
		image_url,
		author,
		category,
		released_on,
		publisher,
	} = selectedBookData ?? {};
	const handleAddBookToCart = () => {
		dispatch(addProductToCart(selectedBookData));
		toast.success("Book added to cart!", {
			action: {
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
						<>Home</>
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
								"& div h1": {},
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									fontSize: "16px",
									lineHeight: "24px",
									fontWeight: 500,
									color: "#212529",
									"& h1": {
										fontSize: "24px",
										fontWeight: 500,
										color: (theme) =>
											theme.palette.primary.main,
										mr: 1,
									},
								}}
							>
								<h1>{title}</h1> (Paperback) | Released:{" "}
								{released_on}
							</Box>
							<Typography
								sx={{
									fontSize: "16px",
									lineHeight: "24px",
									fontWeight: 500,
									"& .author": {
										color: (theme) =>
											theme.palette.primary.main,
									},
									mb: 2,
								}}
							>
								By:<span className="author"> {author}</span>{" "}
								(Author) | Publisher: {publisher}
							</Typography>
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
									Ships within{" "}
									<strong>2-4 Business Days</strong>
								</span>
								<br />
								<span className="shipping-info">
									{" "}
									₹39 shipping in India per item and low cost
									Worldwide.
								</span>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									flex: 1,
									maxWidth: "50%",
								}}
							>
								<PrimaryButton
									fullWidth
									sx={{
										mr: 2,
									}}
									onClick={() => handleAddBookToCart()}
								>
									Buy Now
								</PrimaryButton>
								<OutlinedButton fullWidth>
									Add to Wishlist
								</OutlinedButton>
							</Box>
						</Box>
					</Box>
					<Box>
						{selectedBookData.description && (
							<Box
								sx={{
									"& h4": {
										fontSize: "16px",
										lineHeight: "24px",
										fontWeight: 700,

										color: (theme) =>
											theme.palette.primary.main,
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
					<Box
						sx={{
							"& h4": {
								fontSize: "16px",
								lineHeight: "24px",
								fontWeight: 700,
								color: (theme) => theme.palette.primary.main,
								// mb: ,
								mb: 0,
							},
						}}
					>
						<h4>Product Details</h4>
						<Box sx={{ display: "flex", mb: 4 }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									pr: 4,
								}}
							>
								{Object.entries(productDetails)
									.splice(0, 9)
									.map(([key, value], index) => (
										<Box
											sx={{
												display: "flex",
												// mb: 1,
												fontSize: "14px",
												lineHeight: "25px",
											}}
											key={index}
										>
											<span
												style={{
													fontWeight: 700,
													marginRight: "8px",
												}}
											>
												{key}:{" "}
											</span>
											{value}
										</Box>
									))}
							</Box>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								{Object.entries(productDetails)
									.splice(9, 16)
									.map(([key, value], index) => (
										<Box
											sx={{
												display: "flex",
												// mb: 1,
												fontSize: "14px",
												lineHeight: "25px",
											}}
											key={index}
										>
											<span
												style={{
													fontWeight: 700,
													marginRight: "8px",
												}}
											>
												{key}:{" "}
											</span>
											{value}
										</Box>
									))}
							</div>
						</Box>
					</Box>{" "}
					<Divider />
					<ProductsSlider
						title={"Similar products"}
						data={booksData[0].list}
					/>
					<ProductsSlider
						title={"New Arrivals"}
						data={booksData[0].list}
					/>
				</Container>
			</BaseLayout>
		);
}

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
