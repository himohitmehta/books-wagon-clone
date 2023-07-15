export async function getPageAndParse() {
	const pageId = process.env.NEXT_PUBLIC_NEXA_FLOW_PAGEID;
	const websiteId = process.env.NEXT_PUBLIC_NEXA_FLOW_WEBSITE_ID;
	const apiKey = process.env.NEXT_PUBLIC_API_KEY;
	try {
		let url = `https://api.nexaflow.xyz/api/page/${pageId}?websiteId=${websiteId}`;
		// url += "";
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"x-api-key": apiKey,
			},
		});
		const responseJSON = await response.json();
		let result = {};
		responseJSON.blocks.map((block) => {
			if (block.nested) {
				return;
			}
			if (Array.isArray(block.blockData)) {
				let arr = block.blockData.map((nestedObj) => {
					return Object.values(nestedObj).reduce((acc, obj) => {
						let blockData = obj.blockData;
						if (typeof blockData === "string") {
							let nested = responseJSON.blocks.find(
								(block) => block.id === blockData,
							);
							let blockName = obj.fieldName;
							if (Array.isArray(nested.blockData)) {
								nested = nested.blockData.map((nestedObj) => {
									return Object.values(nestedObj).reduce(
										(acc, { blockData }) => {
											return { ...acc, ...blockData };
										},
										{},
									);
								});
								blockData = { [blockName]: nested };
							}
							if (typeof nested.blockData === "object") {
								nested = Object.values(nested.blockData).reduce(
									(acc, { blockData }) => {
										return { ...acc, ...blockData };
									},
									{},
								);
								blockData = { [blockName]: nested };
							}
						}
						return { ...acc, ...blockData };
					}, {});
				});
				result[block.blockName] = arr;
				return;
			}
			if (block.blockType === "group") {
				result[block.blockName] = Object.values(block.blockData).reduce(
					(acc, { blockData }) => {
						return { ...acc, ...blockData };
					},
					{},
				);
				return;
			}

			result[block.blockName] = block.blockData[block.blockName];
		});
		return result;
	} catch (e) {
		console.log(e);
	}
}
