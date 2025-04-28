import {
  PRODUCT_REQUESTING,
  PRODUCT_ON_SUCCESS,
  PRODUCT_ON_ERROR,
} from "../../constants";
import { DEV_URL } from "../../constants";
import axios from "axios";

/* Define Action creators for product management */
export function fetchProducts() {
  return {
    type: PRODUCT_REQUESTING,
  };
}

export function productSuccess(products) {
  return {
    type: PRODUCT_ON_SUCCESS,
    payload: products,
  };
}

export function productError(error) {
  return {
    type: PRODUCT_ON_ERROR,
    payload: error,
  };
}

/* Function to get products from server using thunk middleware */
export function getProducts(page = 1) {
  return async (dispatch) => {
    dispatch(fetchProducts());

    try {
      const { data } = await axios.get(`${DEV_URL}/products?page=${page}`);
      dispatch(productSuccess(data));
    } catch (error) {
      dispatch(productError(error));
    }
  };
}
