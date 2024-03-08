// grabs data from postgresql db
import { sql } from '@vercel/postgres';
import { Revenue } from './types';
import { resolve } from 'path';

export const fetchRevenue = async () => {
	try {
		await new Promise((resolve) =>
			setTimeout(resolve, 3000)
		);
		const data = await sql<Revenue>`SELECT * FROM revenue`;
		return data.rows;
	} catch (err) {
		console.error('Failed to fetch revenue data', err);
	}
};
