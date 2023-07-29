import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCardContext } from '../../Context'


function MyOrders() {
  const context = useContext(ShoppingCardContext)
  return (
    <Layout >
      <div className='flex w-80 items-center relative justify-center'>
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => {
          <Link key={index} to={`/my-orders/${order.id}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        })
      }
    </Layout>
  )
}
export default MyOrders
