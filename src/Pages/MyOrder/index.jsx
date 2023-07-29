import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'


function MyOrder() {
  const context = useContext(ShoppingCardContext)
  return (
    <Layout >
      <div className='flex w-80 items-center relative justify-center'>
        <Link to='/my-orders' className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 py-6'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}
export default MyOrder
