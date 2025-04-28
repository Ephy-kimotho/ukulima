import {
  CART_REQUESTING,
  CART_ON_SUCCESS,
  CART_ON_ERROR,
} from "../../constants";

// Get stored cart items from local storage

const storedCart = JSON.parse(localStorage.getItem("cart")) || null;

/* define cart initial state */
const initialState = {
  items: storedCart,
  isLoading: false,
  error: null,
};

/* Cart reducer function to handle cart actions */
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_REQUESTING:
      return {
        ...state,
        isLoading: true,
      };
    case CART_ON_SUCCESS:
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case CART_ON_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
