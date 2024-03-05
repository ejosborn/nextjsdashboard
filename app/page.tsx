import { ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main>
			{/* logo */}
			<div className='h-20 flex shrink-0 items-end rounded-lg bg-indigo-500 p-4 md:h-52'>
				Logo
			</div>

			{/* Welcome Screen */}
			<div className='mt-4 flex grow flex-col md:flex-row gap-4'>
				<div
					className='flex flex-col justify-center gap-6 rounded-lg
				bg-gray-50 px-6 py-10 md:w-2/5'
				>
					<p className='text-xl text-gray-800 md:text-3xl md:leading-normal'>
						<strong>Welcome to The Project</strong> This is
						a financial dashboard project using Next.js
						tailwindcss and postgreSQL
					</p>
					<Link
						href='/login'
						className='flex items-center gap-5 self-start rounded-lg
						bg-indigo-500 px-6 py-3 text-sm text-white font-medium
						transition-colors hover:bg-indigo-400'
					>
						<span>Login</span>
						<ArrowRightCircleIcon className='w-5 md:w-6' />
					</Link>
				</div>

				<div
					className='flex items-center justify-center p-6 md:w-3/5 
				md:px-28 md:py-12'
				>
					{/* image */}
					{/* Shows image for medium and large devices
					<Image 
					src="src"
					alt= "hero image" 
					width={1000}
					height={760}
					className="hidden md:block"	*/}
					{/* Shows image for small devices
					<Image 
					src="src"
					alt= "hero image" 
					width={560}
					height={620}
					className="md:block hidden"	*/}
				</div>
			</div>
		</main>
	);
}
