// utils functions for cart 

// check if the product is already in the cart
export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
	return prevCartItems.find((cartItem) => cartItem.id === nextCartItem.id);
};


// function to handle adding the product to cart
export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
	const quantityIncrement = 1;
	const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

	if (cartItemExists) {
		return prevCartItems.map((cartItem) =>
			cartItem.id === nextCartItem.id
				? {
						...cartItem,
						quantity: cartItem.quantity + quantityIncrement,
				  }
				: cartItem,
		);
	}

	return [
		...prevCartItems,
		{
			...nextCartItem,
			quantity: quantityIncrement,
		},
	];
};

// function to handle removing the product from cart
export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
	return prevCartItems.filter((item) => item.id !== cartItemToRemove.id);
};

// function to handle reducing the product quantity from cart
export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }) => {
	const existingCartItem = prevCartItems.find(
		(cartItem) => cartItem.id === cartItemToReduce.id,
	);

	if (existingCartItem.quantity === 1) {
		return prevCartItems.filter(
			(cartItem) => cartItem.id !== existingCartItem.id,
		);
	}

	return prevCartItems.map((cartItem) =>
		cartItem.id === existingCartItem.id
			? {
					...cartItem,
					quantity: cartItem.quantity - 1,
			  }
			: cartItem,
	);
};
