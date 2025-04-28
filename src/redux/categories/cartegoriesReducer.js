import {
  CATEGORY_REQUESTING,
  CATEGORY_ON_SUCCESS,
  CATEGORY_ON_ERROR,
} from "../../constants";

/* Define the initial state for categories */
const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

/*  Define the categories reducer*/
function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_REQUESTING:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ON_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case CATEGORY_ON_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export { categoriesReducer };
