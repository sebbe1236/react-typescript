import React, { createContext, useContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext([null, () => {}]);

export function useAuth() {
  return useContext(CartContext);
}
