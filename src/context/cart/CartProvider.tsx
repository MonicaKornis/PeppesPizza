// @ts-nocheck
import {  useState } from "react";
import { v1 as uuid} from 'uuid';
import { CartContext } from "./cart-context";
import { FormPizza, CartState } from "./../../types/index"
import { checkIfDuplicates } from './../../utils.tsx';

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, updateCart] = useState({ customerInfo: {}, items: [], totalCost: 0});


  const addAmmountToCart = (item: FormPizza, ammount: number) => {
    const existingItem: FormPizza | null = checkIfDuplicates(item, cart);
    const newItem = existingItem ? { ...existingItem, quantity: existingItem.quantity + ammount } : { ...item, id: uuid(), quantity: ammount};
    updateCart((prevCart: CartState) => {
      const items = [...prevCart.items];
      const existingItemIndex = items.findIndex((item) => item.id === existingItem?.id )
     if(existingItemIndex >= 0) {
        items[existingItemIndex]  = newItem;
      } else {
        items.push(newItem)
      }
      const totalPrice = items.reduce((acc, item) => acc + (item.totalPrice * item.quantity),0)
      return {
        ...prevCart, 
        items: items,
        totalCost: totalPrice
      }
    });
  }; //Adds and consolidates items if you add a pizza with the exact same features to the cart


  const updateAmmountInCart = (item: CartPizza, ammount: number) => {
    const existingItem: CartPizza | null = checkIfDuplicates(item, cart);
    const newItem = { ...existingItem, quantity: ammount } 
    updateCart((prevCart: any) => {
      const items = [...prevCart.items];
      const existingItemIndex = items.findIndex((item) => item.id === existingItem?.id)
      if (ammount === 0) {
        items.splice(existingItemIndex, 1);
      } else {
        items[existingItemIndex] = newItem;
      } 
      const totalPrice = items.reduce((acc, item) => acc + (item.totalPrice * item.quantity),0)
      return {
        ...prevCart, 
        items: items,
        totalCost: totalPrice
      }
    });
  };

  const clearCart = () => {
    updateCart(() => {
      return {
        items: [],
        totalCost: 0
      }
    });
  };



  const contextValue = (
   {
      cart,
      clearCart,
      addAmmountToCart,
      updateAmmountInCart
    }
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
