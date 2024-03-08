import React from 'react';
import { fetchRevenue } from '@/app/lib/data';
import { roboto } from '../fonts';
import { generateYAxis } from '@/app/lib/utils';

const RevenueCharts = async () => {
	const rev = await fetchRevenue();
	const chartHeight = 350;
	const { yAxisLabel, topLabel } = generateYAxis(rev);
	console.log(yAxisLabel);
	return (
		<div className='w-full md:col-span-4'>
			<h2
				className={`${roboto.className} mb-4 text-xl md:text-2xl`}
			>
				Revenue
			</h2>
		</div>
	);
};

export default RevenueCharts;
