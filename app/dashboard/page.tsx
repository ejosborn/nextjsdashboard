import { inter, roboto } from '../ui/fonts';
import RevenueCharts from '../ui/dashboard/revenueCharts';
import LatestInvoices from '../ui/dashboard/latestInvoices';
import CardWrapper from '../ui/dashboard/cards';

const Dashboard = async () => {
	return (
		<main>
			<h1
				className={`${roboto.className} mb-4 text-xl md:text-2xl`}
			>
				Dashboard
			</h1>
			{/* Dashboard Cards */}
			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 padding'>
				<CardWrapper />
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
