import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: (p0: {
    id: string;
    title: string;
    price: number;
    image: string;
  }) => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export default CartContext;
