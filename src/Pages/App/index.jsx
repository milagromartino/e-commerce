import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCardProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'


//se enlazan las rutas
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}
//se encapsula al appRoutes con browserRouter para que me muestre dependiendo de la ruta la pagina deseada
const App = () => {
  return (
    <ShoppingCardProvider>
  
      <BrowserRouter>
        <Layout>
          <AppRoutes />
          <Navbar />
        </Layout>
      </BrowserRouter>
    </ShoppingCardProvider>

  )
}

export default App
