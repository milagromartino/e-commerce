import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCardContext } from '../../Context'


function MyOrders() {
  const context = useContext(ShoppingCardContext)
  if (context.order.length === 0) {
    return (
      <Layout >
        <div className='flex w-80 items-center relative justify-center mb-4'>
        </div>
        <p className='text-center font-bold text-xl'>This is empty... ¡Let's shop!</p>
      </Layout>
    )
  }
  return (
    <Layout >
      <div className='flex w-80 items-center relative justify-center mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}
export default MyOrders
