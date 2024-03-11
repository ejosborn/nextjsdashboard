const SignupForm = () => {
	return (
		<div>
			<form className='flex flex-row gap-5 mb-4 ml-4'>
				<input
					type='email'
					name='email'
					placeholder='Email'
					required
				/>
				<input
					type='password'
					name='Password'
					placeholder='Password'
					required
				/>
				<input
					type='password'
					name='Confirm Password'
					placeholder='Confirm Password'
					required
				/>

				<button
					className='items-center self-start rounded-lg
						bg-indigo-500 px-6 py-3 text-sm text-white font-medium
						transition-colors hover:bg-indigo-400'
				>
					Create Account
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
