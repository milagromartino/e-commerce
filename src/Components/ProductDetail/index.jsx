import { ShoppingCardContext } from '../../Context'
import './style.css'
import { useContext } from 'react'

const ProductDetail = () => {
  const context = useContext(ShoppingCardContext)
  //console.log(context.productToShow)
  /*json que devuelve
  data:  
  category: "men's clothing" 
  description : "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description."
  id: 4
  image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  price: 15.99
  rating:  {rate: 2.1, count: 430}
  title : "Mens Casual Slim Fit" */


  if (!context.productToShow || !context.productToShow.data) {
    return null; // no se muestra nada si no hay datos
  }

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
      <figure className='w-full rounded-lg'>
        <img
          src={context.productToShow.data.image}
          alt={context.productToShow.data.title} />
      </figure>
      <div className='p-6 text-justify' >
        <p className='text-xlg font-bold'>{context.productToShow.data.title}</p>
        <p className='text-xl font-medium'>${context.productToShow.data.price}</p>
        <p className='font-light text-sm'>{context.productToShow.data.description}</p>
      </div>
    </aside>
  )
}
/*Para solucionar el error que ocurre en el arreglo de imágenes pueden utilizar el operador Optional chaining (?.)
 <img
  className="w-full h-full rounded-lg"
        src={context.productToShow.images?.[0]}
        alt={context.productToShow.title}
  />*/
export default ProductDetail