import { Link } from 'react-router-dom'
import { ShoppingCardContext } from '../../Context'
import './style.css'
import { useContext } from 'react'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext)
  //console.log('Cart en checkoutsidemenu ', context.cartProducts)

  //si el id del producto es igual, no me retorna nada. Necesito que me devuelva diferente.
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  const handleCheckout = () => {
    const orderToAdd = {
      date: currentDate,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    //se le pasa lo que ya tiene y lo que tiene que agregar
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckoutSideMenu()
    //hara que la barra de busqueda quede vacia luego de hacer checkout
    context.setSearchTitleBar(null)
  }

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
      <div className='px-6 mb-3 overflow-y-scroll flex-1'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageURL={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='mb-2'>
          <span className='font-semibold text-xl'>Total:</span>
          <span className='font-bold text-2xl'> ${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button onClick={() => handleCheckout()} className='rounded-lg bg-[#c9d6df] w-full py-3 font-bold'>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu