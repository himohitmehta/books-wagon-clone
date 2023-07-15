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

const mapState = ({ books }) => ({
	books: books.booksData,
});
export default function Home() {
	const { books } = useSelector(mapState);
	const dispatch = useDispatch();

	const handleFetchBlocksData = () => {
		getPageAndParse()
			.then((cms_parsed_data) => {
				//this variable contains whole page data;
				const cms_page_Homepage = cms_parsed_data;
				//this variables contains each block data;

				const cms_Books = cms_parsed_data["Books"];
				const cms_Books_List = cms_parsed_data["Books_List"];
				const cms_list = cms_parsed_data["list"];

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
	useEffect(() => {
		handleFetchBlocksData();
	}, []);

	console.log({ books });
	return (
		<BaseLayout>
			<HeroSection />
			<Container maxWidth="xl">
				{books.slice(0, 2).map((item, index) => (
					<ProductsSlider
						key={index}
						title={item.Title}
						data={books[0].list}
					/>
				))}
				<Grid
					container
					spacing={4}
					sx={{
						py: 3,
						borderBottom: "1px solid #e0e0e0",
						pb: 6,
					}}
				>
					<Grid
						item
						md={6}
						xs={12}
						sx={{
							".featured_image": {
								width: "100%",
								objectFit: "contain",
								maxWidth: "100%",
								height: "100%",
							},
						}}
					>
						<Typography
							sx={{
								fontSize: " 32px",
								fontWeight: 500,
								lineHeight: " 38.4px",
								fontStyle: "italic",
							}}
						>
							Fiction Books
						</Typography>
						<AppImage
							src={fictionImage}
							className="featured_image"
						/>
					</Grid>
					<Grid
						item
						md={6}
						xs={12}
						sx={{
							".featured_image": {
								width: "100%",
								objectFit: "contain",
								maxWidth: "100%",
								height: "100%",
							},
						}}
					>
						<Typography
							sx={{
								fontSize: " 32px",
								fontWeight: 500,
								lineHeight: " 38.4px",
								fontStyle: "italic",
							}}
						>
							Manga Books
						</Typography>
						<AppImage src={mangaImage} className="featured_image" />
					</Grid>
				</Grid>
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
