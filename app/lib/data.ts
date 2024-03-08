// grabs data from postgresql db
import { sql } from '@vercel/postgres';
import {
	Invoice,
	LatestInvoiceRaw,
	Revenue
} from './types';
import { resolve } from 'path';
import { formatCurrency } from './utils';

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

export async function fetchLatestInvoices() {
	try {
		const data = await sql<LatestInvoiceRaw>`
		SELECT invoices.amount, customers.name, customers.email, invoices.id
		FROM invoices
		JOIN customers ON invoices.customer_id = customers.id
		ORDER BY invoices.date DESC
		LIMIT 5`;

		const latestInvoices = data.rows.map((invoice) => ({
			...invoice,
			amount: formatCurrency(invoice.amount)
		}));

		return latestInvoices;
	} catch (err) {
		console.error(
			'Failed to fetch latest invoices data',
			err
		);
	}
}
