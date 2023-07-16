import {
	alpha,
	AppBar,
	Avatar,
	Badge,
	Box,
	IconButton,
	InputBase,
	MenuItem,
	Slide,
	styled,
	TextField,
	Toolbar,
	useScrollTrigger,
} from "@mui/material";
import AppImage from "components/Common/AppImage";
import React from "react";
import {
	MdGrid4X4,
	MdOutlineFavoriteBorder,
	MdOutlineShoppingCart,
	MdSearch,
} from "react-icons/md";
import { FaHeart, FaShoppingBasket } from "react-icons/fa";
import { BsBasket3, BsGrid3X3GapFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
	selectCartItemsCount,
} from "store/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import AppLink from "components/Common/AppLink";
import IconButtonWithTooltip from "components/Common/Buttons/IconButtonWithTooltip";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	border: "1px solid rgba(0,0,0,0.1)",

	backgroundColor: "white",
	// alpha(theme.palette.common.black, 0.15),
	"&:hover": {
		border: "1px solid #000000",

		// backgroundColor:
		// alpha(theme.palette.common.black, 0.25),
	},
	"&:focus-within": {
		border: "1px solid #000000",
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

const mapCartState = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
	count: selectCartItemsCount,
});

const AppHeader = (props) => {
	const { children, window } = props;

	const { cartItems: cartItems2, total, count } = useSelector(mapCartState);
	const router = useRouter();
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<div>
			<AppBar
				position="fixed"
				variant="outlined"
				elevation={0}
				sx={{ background: "white", paddingTop: "4px" }}
			>
				<Toolbar>
					<AppImage
						src="/logo-new.png"
						width="70"
						height="50"
						alt="logo"
						onClick={() => router.push("/")}
						sx={{
							cursor: "pointer",
						}}
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
							// width: "140px",
							marginRight: "16px",
						}}
					>
						<IconButtonWithTooltip title={`Wishlist`}>
							<MdOutlineFavoriteBorder color="black" />
						</IconButtonWithTooltip>
						<IconButtonWithTooltip
							title={`Cart`}
							onClick={() => router.push("/cart")}
						>
							<Badge badgeContent={count ?? 0} color="success">
								{" "}
								<MdOutlineShoppingCart color="black" />
							</Badge>
						</IconButtonWithTooltip>
					</Box>
				</Toolbar>
				<HideOnScroll {...props}>
					<Toolbar sx={{ display: trigger ? "none" : "flex" }}>
						{links.map((item, index) => (
							<MenuItem
								key={index}
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
								onClick={() => router.push(`/books`)}
							>
								{item.title}
							</MenuItem>
						))}{" "}
					</Toolbar>
				</HideOnScroll>
			</AppBar>
		</div>
	);
};

export default AppHeader;

// links for navigation
const links = [
	{
		title: "Books",
	},
	{
		title: "New Arrivals",
	},
	{
		title: "Box Sets",
	},
	{
		title: "Best Sellers",
	},
	{
		title: "Fiction Books",
	},
	{
		title: "Award Winners",
	},
	{
		title: "Featured Authors",
	},
	{
		title: "Today's Deals",
	},
	{
		title: "Request a Book",
	},
];
