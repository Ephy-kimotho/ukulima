import {
  ORDER_REQUESTING,
  ORDER_ON_SUCCESS,
  ORDER_ON_ERROR,
} from "../../constants";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUESTING:
      return {
        ...state,
        loading: true,
      };
    case ORDER_ON_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case ORDER_ON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { orderReducer };
