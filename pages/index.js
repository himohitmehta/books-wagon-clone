import BaseLayout from "layout";
import ProductsSlider from "components/Common/ImageSlider/ProductsSlider";
// import styles from '@/styles/Home.module.css'
import ProductsPageSections from "sections/ProductsPageSections";
import HeroSection from "sections/HomePageSections/HeroSection";
import { Container, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import fictionImage from "public/assets/home_page/fiction_books.jpg";
import mangaImage from "public/assets/home_page/manga.jpg";
import ProductCard from "components/Common/ProductCard";
import FeaturedSection from "sections/HomePageSections/FeaturedSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPageAndParse } from "sections/HomePageSections/api_helpers/helper";
import { setBooksData } from "store/books/booksSlice";

// get the books data from redux store
const mapState = ({ books }) => ({
	books: books.booksData,
});

// styles for the home page
const styles = {
	gridItemStyles: {
		".featured_image": {
			width: "100%",
			objectFit: "contain",
			maxWidth: "100%",
			height: "100%",
		},
	},
	title: {
		fontSize: " 32px",
		fontWeight: 500,
		lineHeight: " 38.4px",
		fontStyle: "italic",
	},
	gridContainerStyles: {
		py: 3,
		borderBottom: "1px solid #e0e0e0",
		pb: 6,
	},
};

export default function Home() {
	// get the books data from redux store =>books
	const books = useSelector((state) => state.books.booksData);
	const dispatch = useDispatch();

	// function to fetch the data from NexaFlow CMS
	const handleFetchBlocksData = () => {
		// this function will fetch the data from NexaFlow CMS
		getPageAndParse()
			.then((cms_parsed_data) => {
				//this variable contains whole page data;
				const cms_page_Homepage = cms_parsed_data;
				//this variables contains each block data;

				const cms_Books = cms_parsed_data["Books"];
				const cms_Books_List = cms_parsed_data["Books_List"];
				const cms_list = cms_parsed_data["list"];

				// action to set the books data in redux store
				dispatch(setBooksData(cms_Books_List));
				/** your code goes here **/
				console.log({
					cms_page_Homepage,
					cms_Books_List,
					cms_Books,
					cms_parsed_data,
					cms_list,
				});
			})
			.catch((e) => {
				console.log(e);
			});
	};
	// to start fetching the data from NexaFlow CMS on page load
	useEffect(() => {
		handleFetchBlocksData();
	}, []);

	return (
		<BaseLayout>
			<HeroSection />
			<Container maxWidth="xl">
				{/* mapping the first two items from books array */}
				{books.slice(0, 2).map((item, index) => (
					<ProductsSlider
						key={index}
						title={item.Title}
						data={books[0].list}
					/>
				))}

				{/* grid to show the featured section */}
				<Grid
					container
					spacing={4}
					sx={{
						...styles.gridContainerStyles,
					}}
				>
					{featuredData.map((item, index) => (
						<Grid
							key={index}
							item
							md={6}
							xs={12}
							sx={{
								...styles.gridItemStyles,
							}}
						>
							<Typography
								sx={{
									...styles.title,
								}}
							>
								{item.title}
							</Typography>
							<AppImage
								src={item.image}
								className="featured_image"
							/>
						</Grid>
					))}
				</Grid>

				{/* mapping the remaining items from books array */}
				{books.slice(2, 6).map((item, index) => (
					<ProductsSlider
						key={index}
						title={item.Title}
						data={books[0].list}
					/>
				))}
			</Container>
		</BaseLayout>
	);
}

// data for the featured section
const featuredData = [
	{
		title: "Fiction Books",
		image: fictionImage,
	},
	{
		title: "Manga Books",
		image: mangaImage,
	},
];
