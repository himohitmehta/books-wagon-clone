import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import AppImage from "../AppImage";
import AppLink from "../AppLink";
import ProductCard from "../ProductCard";
// import EmptyState from "../EmptyState";

const styles = {
	container: {
		px: 2,

		borderBottom: "1px solid rgba(0,0,0,0.1)",
		pb: 2,
		pt: 2,

		"& .hero-image-slider": {
			width: "100%",
			objectFit: "contain",
			maxWidth: "100%",
			height: "100%",
		},
		".slick-prev ,.slick-next": {
			color: "black !important",
			zIndex: 200,
		},

		".slick-prev": {
			left: "-32px !important",
		},
		".slick-next ": {
			right: "-32px !important",
		},

		".slick-prev:before,.slick-next:before ": {
			color: "black !important",
		},
		".slick-dots": {
			bottom: " 20px !important",
		},
		".slick-dots li button:before": {
			fontSize: "10px !important",
		},
		".slick-dots li.slick-active button:before": {
			opacity: "1 !important",
		},
		".slider_product_card": {
			"&:hover": {
				border: "1px solid rgba(0,0,0,0.1)",
				boxShadow: " rgba(0, 0, 0, 0.16) 1px 1px 4px 0px",
			},
		},
	},
	headerContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flex: 1,
	},
	title: {
		color: (theme) => theme.palette.text.primary,
		fontSize: " 32px",
		fontWeight: 500,
		lineHeight: " 38.4px",
		pb: 2,
		fontStyle: "italic",
	},
};

export default function ProductsSlider({ data = [], title, customSettings }) {
	const [sliderRef, setSliderRef] = useState(null);
	const [index, setIndex] = useState(0);
	const beforeChange = (prev, next) => {
		setIndex(next);
	};

	const settings = {
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 9,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 7,
				},
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				},
			},
		],
		...customSettings,
		// beforeChange: (current, next) => setCurrentSlide(current),
	};

	return (
		<Box
			sx={{
				...styles.container,
			}}
		>
			<div
				style={{
					...styles.headerContainer,
				}}
			>
				{title && (
					<Typography
						sx={{
							...styles.title,
						}}
					>
						{title}
					</Typography>
				)}
				<AppLink href="/books">See all</AppLink>
			</div>

			{data.length > 0 && (
				<Slider ref={setSliderRef} infinite={false} {...settings}>
					{Array.isArray(data) &&
						data.map((item, index) => {
							// const {title} = item;
							return (
								<ProductCard
									className="slider_product_card"
									data={item}
									key={index}
								/>
							);
						})}
				</Slider>
			)}
			{/* {data.length === 0 && <EmptyState text={"No images found"} />} */}
		</Box>
	);
}
