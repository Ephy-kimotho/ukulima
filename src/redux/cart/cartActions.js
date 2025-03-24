/* Define the action creators for cart management */
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY,
} from "../../constants";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}

export function changeQuantity(product) {
  return {
    type: CHANGE_QUANTITY,
    product,
  };
}
