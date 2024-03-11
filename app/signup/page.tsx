import { roboto } from '../ui/fonts';
import Logo from '../ui/logo';
import SignupForm from '../ui/signup/signupForm';

export default function SignUp() {
	return (
		<main>
			<div className='h-20 flex shrink-0 items-end rounded-lg bg-indigo-500 p-4 md:h-40'>
				<Logo />
			</div>
			<div className='bg-gray-50'>
				<h1
					className={`${roboto.className} mb-4 text-xl md:text-2xl`}
				>
					Sign Up!
				</h1>
				<div>
					<SignupForm />
				</div>
			</div>
		</main>
	);
}
