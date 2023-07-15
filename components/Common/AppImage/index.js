import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";

const StyledImage = styled(Image)(({ theme }) => ({}));

const AppImage = ({ src, alt, ...props }) => {
	return <StyledImage src={src} alt={alt || ""} {...props} />;
};

export default AppImage;
