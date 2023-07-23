import { createContext } from 'react'

const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
    return (
        <ShoppingCardContext.Provider>
            {children}
        </ShoppingCardContext.Provider>
    )
}
