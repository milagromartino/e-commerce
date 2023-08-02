import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';

function SignIn() {
  return (
    <Layout>
      <form className="bg-white p-6 rounded shadow-md border border-gray-300">
        <h2 className="text-2xl font-black mb-4">Sign In</h2>
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
        <Link to='/'>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
        </Link>
        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </Layout>
  );
}

export default SignIn;