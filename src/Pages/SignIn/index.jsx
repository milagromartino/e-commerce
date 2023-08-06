import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { useContext, useState } from 'react';
import { ShoppingCardContext } from '../../Context';

function SignIn() {
  const context = useContext(ShoppingCardContext)
  const [view, setView] = useState('user-info')
  //Account 
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const renderLogin = () => {
    return (
      <div className='flex-flex-col w-80'>
        <div className='flex flex-col w-80'>
          <p>
            <span className='font-light text-sm'>Email</span>
            <span>{parsedAccount?.email}</span>
          </p>
          <p>
            <span className='font-light text-sm'>Password</span>
            <span>{parsedAccount?.password}</span>
          </p>
          <Link
            to="/"
          >
            <button className='bg-[#c9d6df] disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2' disabled={!hasUserAnAccount}>
              Log In
            </button>
          </Link>
        </div>
        <div className='text-center'>
          <a href="/" className='font-light text-xs underline underline-offset-4'>Forgot my password</a>
        </div>
        <Link to="/sign-up" className='w-full'>
          <button onClick={() => setView('create-user-info')}

            className='bg-[#c9d6df] border border-black disabled:text-black/40 disabled:bg-black/40 w-full rounded-lg py-3 mt-6 mb-2' disabled={hasUserAnAccount}>
            Sign Up
          </button>
        </Link>
      </div>
    )
  }
  const renderCreateUserInfo = () => {
    //pendiente
  }
  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()
  return (
    <Layout>
      <h1 className='font-bold text-xl text-center mb-6 w-80'>
        ¡Welcome!
      </h1>
      {renderView()}
    </Layout>
  );
}

export default SignIn;