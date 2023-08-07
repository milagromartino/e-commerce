import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCardProvider, initializeLocalStorage, ShoppingCardContext } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import SignUp from '../SignUp'
import { useContext } from 'react'

//se enlazan las rutas
const AppRoutes = () => {
  const context = useContext(ShoppingCardContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/jewerely', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: "/men's clothing", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: "/women's clothing", element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}
//se encapsula al appRoutes con browserRouter para que me muestre dependiendo de la ruta la pagina deseada
const App = () => {
  initializeLocalStorage()
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCardProvider>

  )
}

export default App
