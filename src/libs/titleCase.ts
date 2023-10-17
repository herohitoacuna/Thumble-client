export function convertToTitleCase(text: string) {
	const titleCase = text.split("");
	titleCase[0] = titleCase[0].toUpperCase();
	return titleCase.join("");
}
