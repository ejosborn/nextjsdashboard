//dashboard layout
import React from 'react';
import Sidenavbar from '../ui/dashboard/sidenavbar';

const layout = ({
	children
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className='h-screen flex flex-col md:flex-row md: overflow-hidden'>
			<div className='w-full flex-none md:w-64'>
				<Sidenavbar />
			</div>
			<div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
				{children}
			</div>
		</div>
	);
};

export default layout;
