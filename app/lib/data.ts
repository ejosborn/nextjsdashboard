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

export const fetchCardData = async () => {
	try {
		const invoiceCount = sql`SELECT COUNT(*) FROM invoices`;
		const customerCount = sql`SELECT COUNT(*) FROM customers`;
		const invoicesStatusCount = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

		const data = await Promise.all([
			invoiceCount,
			customerCount,
			invoicesStatusCount
		]);

		const numberOfInvoices = Number(
			data[0].rows[0].count ?? '0'
		);
		const numberOfCustomers = Number(
			data[1].rows[0].count ?? '0'
		);
		const totalPaidInvoices = formatCurrency(
			data[2].rows[0].paid ?? '0'
		);
		const totalPendingInvoices = formatCurrency(
			data[2].rows[0].pending ?? '0'
		);

		return {
			numberOfInvoices,
			numberOfCustomers,
			totalPaidInvoices,
			totalPendingInvoices
		};
	} catch (err) {
		console.error('Failed to fetch card data:', err);
	}
};
