import { createContext, useState } from 'react'

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
    //Count items - Shopping Cart
    const [count, setCount] = useState(0)
    //Product Detail - Open and close product
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    //Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})
    
    return (
        //se le pasa tanto el valor a leer, como el valor a modificar (setCount)
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen, 
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}
