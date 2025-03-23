import { REQUESTING, ON_SUCCESS, ON_ERROR } from "../../constants";

/* Load stored products from local storage */
const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

/* Defining intial state for products */
const initialState = {
  isLoading: false,
  products: storedProducts,
  error: {},
};

/* Define the product reducer */
function producerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTING:
      return {
        ...state,
        isLoading: true,
      };
    case ON_SUCCESS:
      localStorage.setItem("products", JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case ON_ERROR:
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
