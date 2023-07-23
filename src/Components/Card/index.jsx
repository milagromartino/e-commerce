const Card = ({ data }) => {
    const { category, image, title, price } = data;
  
    return (
      <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className='relative mb-4 w-full h-4/5'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
          <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
          <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
            +
          </button>
          <p className='flex justify-between'>
            <span className='text-sm font-light'>{title}</span>
            <span className='text-lh font-medium'> ${price}</span>
          </p>
        </figure>
      </div>
    )
  }
export default Card