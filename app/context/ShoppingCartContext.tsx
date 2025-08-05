"use client";

import { createContext } from "react";

type ShoppingCartContextProviderProps = {
    children: React.ReactNode
}

const ShoppingCartContext = createContext({});

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}