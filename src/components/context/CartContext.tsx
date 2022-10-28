import React, { createContext, ReactNode, useContext, useState } from "react";
import { isTemplateExpression } from "typescript";

/**
 * ReactNode is the property you always give to children prop in React.
 * Kommet til 36:17 på video`n:https://www.youtube.com/watch?v=lATafp15HWA&t=1889s&ab_channel=WebDevSimplified
 */

type ShoppingCartProviderProps = {
  children: ReactNode;
};

interface CartItems {
  id?: number;
  quantity?: number;
  CartItems?: any;
  item?: any;
}

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;

  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItems[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function CartContext({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<{ id: number; quantity: number }[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // Had to set any type on item param when checking for undefined/negative value

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems: any) => {
      if (currItems.find((item: any) => item.id === id)?.quantity === 1) {
        return currItems.find((item: any) => item.id !== id);
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default CartContext;
