import { Container } from '../../components/Container'
import { InputField } from '../../components/InputField'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Register | Join the Platform',
    description: 'Create an account to start your experimentation journey.'
}

export default function RegisterPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen flex items-center">
            <Container>
                <div className="max-w-md mx-auto p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create an account</h1>
                        <p className="text-gray-600 dark:text-gray-400">Join our experimentation platform today</p>
                    </div>

                    <form className="space-y-4">
                        <InputField
                            label="Full Name"
                            type="text"
                            id="name"
                            placeholder="John Doe"
                        />
                        <InputField
                            label="Email Address"
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                        />
                        <InputField
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="••••••••"
                        />

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-lg shadow-indigo-200 dark:shadow-none"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <button className="text-indigo-600 font-semibold hover:underline">
                                Log in
                            </button>
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    )
}
