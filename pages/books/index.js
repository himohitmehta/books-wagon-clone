import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "components/Common/ProductCard";
import BaseLayout from "layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPageAndParse } from "sections/HomePageSections/api_helpers/helper";
import ProductsListSkeleton from "sections/ProductsPageSections/components/ProductsListSkeleton";
import { setBooksData } from "store/books/booksSlice";

const mapState = ({ books }) => ({
	booksData: books.booksData,
});

export default function BooksListPage() {
	const booksData = useSelector((state) => state.books.booksData);
	// const { booksData } = state;

	const dispatch = useDispatch();

	// const [loading, setLoading] = useState(false);
	// // function to fetch the data from NexaFlow CMS
	// const handleFetchBlocksData = () => {
	// 	// this function will fetch the data from NexaFlow CMS
	// 	setLoading(true);
	// 	getPageAndParse()
	// 		.then((cms_parsed_data) => {
	// 			setLoading(false);
	// 			//this variable contains whole page data;
	// 			const cms_page_Homepage = cms_parsed_data;
	// 			//this variables contains each block data;

	// 			const cms_Books = cms_parsed_data["Books"];
	// 			const cms_Books_List = cms_parsed_data["Books_List"];
	// 			const cms_list = cms_parsed_data["list"];

	// 			// action to set the books data in redux store
	// 			dispatch(setBooksData(cms_Books_List));
	// 			/** your code goes here **/
	// 			console.log({
	// 				cms_page_Homepage,
	// 				cms_Books_List,
	// 				cms_Books,
	// 				cms_parsed_data,
	// 				cms_list,
	// 			});
	// 		})
	// 		.catch((e) => {
	// 			setLoading(false);
	// 			console.log(e);
	// 		});
	// };
	// // to start fetching the data from NexaFlow CMS on page load
	// useEffect(() => {
	// 	handleFetchBlocksData();
	// }, []);

	// if (loading) return <>Loading...</>;
	return (
		<BaseLayout>
			<Container
				sx={{
					pt: 3,
					pb: 6,
					".product": {
						border: "1px solid rgba(0, 0, 0, 0.1)",
						height: "360px",
						"&:hover": {
							border: "1px solid rgba(0,0,0,0.1)",
							boxShadow: " rgba(0, 0, 0, 0.16) 1px 1px 4px 0px",
						},
					},
				}}
			>
				<Typography
					sx={{
						fontSize: " 32px",
						fontWeight: 500,
						lineHeight: " 38.4px",
						fontStyle: "italic",
						pb: 3,
					}}
				>
					Books List
				</Typography>
				{/* {loading ? (
					<ProductsListSkeleton />
				) : ( */}
				<Grid container spacing={3} alignItems={"stretch"}>
					{booksData[0].list.map((item, index) => (
						<Grid key={index} item xs={6} md={2} sm={4}>
							<ProductCard
								data={item}
								key={index}
								className={"product"}
							/>
						</Grid>
					))}
				</Grid>
				{/* )} */}
			</Container>
		</BaseLayout>
	);
}
