import { Box } from "@mui/material";
import React from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const UnityFeaturesSection = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			{[
				"Over 11,000 five-star assets",
				"Rated by 85,000+ customers",
				"Supported by 100,000+ forum members",
				"Every asset moderated by Unity",
			].map((item) => (
				<Box
					key={item}
					sx={{
						padding: "16px",
						alignItems: "center",
						display: "flex",
					}}
				>
					<div>
						<FaCheckCircle
							style={{ color: "green", marginRight: "16px" }}
						/>
					</div>
					<p>{item}</p>
				</Box>
			))}
		</Box>
	);
};

export default UnityFeaturesSection;
