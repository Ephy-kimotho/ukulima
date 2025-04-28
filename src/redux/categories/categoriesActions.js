import {
  CATEGORY_REQUESTING,
  CATEGORY_ON_SUCCESS,
  CATEGORY_ON_ERROR,
} from "../../constants";
import { DEV_URL } from "../../constants";
import axios from "axios";

/* Define Action creators for category management */
export function fetchCategories() {
  return {
    type: CATEGORY_REQUESTING,
  };
}

export function categorySuccess(categories) {
  return {
    type: CATEGORY_ON_SUCCESS,
    payload: categories,
  };
}
export function categoryError(error) {
  return {
    type: CATEGORY_ON_ERROR,
    payload: error,
  };
}

/* Function to get categories from server using thunk middleware */
export function getCategories() {
  return async (dispatch) => {
    dispatch(fetchCategories());

    try {
      const { data } = await axios.get(`${DEV_URL}/categories`);
      dispatch(categorySuccess(data));
    } catch (error) {
      dispatch(categoryError(error));
    }
  };
}
