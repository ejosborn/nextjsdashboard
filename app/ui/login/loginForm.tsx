export default function LoginForm() {
	return (
		<form className='flex flex-row gap-5 mb-4 ml-4'>
			<input
				className='rounded-md'
				type='username'
				name='username'
				placeholder='Username'
				required
			/>
			<input
				type='password'
				name='password'
				placeholder='Password'
				required
			/>
			<button
				className='flex items-center gap-5 self-start rounded-lg
            					bg-indigo-500 px-6 py-3 text-sm text-white font-medium
            					transition-colors hover:bg-indigo-400'
			>
				Login
			</button>
		</form>
	);
}
