import Link from 'next/link';
import { roboto } from '../ui/fonts';
import Logo from '../ui/logo';
import { UserPlusIcon } from '@heroicons/react/16/solid';
import LoginForm from '../ui/login/loginForm';

export default function LogIn() {
	return (
		<main>
			{/* logo */}
			<div className='h-20 flex shrink-0 items-end rounded-lg bg-indigo-500 p-4 md:h-40'>
				<Logo />
			</div>
			<div className='bg-gray-50'>
				<h1
					className={`${roboto.className} mb-4 text-xl md:text-2xl`}
				>
					Log In
				</h1>
				<LoginForm />
			</div>
		</main>
	);
}
