const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const monthName = (monthNumber) => {
	const number = monthNumber - 1;
	if (monthNumber <= 0 || monthNumber > 12) {
		return null;
	} else {
		return months[number];
	}
};
