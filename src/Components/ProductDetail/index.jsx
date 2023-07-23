import { ShoppingCardContext } from '../../Context'
import './style.css'
import { useContext } from 'react'

const ProductDetail = () => {
  const context = useContext(ShoppingCardContext)
  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0  border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center  p-6'>
        <h2 className='font-medium text-xl'> Detail</h2>
        <div onClick={() => context.closeProductDetail()} className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <figure>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.data.image}
          alt={context.productToShow.data.title}
        />
      </figure>
      <div className='p-6 text-justify'>
        <p className='text-lg font-bold'>{context.productToShow.data.title}</p>
        <p className='text-xl font-medium'>${context.productToShow.data.price}</p>
        <p className='text-sm font-light '>{context.productToShow.data.description}</p>
      </div>
    </aside>
  )
}

//se accede de esta manera: src={context.productToShow.data.image} debido a que productToShow es un objeto que contiene una propiedad data que a su vez contiene los datos del producto.
export default ProductDetail;