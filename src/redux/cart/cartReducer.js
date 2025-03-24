import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY,
} from "../../constants";
import { saveToLocalStorage } from "../../utils";

/* Get cart items from local storage if they exist */
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

/* Define the initial state for the cart */
const initialState = {
  cart: storedCart,
};

export function cartReducer(state = initialState, action) {
  let newCart;
  switch (action.type) {
    case ADD_TO_CART:
      newCart = [...state.cart, action.product];
      saveToLocalStorage("cart", newCart);

      return {
        ...state,
        cart: newCart,
      };

    case REMOVE_FROM_CART:
      newCart = state.cart.filter((item) => item.id !== action.product.id);
      saveToLocalStorage("cart", newCart);

      return {
        ...state,
        cart: newCart,
      };
    case CHANGE_QUANTITY:
      newCart = state.cart.map((item) =>
        item.id === action.product.id ? action.product : item
      );
      saveToLocalStorage("cart", newCart);

      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}
