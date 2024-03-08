import React from 'react';
import { inter, roboto } from '../ui/fonts';
import { Roboto } from 'next/font/google';
import RevenueCharts from '../ui/dashboard/revenueCharts';
import LatestInvoices from '../ui/dashboard/latestInvoices';
const Dashboard = () => {
	return (
		<main>
			<h1
				className={`${roboto.className} mb-4 text-xl md:text-2xl`}
			>
				Dashboard
			</h1>
			{/* Dashboard Cards */}
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 padding'>
				<div className='w-55 h-44 rounded-md bg-gray-200'></div>
				<div className='w-55 h-44 rounded-md bg-gray-200'></div>
				<div className='w-55 h-44 rounded-md bg-gray-200'></div>
				<div className='w-55 h-44 rounded-md bg-gray-200'></div>
			</div>

			{/* Recent Revenue & Lastest Invoices */}
			<div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
				<RevenueCharts />
				<LatestInvoices />
			</div>
		</main>
	);
};

export default Dashboard;
