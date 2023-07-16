import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import AppImage from "../AppImage";
// import EmptyState from "../EmptyState";

const styles = {
	container: {
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
			left: "20px !important",
		},
		".slick-next ": {
			right: "20px !important",
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
	},
};
export default function HeroImageSlider({ data = [], title, customSettings }) {
	const [sliderRef, setSliderRef] = useState(null);
	const [index, setIndex] = useState(0);
	const beforeChange = (prev, next) => {
		setIndex(next);
	};

	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		// autoplay: true,
		// autoplaySpeed: 2000,

		// speed: 500,
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 3,
		// 			slidesToScroll: 3,
		// 			infinite: true,
		// 			dots: true,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 			initialSlide: 2,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 		},
		// 	},
		// ],
		...customSettings,
	};

	return (
		<Box
			sx={{
				...styles.container,
			}}
		>
			{data.length > 0 && (
				<Slider
					ref={setSliderRef}
					arrows={true}
					dots={true}
					{...settings}
				>
					{Array.isArray(data) &&
						data.map((item, index) => {
							// const {title} = item;
							return (
								<AppImage
									src={item}
									className="hero-image-slider"
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
