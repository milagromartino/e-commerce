import React, { useContext, useState } from 'react';
import { ShoppingCardContext } from '../../Context';

const Card = ({ data }) => {
  const { category, image, title, price, id } = data;
  const context = useContext(ShoppingCardContext);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const showProduct = () => {
    context.openProductDetail();
    context.setProductToShow({ data });
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
    setShowNotification(true);
    setNotificationMessage(`Producto añadido al carrito!`);
    setTimeout(() => setShowNotification(false), 1000);
  };
  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === data.id).length > 0
    if (isInCart) {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2 p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>



        </button>
      )
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      )
    }
  }
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={showProduct}>
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        {renderIcon(data.id)}
        <p className="flex justify-between">
          <span className="text-sm font-light">{title}</span>
          <span className="text-lh font-bold"> ${price}</span>
        </p>
      </figure>

      {/* Notificación */}
      <div className={`flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#18181a] text-white p-3 rounded-lg transition-all duration-300 ${showNotification ? "" : "opacity-0 pointer-events-none "}`}>
        <h2>{notificationMessage}</h2>
      </div>
    </div>
  );
};

export default Card;