import { GlobeAmericasIcon } from '@heroicons/react/16/solid';
import React from 'react';

export const Logo = () => {
	return (
		<div className='flex flex-row items-center leading-none text-white'>
			<GlobeAmericasIcon className='h-12 w-12 rotate-[15deg]' />
			<p className='text-[44px]'>Financial Dashboard</p>
		</div>
	);
};

export default Logo;
