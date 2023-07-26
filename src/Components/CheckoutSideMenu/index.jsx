import { ShoppingCardContext } from '../../Context'
import './style.css'
import { useContext } from 'react'
import OrderCard from '../../Components/OrderCard'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext)
  //console.log('Cart en checkoutsidemenu ', context.cartProducts)
  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0  border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center  p-6'>
        <h2 className='font-medium text-xl'> My order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div className='px-6 mb-3 overflow-y-scroll'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageURL={product.image}
              price={product.price}
            />
          ))
        }
      </div>

    </aside>
  )
}

export default CheckoutSideMenu