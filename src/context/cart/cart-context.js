import { useContext, createContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    return context; 
};