import React from "react";

// images imported
import businessBooks from "public/assets/home_page/featured_slider/business_books.jpg";
import examBooks from "public/assets/home_page/featured_slider/exam_books.jpg";
import tarotBooks from "public/assets/home_page/featured_slider/tarot_books.jpg";
import HeroImageSlider from "components/Common/ImageSlider/HeroImageSlider";
import FeaturedImageSlider from "components/Common/ImageSlider/FeaturedImageSlider";

const images = [tarotBooks, examBooks, businessBooks];
export default function FeaturedSection() {
	return (
		<div>
			<FeaturedImageSlider
				data={images}
				customSettings={{
					className: "center",
					centerMode: true,
					infinite: true,
					centerPadding: "200px",
					slidesToShow: 1,
					speed: 500,
				}}
			/>
		</div>
	);
}
