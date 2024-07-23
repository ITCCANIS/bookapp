import { useReducer } from "react";
import CartContext from "@/contexts/cart";
import PropTypes from "prop-types";
/**
 * @typedef {Object} BookI
 * @property {string} id
 * @property {string} title
 * @property {number} price
 * @property {string} image
 */
/**
 * @typedef {{type:"ADD_TO_CART",payload:BookI}} AddToCartAction
 */
/**
 * @typedef {{type:"REMOVE_FROM_CART",payload:string}} RemoveFromCartAction
 */
/**
 * @typedef {{type:"CLEAR_CART"}} ClearCartAction
 */
/**
 * @param {BookI[]} state
 * @param {RemoveFromCartAction|AddToCartAction|ClearCartAction} action
 * @returns {BookI[]}
 */
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART": {
      const index = state.findIndex((book) => book.id === action.payload);
      if (index === -1) {
        return state;
      }
      const copy = [...state];
      copy.splice(index, 1);
      return copy;
    }

    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart: (book) => {
          dispatch({ type: "ADD_TO_CART", payload: book });
        },
        removeFromCart: (bookId) => {
          dispatch({ type: "REMOVE_FROM_CART", payload: bookId });
        },
        clearCart: () => {
          dispatch({ type: "CLEAR_CART" });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
