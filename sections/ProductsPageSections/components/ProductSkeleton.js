import { Skeleton } from "@mui/material";
import React from "react";

export default function ProductSkeleton() {
	return (
		<div>
			<Skeleton variant="rectangular" height={200} width={170} />
            <Skeleton variant="rectangular" height={32} width={170} />
            <Skeleton variant="rectangular" height={32} width={170} />
            
		</div>
	);
}
