import {
	alpha,
	AppBar,
	Avatar,
	Box,
	IconButton,
	InputBase,
	MenuItem,
	Slide,
	styled,
	Toolbar,
	useScrollTrigger,
} from "@mui/material";
import AppImage from "components/Common/AppImage";
import React from "react";
import { MdGrid4X4, MdOutlineFavoriteBorder, MdSearch } from "react-icons/md";
import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { BsBasket3, BsGrid3X3GapFill } from "react-icons/bs";
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.black, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "black",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "65ch",
		},
	},
}));
function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}
const AppHeader = (props) => {
	return (
		<div>
			<HideOnScroll {...props}>
				<AppBar
					position="fixed"
					variant="outlined"
					sx={{ background: "white", paddingTop: "4px" }}
				>
					<Toolbar>
						<AppImage
							src="/logo-new.png"
							width="70"
							height="50"
							alt="logo"
						/>
						<Search>
							<SearchIconWrapper>
								<MdSearch />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search by Title, Publisher or ISBN"
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>
						<div style={{ flex: 1 }} />
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								width: "140px",
								marginRight: "16px",
							}}
						>
							<IconButton
								sx={{
									"&:hover": {
										background: "rgba(255,255,255,0.4)",
									},
								}}
							>
								<MdOutlineFavoriteBorder color="black" />
							</IconButton>
							<IconButton
								sx={{
									"&:hover": {
										background: "rgba(255,255,255,0.4)",
									},
								}}
							>
								<BsBasket3 color="black" />
							</IconButton>
							<IconButton
								sx={{
									"&:hover": {
										background: "rgba(255,255,255,0.4)",
									},
								}}
							>
								<BsGrid3X3GapFill color="black" />
							</IconButton>
						</Box>
						<div>
							<Avatar sx={{ width: "32px", height: "32px" }}>
								M
							</Avatar>
						</div>
					</Toolbar>
					<Toolbar sx={{ display: "flex" }}>
						{[
							"Books",
							"New Arrivals",
							"Box Sets",
							"Best Sellers",
							"Fiction Books",
							"Award Winners",
							"Featured Authors",
							"Today's Deals",
							"Request a Book",
						].map((item) => (
							<MenuItem
								key={item}
								sx={{
									color: "black",
									fontWeight: 600,
									"&:hover": {
										color: (theme) =>
											theme.palette.primary.main,
										background: "transparent",
										fontWeight: 600,
									},
								}}
							>
								{item}
							</MenuItem>
						))}{" "}
						<div style={{ flex: 1 }} />
						<MenuItem
							sx={{
								color: "black",
								fontWeight: 600,
								"&:hover": {
									color: (theme) =>
										theme.palette.primary.main,
									background: "transparent",
									fontWeight: 600,
								},
							}}
						>
							Wishlist
						</MenuItem>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</div>
	);
};

export default AppHeader;
