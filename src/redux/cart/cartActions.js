/* Define the action creators for cart management */
import {
  CART_REQUESTING,
  CART_ON_SUCCESS,
  CART_ON_ERROR,
} from "../../constants";
import { DEV_URL } from "../../constants";
import axios from "axios";

/* Action creators for the cart functionality */
export const fetchCart = () => {
  return {
    type: CART_REQUESTING,
  };
};

export const fetchCartSuccess = (cart) => {
  return {
    type: CART_ON_SUCCESS,
    payload: cart,
  };
};

export const fetchCartError = (error) => {
  return {
    type: CART_ON_ERROR,
    payload: error,
  };
};

/* function to get cart items and update the store  */
export const getCartItems = (token) => {
  return async (dispatch) => {
    dispatch(fetchCart());
    try {
      const { data } = await axios.get(`${DEV_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchCartSuccess(data));
    } catch (error) {
      dispatch(fetchCartError(error));
    }
  };
};
