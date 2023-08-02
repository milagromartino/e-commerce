import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';
function SignUp() {
    return (


        <Layout>
            <form className="bg-white p-6 rounded shadow-md border border-gray-300">
                <h2 className="text-2xl font-black mb-4">Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block font-medium mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full border-gray-300 rounded-md p-2"
                    />
                </div>
                <Link to='/'>
                
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Sign Up
                </button>
                </Link>
                <p className="mt-4 text-sm">
                    Already have an account?{' '}
                    <Link to="/sign-in" className="text-blue-500 hover:underline">
                        Sign in
                    </Link>
                </p>
            </form>
        </Layout>
    )
}

export default SignUp