const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
	users,
	invoices,
	customers,
	revenue
} = require('../app/lib/placeholderdata');

//seed users
async function seedUsers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

		// Create the "users" table if it doesn't exist
		const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;

		console.log(`Created "users" table`);

		//insert users
		const insertedUsers = await Promise.all(
			users.map(async (user) => {
				const hashedPassword = await bcrypt.hash(
					user.password,
					10
				);
				return client.sql`
		  INSERT INTO users (id, name, email, password)
		  VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
		  ON CONFLICT (id) DO NOTHING;
		`;
			})
		);

		console.log(`Seeded ${insertedUsers.length} users`);

		return {
			createTable,
			users: insertedUsers
		};
	} catch (error) {
		console.error('Error seeding users:', error);
		throw error;
	}
}

//seed customers
async function seedCustomers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

		const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS customers (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR NOT NULL,
          img_url TEXT NOT NULL
        );
      `;

		console.log('created customers table');

		const insertedCustomers = await Promise.all(
			customers.map(async (customer) => {
				return client.sql`
	  INSERT INTO customers (id, name, email, img_url)
	  VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
	  ON CONFLICT (id) DO NOTHING;
	`;
			})
		);

		console.log(
			`Seeded ${insertedCustomers.length} customers`
		);

		return {
			createTable,
			customers: insertedCustomers
		};
	} catch (error) {
		console.error('Error seeding customers:', error);
		throw error;
	}
}

//seed invoices
async function seedInvoices(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

		const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS invoices (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
		  customer_id UUID NOT NULL,
          amount INT NOT NULL,
          status VARCHAR(255) NOT NULL,
          date DATE NOT NULL
        );
      `;

		console.log('created invoices table');

		const insertedInvoices = await Promise.all(
			invoices.map(async (invoice) => {
				return client.sql`
	  INSERT INTO invoices (customer_id, amount, status, date)
	  VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
	  ON CONFLICT (id) DO NOTHING;
	`;
			})
		);

		console.log(
			`Seeded ${insertedInvoices.length} invoices`
		);

		return {
			createTable,
			invoices: insertedInvoices
		};
	} catch (error) {
		console.error('Error seeding invoices:', error);
		throw error;
	}
}

async function seedRevenue(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

		const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS revenue (
          month VARCHAR(255) UNIQUE,
		  revenue INT NOT NULL
        );
      `;

		console.log('created revenue table');

		const insertedRevenue = await Promise.all(
			revenue.map(async (rev) => {
				return client.sql`
	  INSERT INTO revenue (month, revenue)
	  VALUES (${rev.month}, ${rev.revenue})
	  ON CONFLICT (month) DO NOTHING;
	`;
			})
		);

		console.log(
			`Seeded ${insertedRevenue.length} months of revenue`
		);

		return {
			createTable,
			revenue: insertedRevenue
		};
	} catch (error) {
		console.error('Error seeding revenue:', error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();
	await seedUsers(client);
	await seedCustomers(client);
	await seedInvoices(client);
	await seedRevenue(client);

	await client.end();
}

main()
	.then(console.log('DB connected successfully'))
	.catch((err) => {
		console.log('An error occurred: ' + err);
	});
