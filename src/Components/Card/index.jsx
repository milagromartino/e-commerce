import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'

const Card = ({ data }) => {
  const { category, image, title, price, description } = data;
  const context = useContext(ShoppingCardContext);

  const showProduct = () => {
    context.openProductDetail();
    context.setProductToShow({ data });
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={showProduct}
    >
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => context.setCount(context.count + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <p className="flex justify-between">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-lh font-bold"> ${price}</span>
        </p>
      </figure>
    </div>
  );
};

export default Card;