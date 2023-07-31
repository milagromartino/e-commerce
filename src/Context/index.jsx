import { createContext, useEffect, useState } from 'react'

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

    //To add cart products 
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        // console.log('Se han actualizado los productos: ', cartProducts)
    }, [cartProducts])


    //Checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Add notification
    const [showNotification, setShowNotification] = useState(true);
    const [notificationMessage, setNotificationMessage] = useState();

    // Shopping Cart - My orders
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])


    // Get products by SearchTitleBar
    const [searchTitleBar, setSearchTitleBar] = useState("")
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByTitle = (items, searchTitleBar) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchTitleBar.toLowerCase()))
    }
    useEffect(() => {
        if (searchTitleBar) setFilteredItems(filteredItemsByTitle(items, searchTitleBar))
    }, [items,searchTitleBar])
    return (
        //se le pasa tanto el valor a leer, como el valor a modificar (setCount)
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            showNotification,
            setShowNotification,
            notificationMessage,
            setNotificationMessage,
            order,
            setOrder,
            items,
            setItems,
            searchTitleBar,
            setSearchTitleBar,
            filteredItems,
            setFilteredItems
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}
