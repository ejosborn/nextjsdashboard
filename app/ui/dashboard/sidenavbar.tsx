import Link from 'next/link';
import React from 'react';
import Logo from '../logo';
import NavLinks from './nav-links';

const Sidenavbar = () => {
	return (
		<div className='flex h-full flex-col px-3 py-4 md:px-2'>
			<Link
				href='/'
				className='mb-2 flex h-30 items- justify-start rounded-md bg-indigo-500 p-4 md:h-40'
			>
				<div className='w-32 h-15 text-white md:w-80'>
					<Logo />
				</div>
			</Link>

			{/* nav links */}
			<div>
				<NavLinks />
			</div>
		</div>
	);
};

export default Sidenavbar;
