import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCardContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCardContext)
    const activeStyle = 'underline underline-offset-4'
    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut
    //Account 
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    <ul className='flex items-center gap-3'>
                        <li className='text-black/60'>
                            {parsedAccount?.email}
                        </li>
                        <li>
                            <NavLink
                                to='/my-orders'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                My orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/my-account'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                My account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/sign-in'
                                className={({ isActive }) => isActive ? activeStyle : undefined}
                                onClick={() => handleSignOut()}>
                                Sign out
                            </NavLink>
                        </li>
                    </ul>
                </>
            )
        } else {
            return (
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}>
                        Sign in
                    </NavLink>
                </li>
            )
        }
    }
    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-[#C9D6DF]'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-xl justify-between items-center flex'>
                    <NavLink
                        to={`${isUserSignOut ? '/sign-in' : '/'}`}>
                        Ecomify
                    </NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/men's clothing"
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/women's clothing"
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewerely'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewerely
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                {renderView()}
                <li className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar