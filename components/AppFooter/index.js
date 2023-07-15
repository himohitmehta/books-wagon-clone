import { Box, Container } from "@mui/material";
import React from "react";
import {
	SiFacebook,
	SiInstagram,
	SiLinkedin,
	SiPinterest,
	SiTwitter,
	SiYoutube,
} from "react-icons/si";

// footer styles
const styles = {
	// styles applied to the footer container
	container: {
		background: "#fcfcfc",
		borderTop: "1px solid #eaeaea",
		padding: "32px 0",
	},
	// styles applied to the footer links row, this row contains the columns of links
	footerLinksRow: {
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
		alignItems: "flex-start",
		maxWidth: "80%",
		margin: "auto",
	},
	// styles applied to the footer links column, this column contains the title and the links
	footerLinksColumn: {
		display: "flex",
		flexDirection: "column",
		// textAlign: "center",
		p: 2,
		"& .title": {
			fontWeight: "bold",
			fontSize: "18px",
			mb: 1,
			color: "#d51912",
		},
		"& .link": {
			fontSize: "16px",
			lineHeight: "24px",
			mb: 1,
			"&:hover": {
				color: "#1d1d1d",
				textDecoration: "underline",
				fontWeight: 700,
				cursor: "pointer",
				lineHeight: "24px",
			},
		},
	},
	// styles applied to the footer social navigation
	footerSocialNavigation: {
		display: "flex",
		justifyContent: "center",
	},
};

const AppFooter = () => {
	return (
		<Box sx={styles.container}>
			<Container maxWidth="xl">
				{/* style the links in such a way that the titles come in a row and the links appear below them in a column */}
				<Box
					sx={{
						...styles.footerLinksRow,
					}}
				>
					{links.map((link, index) => (
						<Box
							key={index}
							sx={{
								...styles.footerLinksColumn,
							}}
						>
							<Box className="title">{link.title}</Box>
							{link.links.map((li, id) => (
								<Box className="link" key={id}>
									{li}
								</Box>
							))}
						</Box>
					))}
				</Box>
				{/* social navigation */}

				<Box sx={styles.footerSocialNavigation}>
					{socialLinks.map((link, index) => (
						<Box
							key={index}
							sx={{
								mx: 1,
								"&:hover": {
									color: "#1d1d1d",
									cursor: "pointer",
								},
							}}
						>
							{link.icon({
								size: 24,
								color: link.color,
								fill: link.color,
							})}
						</Box>
					))}
				</Box>

				{/* Copyright Description */}

				<Box>
					<Box sx={{ textAlign: "center", mt: 2, mb: 1 }}>
						Copyright © 2023 . Bookswagon.com. All Rights Reserved
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default AppFooter;

// footer links
const links = [
	{
		title: "Company",
		links: ["About Us", "Career", "Blog", "Contact Us"],
	},
	{
		title: "Policies",
		links: [
			"Privacy Policies",
			"Terms of Use",
			"Secure Shopping",

			"Copyright Policy",
		],
	},
	{
		title: "Help",
		links: ["Payment", "Shipping", "Return", "FAQ"],
	},
	{
		title: "Misc",
		links: ["Affiliate", "Sitemap"],
	},
];
// social links
const socialLinks = [
	{
		icon: SiFacebook,
		color: "#1877F2",
	},
	{
		icon: SiTwitter,
		color: "#1D9BF0",
	},
	{
		icon: SiLinkedin,
		color: "#0A66C2",
	},
	{
		icon: SiPinterest,
		color: "#BD081C",
	},
	{
		icon: SiYoutube,
		color: "#FF0000",
	},
	{
		icon: SiInstagram,
		color: "#E4405F",
	},
];
