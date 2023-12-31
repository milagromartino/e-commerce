import { createContext, useEffect, useState } from 'react'

export const ShoppingCardContext = createContext()
//localStorage
export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCardProvider = ({ children }) => {
    //My account
    const [account, setAccount] = useState({})
    //Sign out
    const [signOut, setSignOut] = useState(false)

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
    //Get products by categories 
    const [searchByCategory, setSearchByCategory] = useState(null)
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))

    }
    //it'll filtered depending on the category or title. Ex: tenemos titulo, pero no categoria y viceversa
    const filterBy = (searchType) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchTitleBar)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchTitleBar.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }
    useEffect(() => {
        if (searchTitleBar && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByCategory, searchTitleBar))
        if (searchTitleBar && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchTitleBar, searchByCategory))
        if (!searchTitleBar && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByCategory, searchTitleBar))
        if (!searchTitleBar && !searchByCategory) setFilteredItems(filterBy(null, items, searchByCategory, searchTitleBar))
    }, [items, searchTitleBar, searchByCategory])
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
            setFilteredItems,
            setSearchByCategory,
            searchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}
