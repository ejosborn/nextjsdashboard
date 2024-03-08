import { Revenue } from './types';

//formats money
const formatCurrency = (amount: number) => {
	return (amount / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});
};

//formats date
export const formatDate = (
	dateStr: string,
	Locale: string = 'en-US'
) => {
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	};

	const formatter = new Intl.DateTimeFormat(
		Locale,
		options
	);

	return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
	const yAxisLabel = [];
	const highestRecord = Math.max(
		...revenue.map((month: any) => month.revenue)
	);
	const topLabel = Math.ceil(highestRecord / 1000) * 1000;

	for (let i = topLabel; i >= 0; i -= 1000) {
		yAxisLabel.push(`$${i / 1000}K`);
	}

	return { yAxisLabel, topLabel };
};

export const generatePagination = (
	currentPage: number,
	totalPages: number
) => {
	if (totalPages <= 7) {
		return Array.from(
			{ length: totalPages },
			(_, i) => i + 1
		);
	}

	if (currentPage >= totalPages - 2) {
		return [1, 2, '...', totalPages - 2, totalPages - 1];
	}

	return [
		1,
		'...',
		currentPage - 1,
		currentPage,
		currentPage + 1,
		'...',
		totalPages
	];
};
