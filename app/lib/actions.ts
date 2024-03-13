'use server';
import { AuthError } from 'next-auth';

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
) {
	try {
		await signIn('credntials', formData);
	} catch (err) {
		if (err instanceof AuthError) {
			switch (err.type) {
				case 'CredentialsSignin':
					return 'Invalid credentials.';
				default:
					return 'Something went wrong.';
			}
		}
		throw err;
	}
}
