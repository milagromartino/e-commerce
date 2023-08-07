import { Link, Navigate } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { useContext, useState, useRef } from 'react';
import { ShoppingCardContext } from '../../Context';

function SignIn() {
  const context = useContext(ShoppingCardContext)
  const [showPassword, setShowPassword] = useState(false);
  // Password Visibility
  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const [view, setView] = useState('user-info')
  const form = useRef(null)
  //Account 
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSingOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSingOut)
    context.setSignOut(false)
    return <Navigate replace to= {'/'}/>
  }
  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
  }
  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link
          to="/">
          <button
            className='bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2'
            disabled={!hasUserAnAccount}
            onClick={() => handleSignIn()}
            >
            Log in
          </button>
        </Link>
        <div className='text-center'>
          <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
        </div>
        <button
          className=' bg-[#c9d6df] border border-[#c9d6df] disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
          onClick={() => setView('create-user-info')}
          disabled={hasUserAnAccount}>
          Sign up
        </button>
      </div>
    )
  }
  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-light text-sm'>Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter"
            className='rounded-lg border  border-[#c9d6df] placeholder:font-light
            placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-light text-sm'>Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="hi@helloworld.com"
            className='rounded-lg border border-[#c9d6df]
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-light text-sm'>Your password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="******"
            className='rounded-lg border border-[#c9d6df]
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
          <div className='relative'>
            <button
              className='bg-transparent border-none absolute right-0 top-1/2 transform -translate-y-1/2 mb-1'
              onClick={(event) => {
                event.stopPropagation();
                togglePasswordVisibility(event);
              }}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              )}
            </button>
          </div>

        </div>
        <Link to="/">
          <button
            className='bg-[#c9d6df] text-black w-full rounded-lg py-3'
            onClick={() => createAnAccount()}>
            Create
          </button>
        </Link>
      </form>
    )
  }
  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </Layout>
  );
}


export default SignIn;