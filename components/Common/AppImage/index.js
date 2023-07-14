import Image from "next/image";
import React from "react";

const AppImage = ({ src, alt, ...props }) => {
	return <Image src={src} alt={alt || ""} {...props} />;
};

export default AppImage;
