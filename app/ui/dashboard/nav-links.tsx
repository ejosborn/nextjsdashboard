'use client';

import {
	DocumentDuplicateIcon,
	DocumentIcon,
	HomeIcon,
	UserGroupIcon
} from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

const links = [
	{
		name: 'Home',
		href: '/dashboard',
		icon: HomeIcon
	},
	{
		name: 'Invoices',
		href: '/dashboard/invoices',
		icon: DocumentDuplicateIcon
	},
	{
		name: 'Customers',
		href: '/dashboard/customers',
		icon: UserGroupIcon
	}
];
const NavLinks = () => {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						href={link.href}
						key={link.name}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-sky-100 text-indigo-500':
									pathname === link.href
							}
						)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
};

export default NavLinks;
