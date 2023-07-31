import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCardContext } from '../../Context'

//siempre que hacemos uso de API usar useEffect
function Home() {
  const context = useContext(ShoppingCardContext)
  const renderView = () => {
    const itemsToRender = context.searchTitleBar?.length > 0
      ? context.filteredItems
      : context.items;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p className='flex items-center justify-center font-bold text-2xl col-span-4 '>No Results Found <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
      </p>;
    }
  };
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 '>
        <h2 className='font-bold text-3xl'> Exclusive Products</h2>
      </div>
      <p className='font-semibold text-base mb-4'>The top trending items are based on online sales increases in 2022, compared to an average month in 2021.
      </p>
      <input type="text"
        placeholder='Search something'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none '
        onChange={(event) => context.setSearchTitleBar(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
