import {
  PRODUCT_REQUESTING,
  PRODUCT_ON_SUCCESS,
  PRODUCT_ON_ERROR,
} from "../../constants";

/* Defining intial state for products */
const initialState = {
  current_page: 1,
  has_next: false,
  has_prev: false,
  items: [],
  total_pages: 1,
  total_products: 0,
  isLoading: false,
  error: null,
};

/* Define the product reducer */
function producerReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_REQUESTING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_ON_SUCCESS:
      return {
        ...state,
        current_page: action.payload.current_page,
        has_next: action.payload.has_next,
        has_prev: action.payload.has_prev,
        items: action.payload.products,
        total_pages: action.payload.total_pages,
        total_products: action.payload.total_products,
        isLoading: false,
      };
    case PRODUCT_ON_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export { producerReducer };
