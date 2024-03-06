import { GlobeAmericasIcon } from '@heroicons/react/16/solid';
import React from 'react';

export const Logo = () => {
	return (
		<div className='flex flex-row items-center leading-none text-white'>
			<GlobeAmericasIcon className='h-10 w-10 rotate-[15deg]' />
			<p className='text-[25px]'>Finances</p>
		</div>
	);
};

export default Logo;
