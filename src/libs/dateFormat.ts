export function formatDate(date: Date) {
	const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul", "Sep.", "Oct.", "Nov.", "Dec."];

	const newDate = new Date(date);

	const day = newDate.getDate();
	const time = newDate.getHours();
	const minutes = newDate.getMinutes();
	const month = newDate.getMonth();
	const year = newDate.getFullYear();

	return `${months[month]} ${day}, ${year}`;
}
