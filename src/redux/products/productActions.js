import { REQUESTING, ON_SUCCESS, ON_ERROR } from "../../constants";
import { BASE_URL } from "../../constants";
import axios from "axios";

/* Define Action creators for product management */
export function fetchProducts() {
  return {
    type: REQUESTING,
  };
}

export function productSuccess(products) {
  return {
    type: ON_SUCCESS,
    payload: products,
  };
}

export function productError(error) {
  return {
    type: ON_ERROR,
    payload: error,
  };
}

/* Function to get products from server using thunk middleware */
export function getProducts() {
  return async (dispatch) => {
    dispatch(fetchProducts());

    setTimeout(async () => {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        dispatch(productSuccess(res.data));
      } catch (error) {
        dispatch(productError(error));
      }
    }, 3500);
  };
}
