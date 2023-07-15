function getCurrencyValue({
	currencyValue,
	currency = "INR",
	maximumFractionDigits = 2,
}) {
	// if (currency === undefined) return "";
	const formattedValue = new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: currency ?? "INR",
		maximumFractionDigits: maximumFractionDigits ?? 2,
	}).format(currencyValue ?? 0);
	// console.log({ formattedValue, currencyValue });

	return formattedValue;
}
export default getCurrencyValue;
