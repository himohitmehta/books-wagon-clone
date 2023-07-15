import React from "react";
import AppImage from "components/Common/AppImage";
import HeroImageSlider from "components/Common/ImageSlider/HeroImageSlider";
import { Box } from "@mui/material";

// images imported for hero slider
import bannerImage from "public/assets/featured_slider/banner.jpg";
import imageOne from "public/assets/featured_slider/one.jpg";
import imageTwo from "public/assets/featured_slider/two.jpg";
import imageThree from "public/assets/featured_slider/three.jpg";
import imageFour from "public/assets/featured_slider/four.jpg";
import imageFive from "public/assets/featured_slider/five.jpg";
import imageSix from "public/assets/featured_slider/six.jpg";
import imageSeven from "public/assets/featured_slider/seven.jpg";

// images array for hero slider
const imageSliderData = [
	imageOne,
	imageTwo,
	imageThree,
	imageFour,
	imageFive,
	imageSix,
	imageSeven,
];

const HeroSection = () => {
	return (
		<Box
			sx={{
				"& .hero-image": {
					width: "100%",
					objectFit: "contain",
					maxWidth: "100%",
					height: "100%",
					mt: 1,
				},
			}}
		>
			<AppImage
				src={bannerImage}
				className="hero-image"
				// width="100%"
			/>
			<HeroImageSlider data={imageSliderData} />
		</Box>
	);
};

export default HeroSection;
