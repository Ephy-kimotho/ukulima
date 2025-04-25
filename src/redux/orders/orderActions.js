import {
  ORDER_REQUESTING,
  ORDER_ON_SUCCESS,
  ORDER_ON_ERROR,
} from "../../constants";
import { DEV_URL } from "../../constants";
import axios from "axios";

/* Action creaters for the creating order actions */
export function orderStart() {
  return {
    type: ORDER_REQUESTING,
  };
}

export function orderSuccess(orders) {
  return {
    type: ORDER_ON_SUCCESS,
    payload: orders,
  };
}
export function orderError(error) {
  return {
    type: ORDER_ON_ERROR,
    payload: error,
  };
}
/* Action creator for creating an order */
export function getOrders(token) {
  return async (dispatch) => {
    dispatch(orderStart());
    try {
      const { data } = await axios.get(`${DEV_URL}/admin/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      dispatch(orderSuccess(data));
    } catch (error) {
      dispatch(
        orderError(
          error?.response?.data?.msg || error.message || "Something went wrong"
        )
      );
    }
  };
}
