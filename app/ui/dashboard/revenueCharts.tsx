import React from 'react';
import { fetchRevenue } from '@/app/lib/data';
import { roboto } from '../fonts';
import { generateYAxis } from '@/app/lib/utils';
import { revenue } from '@/app/lib/placeholderdata';
import {
	ArrowPathIcon,
	CalendarIcon
} from '@heroicons/react/16/solid';

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
				Recent Revenue
			</h2>
			<div className='rounded-xl bg-gray-50 p-4'>
				<div className='custom-grid-column mt-0 grid grid-cols-12 items-end gap-2 rouded-md bg-white p-4 md:gap-4 text-gray-400'>
					<div
						className='mb-6 sm:flex flex-col justify-between text-sm text-gray-400'
						style={{ height: `${chartHeight}px` }}
					>
						{yAxisLabel.map((label) => (
							<p key={label}>{label}</p>
						))}
					</div>
					{revenue.map((data) => (
						<div
							key={data.month}
							className='flex flex-col items-center gap-1.5 text-gray-400'
						>
							<div
								className='w-full rounded-md bg-indigo-200'
								style={{
									height: `${
										(chartHeight / topLabel) * data.revenue
									}px`
								}}
							></div>
							<p className='-rotate-90 text-sm text-gray-400 sm:rotate-0'>
								{data.month}
							</p>
						</div>
					))}
				</div>
				<div className='flex items-center pb-2 pt-6'>
					<CalendarIcon className='h-5 w-5 text-gray-500' />
					<h3 className='ml-2 text-sm text-gray-500'>
						Last 12 Months
					</h3>
				</div>
			</div>
		</div>
	);
};

export default RevenueCharts;
